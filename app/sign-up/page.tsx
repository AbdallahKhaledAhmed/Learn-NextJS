"use client";

import { signUpSchema } from "@/schemas/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function SignUp() {
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = form;

  return (
    <div className="min-h-screen center bg-neutral-200">
      <form
        onSubmit={handleSubmit((data) => {
          const validate = signUpSchema.safeParse(data);
          if (validate.error) console.error(validate.error.message);
          else console.log(data);
        })}
        className="w-150 flex flex-col gap-3 rounded-xl bg-white shadow-xl p-10"
      >
        <h1 className="font-bold text-3xl mb-5">Sign Up</h1>
        <label>
          <p className="font-medium">Name</p>
          <input
            type="text"
            {...register("name")}
            placeholder="Enter Your Name"
          />
        </label>
        {errors.name && (
          <span className="text-red-600">{errors.name.message}</span>
        )}

        <label>
          <p className="font-medium">Email</p>
          <input
            type="text"
            {...register("email")}
            placeholder="Enter Your Email"
          />
        </label>
        {errors.email && (
          <span className="text-red-600">{errors.email.message}</span>
        )}

        <label>
          <p className="font-medium">Password</p>
          <input
            type="password"
            {...register("password")}
            placeholder="Enter Your Password"
          />
        </label>
        {errors.password && (
          <span className="text-red-600">{errors.password.message}</span>
        )}

        <button
          type="submit"
          className="bg-neutral-900 rounded-md w-full py-2 text-white mt-5"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
