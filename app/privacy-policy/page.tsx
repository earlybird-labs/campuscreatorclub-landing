// app/privacy-policy/page.tsx or pages/privacy-policy.tsx (depending on your Next.js version)

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return (
      <div className="min-h-screen bg-white">
        {/* Mobile Header */}
        <header className="px-4 py-4 border-b border-gray-200 sticky top-0 bg-white z-10">
          <div className="flex items-center justify-between">
            <h1 className="text-lg sm:text-xl font-bold text-gray-900">
              Privacy Policy
            </h1>
            <a
              href="/"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
            >
              ← Home
            </a>
          </div>
        </header>

        {/* Mobile Content */}
        <main className="px-4 py-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-blue-800 text-sm mb-4">
              For the best viewing experience on mobile, we recommend opening
              the PDF in a new tab or downloading it.
            </p>
            <div className="space-y-3">
              <a
                href="/privacy-policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  View PDF in New Tab
                </Button>
              </a>
              <a
                href="/privacy-policy.pdf"
                download="campus-creator-club-privacy-policy.pdf"
                className="block"
              >
                <Button variant="outline" className="w-full">
                  Download PDF
                </Button>
              </a>
            </div>
          </div>

          {/* Fallback iframe for mobile - smaller height */}
          <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden">
            <iframe
              src="/privacy-policy.pdf"
              width="100%"
              height="100%"
              style={{ border: "none" }}
              title="Privacy Policy"
            >
              <div className="p-4 text-center">
                <p className="text-gray-600 mb-4">
                  Your browser does not support PDF viewing.
                </p>
                <a
                  href="/privacy-policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline"
                >
                  Click here to view the PDF
                </a>
              </div>
            </iframe>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Header */}
      <header className="container mx-auto px-4 py-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Privacy Policy</h1>
          <div className="flex items-center gap-4">
            <a
              href="/privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-700 font-medium text-sm"
            >
              Open in New Tab
            </a>
            <a
              href="/"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </header>

      {/* Desktop PDF Viewer */}
      <main className="container mx-auto px-4 py-8">
        <div className="w-full" style={{ height: "calc(100vh - 200px)" }}>
          <iframe
            src="/privacy-policy.pdf"
            width="100%"
            height="100%"
            style={{ border: "none" }}
            title="Privacy Policy"
            className="rounded-lg shadow-lg"
          >
            <div className="p-8 text-center bg-gray-50 rounded-lg">
              <p className="text-gray-600 mb-4">
                Your browser does not support PDF viewing.
              </p>
              <div className="space-y-2">
                <a
                  href="/privacy-policy.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-blue-600 hover:text-blue-700 underline"
                >
                  View PDF in New Tab
                </a>
                <a
                  href="/privacy-policy.pdf"
                  download="campus-creator-club-privacy-policy.pdf"
                  className="block text-blue-600 hover:text-blue-700 underline"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </iframe>
        </div>
      </main>
    </div>
  );
}
