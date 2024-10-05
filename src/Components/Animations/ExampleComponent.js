import React from "react";
import { TypeAnimation } from "react-type-animation";
import { makeStyles } from "@mui/styles";
import { Box, Typography } from "@mui/material";

// Create a hook for styles
const useStyles = makeStyles((theme) => ({
  container: {
    background: 'transparent', // Background remains transparent
    borderRadius: '8px',
    textAlign: 'left',
  },
  animatedText: {
    background: 'linear-gradient(to right, #8E2DE2, #4A00E0)', // Purple to Blue gradient
    backgroundClip: 'text', // This allows the gradient to fill the text
    WebkitBackgroundClip: 'text', // For Safari compatibility
    WebkitTextFillColor: 'transparent', // Makes the text color transparent
    fontSize: '3rem', // Increased font size
    fontWeight: 'bold', // Ensure text is bold
    animation: 'fadeIn 1s ease-in-out',
  },
}));

const ExampleComponent = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.animatedText}> {/* Use the class here */}
        <TypeAnimation
          sequence={[
            "What would you like to know?",
            1500,
            "I am here to help you",
            1500
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
        />
      </Typography>
    </Box>
  );
};

export default ExampleComponent;
