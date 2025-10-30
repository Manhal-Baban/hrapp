import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.name}>{props.name}</div>
      <div className={styles.title}>Title: {props.title}</div>
      <div className={styles.salary}>Salary: {props.salary}</div>
      <div className={styles.phone}>Phone: {props.phone}</div>
      <div className={styles.email}>Email: {props.email}</div>
      <div className={styles.animal}>Animal: {props.animal}</div>
      <div className={styles.startDate}>Start Date: {props.startDate}</div>
      <div className={styles.location}>Location: {props.location}</div>
      <div className={styles.department}>Department: {props.department}</div>
      <div className={styles.skills}>Skills: {props.skills.join(", ")}</div>
    </div>
  );
};

export default Card;
