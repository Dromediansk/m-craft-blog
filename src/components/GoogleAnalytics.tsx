"use client";

import { GoogleAnalytics as NextGoogleAnalytics } from "nextjs-google-analytics";

const GoogleAnalytics = () => {
  return (
    <NextGoogleAnalytics
      trackPageViews
      gaMeasurementId={process.env.NEXT_PUBLIC_GOOGLE_ID}
      defaultConsent="denied"
    />
  );
};

export default GoogleAnalytics;
