import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        padding: "20px",
        border: "2px solid #a1791d",
        borderRadius: "8px",
        marginBottom: "20px",
        marginTop: "auto",
        textAlign: "center",
        boxShadow: "16px 16px 32px #bebebe, -16px -16px 32px #ffffff",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "#a1791d",
          fontSize: "16px",
        }}
      >
        © 2025 Manhal Baban. All rights reserved. WP25K
      </Typography>
    </Box>
  );
};

export default Footer;
