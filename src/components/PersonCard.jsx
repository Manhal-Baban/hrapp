import styles from "./Card.module.css";
import animalEmojis from "../assets/animalEmojis.json";
import { useState } from "react";
import axios from "axios";

const Card = (props) => {
  const yearsEmployed =
    new Date().getFullYear() - new Date(props.startDate).getFullYear();

  const salary = props.salary;
  const location = props.location;
  const department = props.department;
  const skills = props.skills;
  const id = props.id;

  const [isEditing, setIsEditing] = useState(false);
  const [person, setPerson] = useState({
    salary,
    location,
    department,
    skills,
  });

  const update = (
    url = "https://hrapp-1c1d.onrender.com",
    body = {},
    headers = {}
  ) => {
    axios.patch(url, body, { headers });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPerson((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    update(`https://hrapp-1c1d.onrender.com/employees/${id}`, person);
  };

  const renderEditForm = (value, name) => {
    const capitalizeWords = (text) =>
      text
        .toString()
        .replace(
          /\w\S*/g,
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        );
    const displayValue = value ? capitalizeWords(value) : "N/A";
    const displayName = name ? capitalizeWords(name) : "N/A";

    return isEditing ? (
      <input value={value || ""} name={name} onChange={handleInputChange} />
    ) : (
      <p>
        {displayName}: {displayValue}
      </p>
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.title}>Title: {props.title}</div>
      <div className={styles.salary}>
        {" "}
        {renderEditForm(person.salary, "salary")}
      </div>
      <div className={styles.phone}>Phone: {props.phone}</div>
      <div className={styles.email}>Email: {props.email}</div>
      <div className={styles.animal}>Animal: {animalEmojis[props.animal]}</div>
      <div className={styles.startDate}>Start Date: {props.startDate}</div>
      <div className={styles.location}>
        {" "}
        {renderEditForm(person.location, "location")}
      </div>
      <div className={styles.department}>
        {" "}
        {renderEditForm(person.department, "department")}
      </div>
      <div className={styles.skills}>
        {" "}
        {renderEditForm(person.skills, "skills")}
      </div>
      <div className={styles.yearsEmployed}>
        Years Employed: {yearsEmployed}{" "}
      </div>

      {yearsEmployed == 5 ? "🎉 Schedule recognition meeting." : ""}
      {yearsEmployed == 10 ? "🎉 Schedule recognition meeting." : ""}
      {yearsEmployed == 15 ? "🎉 Schedule recognition meeting." : ""}
      {yearsEmployed < 0.5 ? "🔔 Schedule recognition review." : ""}

      <button
        onClick={() => {
          if (isEditing) handleEdit();
          setIsEditing((prev) => !prev);
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>

      {isEditing && (
        <button
          onClick={() => {
            if (isEditing) handleEdit();
            setIsEditing((prev) => !prev);
          }}
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default Card;
