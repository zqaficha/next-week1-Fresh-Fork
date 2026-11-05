"use client";

import { useState } from "react";

type ErrorT = {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  password: boolean;
};

export default function InputForm() {
  const [userInfo, setuserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [errors, seterrors] = useState<ErrorT>({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        seterrors({
          firstName: !userInfo.firstName.trim(),
          lastName: !userInfo.lastName.trim(),
          email: !userInfo.email.trim(),
          password: !userInfo.password.trim(),
        });

        if (
          userInfo.firstName.trim() &&
          userInfo.lastName.trim() &&
          userInfo.email.trim() &&
          userInfo.password.trim()
        ) {
          setuserInfo({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          });
        }
      }}
      className="flex flex-col items-center justify-center"
    >
      <div className="w-[327px] rounded-[10px] bg-white p-6 shadow-[0_8px_0_rgba(0,0,0,0.15)] min-[1500px]:mt-6 min-[1500px]:w-[540px] min-[1500px]:p-10 ">
        <input
          type="text"
          placeholder="First Name"
          value={userInfo.firstName}
          onChange={(e) =>
            setuserInfo({ ...userInfo, firstName: e.target.value })
          }
          className="mx-auto mb-4 block h-14 w-[279px] rounded-[5px] border bg-white px-5 text-[#3d3b48] outline-none"
        />

        {errors.firstName && (
          <p className="mb-4 text-right text-[10px] text-red-500">
            First Name cannot be empty
          </p>
        )}

        <input
          type="text"
          placeholder="Last Name"
          value={userInfo.lastName}
          onChange={(e) =>
            setuserInfo({ ...userInfo, lastName: e.target.value })
          }
          className="mx-auto mb-4 block h-14 w-[279px] rounded-[5px] border bg-white px-5 text-[#3d3b48] outline-none"
        />

        {errors.lastName && (
          <p className="mb-4 text-right text-[10px] text-red-500">
            Last Name cannot be empty
          </p>
        )}

        <input
          type="email"
          placeholder="Email Address"
          value={userInfo.email}
          onChange={(e) => setuserInfo({ ...userInfo, email: e.target.value })}
          className="mx-auto mb-4 block h-14 w-[279px] rounded-[5px] border bg-white px-5 text-[#3d3b48] outline-none"
        />

        {errors.email && (
          <p className="mb-4 text-right text-[10px] text-red-500">
            Email cannot be empty
          </p>
        )}

        <input
          type="password"
          placeholder="Password"
          value={userInfo.password}
          onChange={(e) =>
            setuserInfo({ ...userInfo, password: e.target.value })
          }
          className="mx-auto mb-4 block h-14 w-[279px] rounded-[5px] border bg-white px-5 text-[#3d3b48] outline-none"
        />

        {errors.password && (
          <p className="text-right text-[10px] text-red-500">
            Password cannot be empty
          </p>
        )}

        <button
          type="submit"
          className="mx-auto mt-4 mb-2 block h-14 w-[279px] cursor-pointer rounded-[5px] bg-[#38cc8b] px-11 py-[15px] text-white shadow-[inset_0_-4px_0_rgba(0,0,0,0.09)]"
        >
          CLAIM YOUR FREE
        </button>

        <p className="mt-2 mx-[46.5px] text-center text-[11px] font-medium leading-[2.36] text-[#a6a1cf]">
          By clicking the button, you are agreeing to our
          <span className="font-bold text-[#ff7979]"> Terms and</span>
        </p>
      </div>
    </form>
  );
}
