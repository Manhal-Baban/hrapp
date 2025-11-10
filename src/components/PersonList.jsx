import PersonCard from "./PersonCard.jsx";

export default function PersonList({ employees }) {
  return employees.map((employee) => (
    <PersonCard key={employee.id} {...employee} />
  ));
}
