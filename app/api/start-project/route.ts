import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot spam protection: bots tend to fill every field, humans never see this one.
  if (typeof body.company_website_url === "string" && body.company_website_url.length > 0) {
    return NextResponse.json({ ok: true });
  }

  const { name, email, projectType } = body as { name?: string; email?: string; projectType?: string };

  if (!name || !email || !projectType) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (typeof email !== "string" || !emailPattern.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // In production this would forward to a CRM (HubSpot, Attio, etc.) via server-side integration.
  console.log("New project inquiry:", body);

  return NextResponse.json({ ok: true });
}
