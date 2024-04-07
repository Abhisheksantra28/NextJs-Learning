import React from "react";
import Link from "next/link";

const page = ({params}:any) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-800 text-white">
      <h1 className="text-5xl mb-4">Profile</h1>
      <hr className="my-4 w-1/4 border border-white" />

      <div className="max-w-md p-8  rounded-md shadow-md">
        <p className="text-lg font-semibold mb-4">User Information</p>

        <p>{/* <strong>Username:</strong> {user.username} */}</p>
        <p>{/* <strong>Email:</strong> {user.email} */}</p>

        {/* You can display additional user information here */}

        <div className="mt-6">
          <Link href="/">Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default page;
