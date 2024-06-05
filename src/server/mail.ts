import ThanksTemp from "emails/thanks";
import VerificationTemp from "emails/verification";
import { nanoid } from "nanoid";
import { siteConfig } from "~/config/site";
import { resend } from "~/lib/resend";
import {
  type SendWelcomeEmailProps,
  type sendVerificationEmailProps,
} from "~/types";

export const sendWelcomeEmail = async ({
  toMail,
  userName,
}: SendWelcomeEmailProps) => {
  const subject = `Thanks for using ${siteConfig().name}!`;
  const temp = ThanksTemp({ userName });

  //@ts-expect-error text field is required
  await resend.emails.send({
    from: `ChadNext App <chadnext@moinulmoin.com>`,
    to: toMail,
    subject: subject,
    headers: {
      "X-Entity-Ref-ID": nanoid(),
    },
    react: temp,
  });
};

export const sendVerificationEmail = async ({
  toMail,
  verificationUrl,
  userName,
}: sendVerificationEmailProps) => {
  const subject = "Email Verification for ChadNext";
  const temp = VerificationTemp({ userName, verificationUrl });

  resend.emails
    //@ts-expect-error text field is required
    .send({
      from: `ChadNext App <chadnext@moinulmoin.com>`,
      to: toMail,
      subject: subject,
      headers: {
        "X-Entity-Ref-ID": nanoid(),
      },
      react: temp,
    });
};
