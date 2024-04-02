import { render } from "@react-email/render";
import WelcomeTemplate from "../../emails/WelcomeTemplate";
import { sendEmail } from "../../../lib/email-helper";
import { NextResponse } from "next/server";
import StripeWelcomeEmail from "@/app/emails/StripeTeam";

export async function GET() {
  try {
    await sendEmail({
      to: "erdem.ozdemir@anywai.ch,abdulaziz.nal@anywai.ch,abdullah.zengin@anywai.ch,durmus.demirtas@anywai.ch,muammer.tekin@anywai.ch,taha.gocer@anywai.ch",
      subject: "UDAO WEB TEAM",
      html: render(WelcomeTemplate()),
    });
    return NextResponse.json({ success: "OK" });
  } catch (error) {
    console.log(error);
    if (error instanceof Error) {
      return NextResponse.json({ message: error?.message });
    }
    return NextResponse.json({ message: "Unknown error" });
  }
}
