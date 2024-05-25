"use client"
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

const SignInpage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen w-screen ">
      {/* <LoginLink>Sign in</LoginLink> */}
      <RegisterLink className="bg-sky-500 px-4 py-2 rounded-lg">Sign up</RegisterLink>
    </div>
  );
};

export default SignInpage;
