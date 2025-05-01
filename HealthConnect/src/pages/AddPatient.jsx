import React, { useState } from "react";
import { addPatient } from "../firestoreService";

const AddPatient = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [sugarLevel, setSugarLevel] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPatient({ name, age, gender, bloodPressure, sugarLevel });
      alert("Patient added successfully!");
    } catch (error) {
      console.error("Error adding patient:", error);
    }
  };

  return (
    <div>
      <h2>Add Patient</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input type="text" placeholder="Blood Pressure" value={bloodPressure} onChange={(e) => setBloodPressure(e.target.value)} required />
        <input type="text" placeholder="Sugar Level" value={sugarLevel} onChange={(e) => setSugarLevel(e.target.value)} required />
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
};

export default AddPatient;
