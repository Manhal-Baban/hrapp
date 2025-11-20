import styles from "./AddEmployee.module.css";

export default function AddEmployee({ formData, setFormData, handleClick }) {
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClick(); // App.jsx handles posting + updating
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
    <div className="card">
      <h2>Add Employee</h2>
      <form className={styles.addEmployees} onSubmit={handleSubmit}>
        {[
          "name",
          "title",
          "salary",
          "phone",
          "email",
          "animal",
          "startDate",
          "location",
          "department",
          "skills",
        ].map((field) => (
          <div key={field}>
            <label htmlFor={field}>{field}</label>
            <input
              id={field}
              name={field}
              value={formData[field]}
              onChange={handleChange}
            />
          </div>
        ))}

        <button type="submit">Add employee</button>

        <button
          type="reset"
          onClick={() =>
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
            })
          }
        >
          Reset
        </button>
      </form>
    </div>
  );
}
