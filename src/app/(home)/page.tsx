// src/app/(home)/page.tsx
"use client"; // Mark this component as a client component
 
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getAllPosts } from "../actions/posts";
import AuthKeeper from "../../components/AuthKeeper";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
 
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
        sx={{ textAlign: "center", width: "100%", padding: 2 }}
      >
        <Typography variant="h4" gutterBottom>
          Recent Posts
        </Typography>
        {posts.length === 0 ? (
          <Typography>No posts available</Typography>
        ) : (
          posts.map((post) => (
            <Box
              key={post.id}
              sx={{
                maxWidth: "500px",
                width: "100%",
                marginBottom: 4,
                border: "0px solid #ddd",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <img
                src={post.imageUrl}
                alt={post.caption}
                style={{ width: "100%", display: "block" }}
              />
              <Box sx={{ display: "flex", justifyContent: "space-between", padding: 1 }}>
                <Box sx={{ display: "flex", gap: 1 }}>
                  <IconButton aria-label="like">
                    <FavoriteBorderIcon />
                  </IconButton>
                  <IconButton aria-label="comment">
                    <ChatBubbleOutlineIcon />
                  </IconButton>
                  <IconButton aria-label="share">
                    <ShareIcon />
                  </IconButton>
                </Box>
                <IconButton aria-label="save">
                  <BookmarkBorderIcon />
                </IconButton>
              </Box>
              <Box sx={{ padding: 2 }}>
                <Typography variant="h6" gutterBottom>
                  {post.caption || "No caption"}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Posted by: {post.user?.name || "Unknown User"}
                </Typography>
              </Box>
            </Box>
          ))
        )}
      </Box>
    </AuthKeeper>
  );
}
