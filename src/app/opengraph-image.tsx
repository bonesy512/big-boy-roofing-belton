import { ImageResponse } from "next/og";

export const alt = "Big Boy Roofing - Belton TX Trusted Roofing & Storm Restoration";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#07090e",
          backgroundImage: "radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.25) 0%, transparent 60%)",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          color: "#ffffff",
          border: "12px solid #131926",
        }}
      >
        {/* Top Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "#f59e0b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#0a0d14",
                fontWeight: "900",
                fontSize: "24px",
              }}
            >
              BB
            </div>
            <span
              style={{
                fontSize: "32px",
                fontWeight: "900",
                letterSpacing: "-1px",
                textTransform: "uppercase",
              }}
            >
              Big Boy Roofing
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 20px",
              borderRadius: "30px",
              backgroundColor: "rgba(245, 158, 11, 0.15)",
              border: "2px solid #f59e0b",
              color: "#fbbf24",
              fontWeight: "800",
              fontSize: "18px",
            }}
          >
            4.8/5.0 Google (21 Reviews) • 96% FB
          </div>
        </div>

        {/* Center Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "900px" }}>
          <span
            style={{
              color: "#f59e0b",
              fontSize: "20px",
              fontWeight: "900",
              textTransform: "uppercase",
              letterSpacing: "3px",
            }}
          >
            Built for the People!
          </span>
          <div
            style={{
              fontSize: "56px",
              fontWeight: "900",
              lineHeight: 1.1,
              letterSpacing: "-2px",
            }}
          >
            Belton's Tough, Trusted Roofing & Hail Restoration.
          </div>
          <div
            style={{
              fontSize: "22px",
              color: "#94a3b8",
              marginTop: "8px",
            }}
          >
            IKO Certified Installations • Insurance Claim Adjuster Meetings • Zero-Nail Guarantee
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "24px",
            borderTop: "2px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "16px", color: "#64748b" }}>Physical Base</span>
            <span style={{ fontSize: "20px", fontWeight: "700", color: "#f8fafc" }}>
              2012 S Wall St, Belton, TX 76513
            </span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              backgroundColor: "#f59e0b",
              color: "#0a0d14",
              padding: "16px 32px",
              borderRadius: "12px",
              fontWeight: "900",
              fontSize: "26px",
            }}
          >
            📞 (254) 239-4393
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
