import { z } from "zod";

export const signUpSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be atleast 2 characters long")
    .max(50, "Name must be less than 50 character long")
    .regex(/^[a-zA-Z\s]+$/, "Name be characters only"),

  email: z
    .email("Invalid Email Address")
    .refine((val) => val.endsWith("@gmail.com") || val.endsWith("@yahoo.com"), {
      message: "Only Gmail and Yahoo emails allowed",
    }),

  password: z
    .string()
    .min(6, "Password must be atleast 6 characters long")
    .max(20, "Password must not exceed 20 characters")
    .regex(/[A-Z]/, "Password must contain at least one capital letter")
    .regex(/[a-z]/, "Password must contain at least one small letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&]/, "Password must contain at least one special character"),
});
