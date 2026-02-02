import { NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";
const SUBJECT = "Level-Up Website Inquiry";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM;
    const to = process.env.RESEND_TO;

    if (!apiKey || !from || !to) {
      return NextResponse.json(
        { error: "Missing email configuration." },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { name, organisation, role, email, inquiry } = body;

    if (!name || !organisation || !email || !inquiry) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const text = [
      `Name: ${name}`,
      `School/Organisation: ${organisation}`,
      `Role: ${role || "Not provided"}`,
      `Email: ${email}`,
      `Inquiry: ${inquiry}`,
    ].join("\n");

    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: SUBJECT,
        text,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      return NextResponse.json(
        { error: errorBody?.message || "Failed to send email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Unexpected server error." },
      { status: 500 }
    );
  }
}
