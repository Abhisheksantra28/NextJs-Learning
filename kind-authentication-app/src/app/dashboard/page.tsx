import {
  LogoutLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) redirect("/sign-in");

  return (
    <div className="flex flex-col justify-center items-center w-screen min-h-screen">
      Hey {user.given_name} {user.family_name}
      <LogoutLink className="bg-sky-500 px-4 py-2 rounded-lg mt-2">
        Log out
      </LogoutLink>
    </div>
  );
};

export default page;
