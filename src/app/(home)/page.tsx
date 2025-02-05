// src/app/(home)/page.tsx
"use client"; // Mark this component as a client component
 
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getAllPosts } from "../actions/posts";
import AuthKeeper from "../../components/AuthKeeper";
 
export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any[]>([]);
 
  useEffect(() => {
    const loadPosts = async () => {
      try {
        const posts = await getAllPosts();
        setPosts(posts);
      } catch (error) {
        console.error("Failed to load posts:", error);
      }
    };
 
    loadPosts();
  }, []);
 
  return (
    <AuthKeeper>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        sx={{ textAlign: "center" }}
      >
        <Typography variant="h4">Recent Posts</Typography>
        {posts.length === 0 ? (
          <Typography>No posts available</Typography>
        ) : (
          posts.map((post) => (
            <Box key={post.id} sx={{ maxWidth: "50%" }}>
              <Typography variant="h6">{post.caption || "No caption"}</Typography>
              <img src={post.imageUrl} alt={post.caption} style={{ width: "100%" }} />
              <Typography variant="body1">Posted by: {post.user?.name || "Unknown User"}</Typography> {/* Show the user's name */}
            </Box>
          ))
        )}
      </Box>
    </AuthKeeper>
  );
}
