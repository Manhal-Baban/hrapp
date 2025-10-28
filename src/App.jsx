import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Card
          name="Maria"
          title="Manager"
          salary="1000"
          phone="044012345"
          email="maria@gmail.com"
          animal="Lion"
        />
        <Card
          name="Alex"
          title="Security Officer"
          salary="1800"
          phone="045678901"
          email="alex.smith@example.com"
          animal="Wolf"
        />

        <Card
          name="Sofia"
          title="Barista"
          salary="1500"
          phone="040123456"
          email="sofia.laine@gmail.com"
          animal="Cat"
        />

        <Card
          name="Mikko"
          title="Web Developer"
          salary="3200"
          phone="046987654"
          email="mikko.korpela@outlook.com"
          animal="Eagle"
        />

        <Card
          name="Layla"
          title="Designer"
          salary="2700"
          phone="041556677"
          email="layla.art@icloud.com"
          animal="Fox"
        />

        <Card
          name="Omar"
          title="Chef"
          salary="2500"
          phone="044998877"
          email="omar.khan@yahoo.com"
          animal="Bear"
        />

        <Card
          name="Hanna"
          title="Photographer"
          salary="2100"
          phone="040778899"
          email="hanna.photo@gmail.com"
          animal="Dolphin"
        />

        <Card
          name="Jonas"
          title="Electrician"
          salary="2900"
          phone="045667788"
          email="jonas.power@outlook.com"
          animal="Tiger"
        />

        <Card
          name="Aisha"
          title="Marketing Specialist"
          salary="3100"
          phone="046554433"
          email="aisha.creative@gmail.com"
          animal="Panther"
        />

        <Card
          name="Lucas"
          title="Teacher"
          salary="2800"
          phone="044112233"
          email="lucas.teach@yahoo.com"
          animal="Owl"
        />

        <Card
          name="Elina"
          title="Doctor"
          salary="5000"
          phone="050223344"
          email="elina.health@gmail.com"
          animal="Horse"
        />

        <Card
          name="Noah"
          title="Police Officer"
          salary="3500"
          phone="041667788"
          email="noah.safe@gmail.com"
          animal="Dog"
        />

        <Card
          name="Maya"
          title="Software Engineer"
          salary="4200"
          phone="045998877"
          email="maya.codes@gmail.com"
          animal="Falcon"
        />

        <Card
          name="Rami"
          title="Architect"
          salary="4600"
          phone="046111222"
          email="rami.design@icloud.com"
          animal="Leopard"
        />

        <Card
          name="Eveliina"
          title="Nurse"
          salary="3200"
          phone="040334455"
          email="eve.care@outlook.com"
          animal="Swan"
        />

        <Card
          name="Tariq"
          title="Chef"
          salary="2600"
          phone="045334455"
          email="tariq.kitchen@gmail.com"
          animal="Bear"
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
