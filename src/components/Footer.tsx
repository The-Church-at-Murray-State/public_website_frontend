import {
  CHURCH_ADDRESS,
  CHURCH_NAME,
  CHURCH_TAGLINE,
  SERVICE_SUMMARY,
  SERVICE_TIME_LABEL,
} from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-church-blue text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start">
          <div>
            <h3 className="text-xl font-bold mb-4">{CHURCH_NAME}</h3>
            <p className="text-gray-300">{CHURCH_TAGLINE}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">{SERVICE_TIME_LABEL}</h4>
            <p className="text-gray-300">{SERVICE_SUMMARY}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Location</h4>
            <p className="text-gray-300">
              {CHURCH_ADDRESS.line1}
              <br />
              {CHURCH_ADDRESS.line2}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
