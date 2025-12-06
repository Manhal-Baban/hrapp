import { useState } from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  TextField,
  Box,
  Alert,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import animalEmojis from "../assets/animalEmojis.json";
import useAxios from "../hooks/useAxios";

export default function PersonCard({
  name,
  title,
  salary,
  phone,
  email,
  animal,
  startDate,
  location,
  department,
  skills,
  id,
  handleDeleteEmployee,
}) {
  const yearsEmployed =
    new Date().getFullYear() - new Date(startDate).getFullYear();

  const { patch, BASE_URL } = useAxios();

  const [isEditing, setIsEditing] = useState(false);
  const [person, setPerson] = useState({
    salary,
    location,
    department,
    skills,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    patch(`${BASE_URL}/${id}`, person);
  };

  const capitalizeWords = (text) =>
    text
      .toString()
      .replace(
        /\w\S*/g,
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      );

  const renderEditField = (value, field, label) => {
    const displayValue = value
      ? Array.isArray(value)
        ? value.join(", ")
        : capitalizeWords(value)
      : "N/A";

    return isEditing ? (
      <TextField
        fullWidth
        label={label}
        name={field.toLowerCase()}
        value={value || ""}
        onChange={handleInputChange}
        size="small"
        margin="dense"
      />
    ) : (
      <Typography variant="body2" sx={{ mb: 1 }}>
        <strong>{label}:</strong> {displayValue}
      </Typography>
    );
  };

  return (
    <Card
      sx={{
        minWidth: 250,
        maxWidth: 300,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 6,
        },
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          gutterBottom
          sx={{
            borderBottom: "2px solid #a1791d",
            paddingBottom: 1,
            marginBottom: 2,
          }}
        >
          {name}
        </Typography>

        {/* Recognition Alerts */}
        {yearsEmployed < 0.5 && (
          <Alert severity="error" sx={{ mb: 2, fontSize: "0.875rem" }}>
            🔔 Schedule probation review.
          </Alert>
        )}

        {(yearsEmployed === 5 ||
          yearsEmployed === 10 ||
          yearsEmployed === 15) && (
          <Alert severity="success" sx={{ mb: 2, fontSize: "0.875rem" }}>
            🎉 Schedule recognition meeting.
          </Alert>
        )}

        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Title:</strong> {title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Phone:</strong> {phone}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Email:</strong> {email}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Favorite animal:</strong> {animalEmojis[animal] ?? "❓"}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1 }}>
          <strong>Start date:</strong> {startDate}
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <strong>Years employed:</strong> {yearsEmployed}
        </Typography>

        {/* Editable Section */}
        <Box
          sx={{
            bgcolor: "#f5f5f5",
            p: 1.5,
            borderRadius: 1,
            border: "1px solid #e0e0e0",
          }}
        >
          {renderEditField(person.salary, "salary", "Salary")}
          {renderEditField(person.location, "location", "Location")}
          {renderEditField(person.department, "department", "Department")}
          {renderEditField(person.skills, "skills", "Skills")}
        </Box>
      </CardContent>

      <CardActions sx={{ flexWrap: "wrap", gap: 1, p: 2 }}>
        <Button
          variant="contained"
          color="primary"
          startIcon={isEditing ? <SaveIcon /> : <EditIcon />}
          onClick={() => {
            if (isEditing) handleEdit();
            setIsEditing((prev) => !prev);
          }}
          fullWidth
        >
          {isEditing ? "Save" : "Edit"}
        </Button>

        {isEditing && (
          <Button
            variant="contained"
            color="secondary"
            startIcon={<CancelIcon />}
            onClick={() => {
              setPerson({ salary, location, department, skills });
              setIsEditing(false);
            }}
            fullWidth
          >
            Cancel
          </Button>
        )}

        <Button
          variant="contained"
          color="error"
          startIcon={<DeleteIcon />}
          onClick={() => {
            if (window.confirm(`Are you sure you want to delete ${name}?`)) {
              handleDeleteEmployee(id);
            }
          }}
          fullWidth
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
