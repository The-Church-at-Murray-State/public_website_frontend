#!/bin/bash

# --- Create post-checkout hook ---
HOOK_PATH=".git/hooks/post-checkout"

cat > "$HOOK_PATH" << 'EOF'
#!/bin/bash

# Get the current branch name
BRANCH=$(git rev-parse --abbrev-ref HEAD)
LOWER_BRANCH=$(echo "$BRANCH" | tr '[:upper:]' '[:lower:]')
WRANGLER_NAME="public-website-$LOWER_BRANCH"
ENV_FILE=".env.$LOWER_BRANCH"

echo "[Hook] Current branch: $BRANCH"
echo "[Hook] Setting Wrangler name to: $WRANGLER_NAME"
echo "[Hook] Using env file: $ENV_FILE"

# Determine route pattern
if [ "$LOWER_BRANCH" = "production" ]; then
  ROUTE_PATTERN="thechurchatmurraystate.com"
else
  ROUTE_PATTERN="$LOWER_BRANCH.thechurchatmurraystate.com"
fi

echo "[Hook] Setting route pattern to: $ROUTE_PATTERN"

# Update wrangler.jsonc
if [ -f "wrangler.jsonc" ]; then
  echo "[Hook] Updating wrangler.jsonc..."

  # Replace the "name" field
  sed -i.bak -E 's/"name": *".*"/"name": "'"$WRANGLER_NAME"'"/' wrangler.jsonc

  # Replace the pattern inside the "routes" array
  # This assumes pattern line looks like: "pattern": "something",
  sed -i.bak -E 's#"pattern": *"[^"]*"#"pattern": "'"$ROUTE_PATTERN"'"#' wrangler.jsonc

  # Optional: clean up backup
  rm wrangler.jsonc.bak
else
  echo "[Hook] wrangler.jsonc not found!"
fi

# Swap to the correct .env file
if [ -f "$ENV_FILE" ]; then
  echo "[Hook] Linking $ENV_FILE → .env"
  ln -sf "$ENV_FILE" .env
else
  echo "[Hook] ⚠ Warning: $ENV_FILE not found. Skipping .env linking."
fi

echo "[Hook] Done."
EOF

# Make hook executable
chmod +x "$HOOK_PATH"

echo "[Setup] post-checkout hook created at $HOOK_PATH"

# --- Create env files ---
cat > .env.production << EOF
NEXT_PUBLIC_SITE_URL=https://thechurchatmurraystate.com
EOF

cat > .env.staging << EOF
NEXT_PUBLIC_SITE_URL=https://staging.thechurchatmurraystate.com
EOF

cat > .env.testing << EOF
NEXT_PUBLIC_SITE_URL=https://testing.thechurchatmurraystate.com
EOF

echo "[Setup] Created .env.production, .env.staging, .env.testing files."

# --- Run the hook once ---
echo "[Setup] Running post-checkout hook once..."
bash "$HOOK_PATH"

# --- Set assume-unchanged on wrangler.jsonc ---
echo "[Setup] Setting git to assume unchanged for wrangler.jsonc"
git update-index --assume-unchanged wrangler.jsonc
