import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        margin: "20px",
        padding: "20px",
        border: "2px solid #a1791d",
        borderRadius: "8px",
        boxShadow: "16px 16px 32px #bebebe, -16px -16px 32px #ffffff",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{
          color: "#a1791d",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        HR App
      </Typography>

      <Box
        component="nav"
        sx={{
          display: "flex",
          gap: "1em",
          justifyContent: "center",
          marginTop: "10px",
          flexWrap: "wrap",
        }}
      >
        <Button
          component={Link}
          to="/"
          variant="text"
          sx={{
            color: "#a1791d",
            fontWeight: 500,
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Persons
        </Button>
        <Button
          component={Link}
          to="/about"
          variant="text"
          sx={{
            color: "#a1791d",
            fontWeight: 500,
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          About
        </Button>
        <Button
          component={Link}
          to="/add-employee"
          variant="text"
          sx={{
            color: "#a1791d",
            fontWeight: 500,
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Add Employee
        </Button>
        <Button
          component={Link}
          to="/table"
          variant="text"
          sx={{
            color: "#a1791d",
            fontWeight: 500,
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Employees Table
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
