// src/components/AdBanner.jsx
import { useEffect, useRef } from "react";

const CLIENT          = "ca-pub-2285227170104127";
const SLOT_HORIZONTAL = "2568354631";
const SLOT_SQUARE     = "4363550984";

function RealAd({ slot }) {
  const ref = useRef(null);

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      // AdSense not loaded in dev
    }
  }, []);

  return (
    <ins
      ref={ref}
      className="adsbygoogle"
      style={{ display: "block", width: "100%" }}
      data-ad-client={CLIENT}
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}

export default function AdBanner({ variant = "horizontal", className = "" }) {
  const slot = variant === "square" ? SLOT_SQUARE : SLOT_HORIZONTAL;
  return (
    <div className={`w-full my-5 overflow-hidden ${className}`}>
      <RealAd slot={slot} />
    </div>
  );
}