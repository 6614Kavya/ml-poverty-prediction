import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    Household_Size: "",
    Head_Age: "",
    Monthly_Income_LKR: "",
    Food_Expenditure_LKR: "",
    NonFood_Expenditure_LKR: ""
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value)
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        formData
      );
      setResult(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
  <div className="dashboard-container">
    <div className="dashboard-card">
      <div className="header">
        <h1>Socio-Economic Analytics Dashboard</h1>
        <p>Poverty Risk Classification System</p>
      </div>

      <div className="form-section">
        <input
          type="number"
          name="Household_Size"
          placeholder="Household Size"
          onChange={handleChange}
        />

        <input
          type="number"
          name="Head_Age"
          placeholder="Head Age"
          onChange={handleChange}
        />

        <input
          type="number"
          name="Monthly_Income_LKR"
          placeholder="Monthly Income (LKR)"
          onChange={handleChange}
        />

        <input
          type="number"
          name="Food_Expenditure_LKR"
          placeholder="Food Expenditure"
          onChange={handleChange}
        />

        <input
          type="number"
          name="NonFood_Expenditure_LKR"
          placeholder="Non-Food Expenditure"
          onChange={handleChange}
        />

        <button className="predict-btn" onClick={handleSubmit}>
          Run Analysis
        </button>
      </div>

      {result && (
        <div className="result-section">
          <h3>
            Classification:{" "}
            <span
              className={
                result.prediction === 1 ? "status-poor" : "status-safe"
              }
            >
              {result.prediction === 1 ? "High Poverty Risk" : "Low Poverty Risk"}
            </span>
          </h3>

          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: `${result.probability * 100}%` }}
            ></div>
          </div>

          <p className="prob-text">
            Probability: {(result.probability * 100).toFixed(2)}%
          </p>
        </div>
      )}
    </div>
  </div>
);
}

export default App;