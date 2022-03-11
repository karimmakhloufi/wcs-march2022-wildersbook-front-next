import { useState } from "react";
import axios from "axios";

const AddWilderForm = ({ trigger, setTrigger }) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        try {
          setError("");
          const result = await axios.post("http://localhost:5000/api/wilders", {
            name: name,
            city: city,
          });
          if (result.data.success === false) {
            setError("An error occurred");
          }
          console.log("result", result);
          setTrigger(trigger + 1);
        } catch (err) {
          console.log("error", err);
          setError("An error occurred");
        }
      }}
    >
      {error && <p>{error}</p>}
      <label htmlFor="name-input">Name :</label>
      <input
        id="name-input"
        type="text"
        placeholder="Type the name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="city-input">City :</label>
      <input
        id="city-input"
        type="text"
        placeholder="Type the city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default AddWilderForm;
