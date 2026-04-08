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

# Determine route patterns
if [ "$LOWER_BRANCH" = "production" ]; then
  ROUTE_PATTERN="encmurray.com"
  WWW_ROUTE_PATTERN="www.encmurray.com"
else
  ROUTE_PATTERN="$LOWER_BRANCH.encmurray.com"
  WWW_ROUTE_PATTERN="www.$LOWER_BRANCH.encmurray.com"
fi

echo "[Hook] Setting route patterns to: $ROUTE_PATTERN and $WWW_ROUTE_PATTERN"

# Update wrangler.jsonc
if [ -f "wrangler.jsonc" ]; then
  echo "[Hook] Updating wrangler.jsonc..."

  # Replace the "name" field
  sed -i.bak -E 's/"name": *".*"/"name": "'"$WRANGLER_NAME"'"/' wrangler.jsonc

  # Create a temporary file with the new routes array
  cat > /tmp/new_routes.json << ROUTES_EOF
	"routes": [
		{
			"pattern": "$ROUTE_PATTERN",
			"custom_domain": true
		},
		{
			"pattern": "$WWW_ROUTE_PATTERN",
			"custom_domain": true
		}
	],
ROUTES_EOF

  # Find the start and end lines of the routes array
  START_LINE=$(grep -n '"routes"' wrangler.jsonc | cut -d: -f1)
  if [ -n "$START_LINE" ]; then
    # Find the closing bracket of the routes array (look for ], after routes)
    END_LINE=$(tail -n +$START_LINE wrangler.jsonc | grep -n '^[[:space:]]*],' | head -1 | cut -d: -f1)
    END_LINE=$((START_LINE + END_LINE - 1))
    
    # Create new wrangler.jsonc
    head -n $((START_LINE - 1)) wrangler.jsonc > wrangler.jsonc.new
    cat /tmp/new_routes.json >> wrangler.jsonc.new
    tail -n +$((END_LINE + 1)) wrangler.jsonc >> wrangler.jsonc.new
    
    # Replace the original file
    mv wrangler.jsonc.new wrangler.jsonc
    
    # Clean up temp file
    rm -f /tmp/new_routes.json
  fi

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
NEXT_PUBLIC_SITE_URL=https://encmurray.com
EOF

cat > .env.staging << EOF
NEXT_PUBLIC_SITE_URL=https://staging.encmurray.com
EOF

cat > .env.testing << EOF
NEXT_PUBLIC_SITE_URL=https://testing.encmurray.com
EOF

echo "[Setup] Created .env.production, .env.staging, .env.testing files."

# --- Run the hook once ---
echo "[Setup] Running post-checkout hook once..."
bash "$HOOK_PATH"

# --- Set assume-unchanged on wrangler.jsonc ---
echo "[Setup] Setting git to assume unchanged for wrangler.jsonc"
git update-index --assume-unchanged wrangler.jsonc
