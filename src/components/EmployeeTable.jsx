import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  IconButton,
  Chip,
  Box,
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import useAxios from "../hooks/useAxios";

export default function EmployeeTable({ onEdit, onDelete }) {
  const { get, BASE_URL } = useAxios();
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    get(BASE_URL)
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [get, BASE_URL]);

  const calculateYears = (startDate) => {
    return new Date().getFullYear() - new Date(startDate).getFullYear();
  };

  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ maxWidth: "100%", overflowX: "auto", p: 2 }}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ mb: 3, color: "#a1791d", fontWeight: 700 }}
      >
        Employee Directory
      </Typography>

      <TableContainer component={Paper} elevation={3}>
        <Table sx={{ minWidth: 650 }} aria-label="employee table">
          <TableHead>
            <TableRow sx={{ bgcolor: "#a1791d" }}>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Title
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Department
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Location
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Salary
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Years
              </TableCell>
              <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                Email
              </TableCell>
              <TableCell
                sx={{ color: "white", fontWeight: "bold" }}
                align="center"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((employee) => {
              const years = calculateYears(employee.startDate);
              return (
                <TableRow
                  key={employee.id}
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                    "&:hover": { bgcolor: "#f5f5f5" },
                  }}
                >
                  <TableCell component="th" scope="row">
                    <Typography variant="body2" fontWeight="bold">
                      {employee.name}
                    </Typography>
                  </TableCell>
                  <TableCell>{employee.title}</TableCell>
                  <TableCell>
                    <Chip
                      label={employee.department || "N/A"}
                      size="small"
                      color="primary"
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>{employee.location || "N/A"}</TableCell>
                  <TableCell>
                    ${employee.salary?.toLocaleString() || "N/A"}
                  </TableCell>
                  <TableCell>
                    <Chip
                      label={`${years} years`}
                      size="small"
                      color={
                        years < 1 ? "error" : years >= 5 ? "success" : "default"
                      }
                    />
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2" sx={{ fontSize: "0.85rem" }}>
                      {employee.email}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      color="primary"
                      size="small"
                      onClick={() => onEdit && onEdit(employee)}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                    <IconButton
                      color="error"
                      size="small"
                      onClick={() => {
                        if (window.confirm(`Delete ${employee.name}?`)) {
                          onDelete && onDelete(employee.id);
                        }
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>

      {employees.length === 0 && (
        <Box sx={{ textAlign: "center", p: 4 }}>
          <Typography variant="h6" color="text.secondary">
            No employees found
          </Typography>
        </Box>
      )}
    </Box>
  );
}
