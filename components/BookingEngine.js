"use client";

import { useEffect } from "react";

export default function BookingEngine() {
  useEffect(() => {
    function initCloudbeds() {
      const container = document.getElementById('cloudbeds-booking-container');
      if (!container) return;

      if (window.CloudbedsBookingEngine && window.CloudbedsBookingEngine.init) {
        window.CloudbedsBookingEngine.init({
          propertyId: '70415q',
          mode: 'standard',
          container: '#cloudbeds-booking-container'
        });
      } else {
        setTimeout(initCloudbeds, 500);
      }
    }

    initCloudbeds();
  }, []);

  return (
    <div className="bg-white p-8 md:p-12 shadow-2xl border border-navy/5">
      <div id="cloudbeds-booking-container"></div>
    </div>
  );
}
