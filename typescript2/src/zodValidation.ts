import express from "express";
import { z } from "zod";

// Runtime and compile time validation

// const stringZodSchema = z.string() // Runtime validation
// type StringZodType = z.infer<typeof stringZodSchema> // compile time validation

const app = express();

// Define the schema for the profile update

const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be atleast 18 years old" }).optional(),
});

type FinalUserSchema = z.infer<typeof userProfileSchema>  // It will change the datatype according to the change in userProfileSchema

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: FinalUserSchema = req.body // how to assign a type to updateBody

  if (!success) {
    res.status(411).json({})
    return
  }

  // update database user
  res.json({
    message: "User updated"
  })
});
