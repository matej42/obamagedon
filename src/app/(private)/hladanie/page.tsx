"use client";
// src/app/hladanie/page.tsx
import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { getAllUsers } from "../../actions/users"; // Import the function to fetch users

// Define a type for the user data
interface User {
  id: string;
  name: string | null;
  email: string;
  image: string | null;
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]); // Use the User type here
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const users = await getAllUsers();
        setUsers(users);
      } catch (error) {
        console.error("Failed to load users:", error);
      }
    };

    loadUsers();
  }, []);

  const filteredUsers = users.filter(user =>
    user.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Box sx={{ marginBottom: 2 }}>
        <TextField
          label="Search Users"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
        {filteredUsers.length > 0 ? (
          filteredUsers.map(user => (
            <Box
              key={user.id}
              sx={{
                position: 'relative',
                width: '100%',
                paddingBottom: '100%', // Maintain square aspect ratio
                overflow: 'hidden',
                '&:hover .overlay': {
                  opacity: 1,
                },
              }}
            >
              {user.image && (
                <Avatar
                  src={user.image}
                  alt={user.name || "User"}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    borderRadius: 0, // Make the image square
                  }}
                />
              )}
              <Box
                className="overlay"
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s',
                }}
              >
                <Typography>{user.name}</Typography>
              </Box>
            </Box>
          ))
        ) : (
          <Typography>No users found</Typography>
        )}
      </Box>
    </Container>
  );
}