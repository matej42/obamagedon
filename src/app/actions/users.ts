"use server";

import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

// Function to retrieve all users
export const getAllUsers = async () => {
  try {
    return await prisma.user.findMany({
      select: {
        id: true,
        name: true, // Assuming 'name' is the username
        email: true,
        image: true, // Assuming 'image' is the avatar URL
      },
    });
  } catch (err) {
    console.error("Error retrieving users:", err);
    throw new Error("Unable to fetch users");
  }
};