"use server";

import { prisma } from "@/app/api/auth/[...nextauth]/prisma";

// Function to retrieve all posts, sorted by creation date with user data included
export const getAllPosts = async () => {
  try {
    return await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
      include: { user: true },
    });
  } catch (err) {
    console.error("Error retrieving posts:", err);
    throw new Error("Unable to fetch posts");
  }
};

// Function to retrieve posts by specific user ID, sorted by creation date
export const getPostsByUser = async (userId: string) => {
  try {
    return await prisma.post.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    });
  } catch (err) {
    console.error(`Error retrieving posts for userId ${userId}:`, err);
    throw new Error("Unable to fetch posts for the specified user");
  }
};

// Function to create a new post with optional caption
export const addNewPost = async (userId: string, imageUrl: string, caption?: string) => {
  try {
    const post = await prisma.post.create({
      data: {
        userId,
        imageUrl,
        caption,
      },
    });
    return post;
  } catch (err) {
    console.error("Error creating post:", err);
    throw new Error("Unable to create post");
  }
};
