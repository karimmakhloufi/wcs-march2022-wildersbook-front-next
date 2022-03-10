import { useState } from "react";

const AddWilderForm = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
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
