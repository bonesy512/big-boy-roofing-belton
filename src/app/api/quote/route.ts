import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, phone, address, serviceCategory, notes, zip, honeypot } = body;

    // Honeypot spam check
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Request received." }, { status: 200 });
    }

    if (!fullName || !phone || !address) {
      return NextResponse.json(
        { success: false, error: "Please fill in your name, phone number, and address." },
        { status: 400 }
      );
    }

    // Basic phone validation (at least 10 digits)
    const digitsOnly = phone.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid 10-digit phone number so our team can reach you." },
        { status: 400 }
      );
    }

    // In production, dispatch email/SMS or CRM webhook to Juan Barron & Austin Farr
    console.log("[INSPECTION INTAKE DISPATCHED]", {
      timestamp: new Date().toISOString(),
      fullName,
      phone,
      address,
      serviceCategory: serviceCategory || "Free Roof Inspection",
      notes: notes || "",
      zip: zip || "",
      assignedTo: "Juan Barron & Austin Farr (Belton Dispatch)",
    });

    return NextResponse.json(
      {
        success: true,
        message: `Thank you ${fullName}! Your inspection request has been dispatched to Juan & Austin. We will call you at ${phone} within 15 minutes during operating hours.`,
        dispatchId: `BBR-${Date.now().toString().slice(-6)}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[QUOTE_API_ERROR]", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit inspection request. Please call us directly at (254) 239-4393." },
      { status: 500 }
    );
  }
}
