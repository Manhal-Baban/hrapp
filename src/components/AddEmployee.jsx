import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export default function AddEmployee({ formData, setFormData, handleClick }) {
  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick();

    setFormData({
      name: "",
      title: "",
      salary: "",
      phone: "",
      email: "",
      animal: "",
      startDate: "",
      location: "",
      department: "",
      skills: "",
    });
  };

  return (
    <Card sx={{ maxWidth: 800, margin: "20px auto" }}>
      <CardContent sx={{ p: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            color: "#a1791d",
            textAlign: "center",
            fontWeight: 700,
            mb: 3,
          }}
        >
          Add New Employee
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
            gap: 2,
          }}
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Salary"
            name="salary"
            type="number"
            value={formData.salary}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Animal"
            name="animal"
            value={formData.animal}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Start Date"
            name="startDate"
            type="date"
            value={formData.startDate}
            onChange={handleChange}
            required
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
          />

          <TextField
            label="Location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Department"
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
            fullWidth
          />

          <TextField
            label="Skills"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            placeholder="Separate with commas"
            fullWidth
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            startIcon={<PersonAddIcon />}
            sx={{ gridColumn: { sm: "1" } }}
          >
            Add Employee
          </Button>

          <Button
            type="button"
            variant="outlined"
            color="secondary"
            size="large"
            startIcon={<RestartAltIcon />}
            onClick={() => {
              setFormData({
                name: "",
                title: "",
                salary: "",
                phone: "",
                email: "",
                animal: "",
                startDate: "",
                location: "",
                department: "",
                skills: "",
              });
            }}
            sx={{ gridColumn: { sm: "2" } }}
          >
            Reset
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
