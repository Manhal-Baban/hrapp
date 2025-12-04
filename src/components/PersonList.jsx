import PersonCard from "./PersonCard";

export default function PersonList({ employees, onDelete }) {
  return (
    <div className="card-container">
      {employees.map((employee) => (
        <PersonCard
          key={employee.id}
          {...employee}
          handleDeleteEmployee={onDelete}
        />
      ))}
    </div>
  );
}
