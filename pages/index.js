import { useState, useEffect } from "react";
import axios from "axios";
import Wilder from "../components/WilderComponent";

const Home = () => {
  const [wildersData, setWildersData] = useState([]);
  const fetchData = async () => {
    const result = await axios.get("http://localhost:5000/api/wilders");
    setWildersData(result.data.result);
  };
  useEffect(() => fetchData(), []);
  return (
    <div>
      <header>
        <div className="container">
          <h1>Wilders Book</h1>
        </div>
      </header>
      <main className="container">
        <h2>Wilders</h2>
        <section className="card-row">
          {wildersData.map((wilder) => {
            return <Wilder firstname={wilder.name} skills={wilder.skills} />;
          })}
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2022 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
