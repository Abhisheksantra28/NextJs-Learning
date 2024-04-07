import User from "@/models/userModel";
import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";

interface sendEmailProps {
  email: string;
  emailType: "VERIFY" | "RESET";
  userId: string;
}

export const sendEmail = async ({
  email,
  emailType,
  userId,
}: sendEmailProps) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenexpiry: Date.now() + 3600000,
      });
    }

    if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordtoken: hashedToken,
        forgotPasswordtokenExpiry: Date.now() + 3600000,
      });
    }

    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "19dbcc95614165",
        pass: "4f8451c2c444ca",
      },
    });

    const mailOptions = {
      from: "abhisheksantra99@gmail.com", // sender address
      to: email, // list of receivers
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password", // Subject line
      html: `<p> Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === "VERIFY" ? "Verify your email" : "Reset your password"
      }
      or copy paste the link below in your browser.
      <br>
      ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
      </p>`,
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
