import { useEffect, useState } from "react";
import PersonCard from "./PersonCard.jsx";
import axios from "axios";

export default function PersonList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("https://hrapp-1c1d.onrender.com/employees").then((response) => {
      setEmployees(response.data);
    });
  }, []);

  console.log(employees);
  return (
    <div className="card-container">
      {employees.map((employee) => (
        <PersonCard key={employee.id} {...employee} />
      ))}
    </div>
  );
}
