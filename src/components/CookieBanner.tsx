"use client";

import { getLocalStorage, setLocalStorage } from "@/lib/storageHelper";
import { useEffect, useState } from "react";
import { consent } from "nextjs-google-analytics";
import Link from "next/link";

const CookieBanner = () => {
  const [cookieConsent, setCookieConsent] = useState(false);

  useEffect(() => {
    const storedCookieConsent = getLocalStorage("cookie_consent", null);

    setCookieConsent(storedCookieConsent);
  }, [setCookieConsent]);

  useEffect(() => {
    const newValue = cookieConsent ? "granted" : "denied";

    consent({
      arg: "update",
      params: {
        ad_storage: newValue,
        analytics_storage: newValue,
      },
    });
  }, [cookieConsent]);

  const handleDenyConsent = () => {
    consent({
      arg: "update",
      params: {
        ad_storage: "denied",
        analytics_storage: "denied",
      },
    });

    setLocalStorage("cookie_consent", false);
    setCookieConsent(false);
  };

  const handleAcceptConsent = () => {
    consent({
      arg: "update",
      params: {
        ad_storage: "granted",
        analytics_storage: "granted",
      },
    });

    setLocalStorage("cookie_consent", true);
    setCookieConsent(true);
  };

  return (
    <div
      className={`${
        cookieConsent !== null ? "hidden" : "flex"
      } my-10 mx-auto max-w-max md:max-w-screen-sm
                        fixed bottom-0 left-0 right-0 
                        flex px-3 md:px-4 py-3 justify-between items-center flex-col sm:flex-row gap-4  
                         bg-gray-700 rounded-lg shadow`}
    >
      <div className="text-center">
        <p className="text-white">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="/files/consent.pdf"
            className="underline cursor-pointer"
          >
            Cookies
          </Link>
          &nbsp; are used on this site.
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={handleDenyConsent}
          className="px-5 py-2 text-gray-300 rounded-md border-gray-900"
        >
          Deny
        </button>
        <button
          onClick={handleAcceptConsent}
          className="bg-gray-900 px-5 py-2 text-white rounded-lg"
        >
          Allow
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
