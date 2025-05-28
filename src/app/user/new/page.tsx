"use client";

import Button from "@/app/components/Button";
import FieldError from "@/app/components/FieldError";
import TextInput from "@/app/components/TextInput";
import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";

export type UserInput = {
  email: string;
  password: string;
};
async function submitUser(user: { email: string; password: string }) {
  const res = await fetch("/api/user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  return await res.json();
}
const Page = () => {
  const onSubmit = async (data: UserInput) => {
    await submitUser(data).then(() => {
      signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: "/",

        // You can specify a callback URL to redirect after login
        // Redirect after login
      }).then((result) => {
        if (result?.error) {
          console.error("Login failed:", result.error);
        } else {
          console.log("Login successful");
          // Redirect or perform any other action after successful login
        }
      });
    });
  };
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isLoading },
  } = useForm<UserInput>();
  return (
    <div className="w-full h-screen flex items-center justify-center bg-indigo-100">
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
        className="w-full md:w-1/3 rounded-lg"
      >
        <div className="px-12 pb-10">
          {/* スピナー表示 */}
          {isSubmitting && (
            <div className="flex justify-center mb-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          )}
          <div className="w-full mb-2">
            <div className="flex items-center">
              <TextInput
                label="Email"
                placeholder="Email"
                type="email"
                register={register}
                path="email"
                config={{
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Invalid email format",
                  },
                }}
              />
            </div>
            {errors.email && <FieldError error={errors.email.message ?? ""} />}
          </div>
          <div className="w-full mb-2">
            <div className="flex items-center">
              <TextInput
                label="Password"
                placeholder="Password"
                type="password"
                register={register}
                path="password"
                config={{
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 100,
                    message: "Password is too long",
                  },
                }}
              />
            </div>
            {errors.password && (
              <FieldError error={errors.password.message ?? ""} />
            )}
          </div>
          <Button
            label={isSubmitting || isLoading ? "Register ..." : "Register"}
            type="submit"
            className="w-full py-2 mt-4 rounded-full duration-300 bg-blue-400 text-gray-100 hover:bg-blue-500 transition-colors"
          />
        </div>
      </form>
    </div>
  );
};

export default Page;
