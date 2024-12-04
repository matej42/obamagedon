// src/theme/buttonStyles.ts
export const buttonStyles = {
    googleButton: {
      backgroundImage:
        "repeating-linear-gradient(90deg, red, orange 10%, yellow 20%, green 30%, blue 40%, indigo 50%, violet 60%)",
      color: "white",
      backgroundSize: "200% auto",
      borderColor: "transparent",
      "&:hover": {
        backgroundPosition: "100% 0",
      },
    },
    githubButton: {
      backgroundImage:
        "repeating-linear-gradient(90deg, violet, indigo 10%, blue 20%, green 30%, yellow 40%, orange 50%, red 60%)",
      color: "black",
      backgroundSize: "200% auto",
      borderColor: "transparent",
      "&:hover": {
        backgroundPosition: "100% 0",
      },
    },
  };
  