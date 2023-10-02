const Button = () => {
  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "10px 20px",
          fontSize: "14px",
        },
      },
    },
  };
};

export default Button;
