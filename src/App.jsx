import { useState } from "react";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import ScheduleDetails from "../components/ScheduleDetails";

export default function App() {
  const [stages, setStages] = useState([]);

  async function getData() {
    const res = await fetch("http://localhost:8080/schedule");
    const data = await res.json();
    setStages(data);
  }
  getData();

  return (
    <div className="App">
      <Menu />
      <ScheduleDetails stages={stages} />
      <Footer />
    </div>
  );
}
