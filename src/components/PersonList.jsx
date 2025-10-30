import PersonCard from "./PersonCard.jsx";

import employeeData from "../assets/employeeData.json";

export default function PersonList() {
  return employeeData.map((employee) => (
    <PersonCard key={employee.id} {...employee} />
  ));
}
