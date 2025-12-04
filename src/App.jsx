import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import PersonList from "./components/PersonList";
import About from "./components/About";
import AddEmployee from "./components/AddEmployee";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import useAxios from "./hooks/useAxios";

function App() {
  const { get, post, del, BASE_URL } = useAxios();
  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
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
  }, []);

  const handleClick = () => {
    post(BASE_URL, {
      ...formData,
      skills: formData.skills
        ? formData.skills.split(", ").map((skill) => skill.trim())
        : [],
      isFavourite: false,
    }).then((response) => {
      setEmployees([...employees, response.data]);
    });
  };

  const handleDeleteEmployee = (id) => {
    del(`${BASE_URL}/${id}`).then((response) => {
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== id)
      );
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route
              path="/add-employee"
              element={
                <AddEmployee
                  formData={formData}
                  setFormData={setFormData}
                  handleClick={handleClick}
                />
              }
            />
            <Route
              path="/"
              element={
                <PersonList
                  employees={employees}
                  onDelete={handleDeleteEmployee}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
