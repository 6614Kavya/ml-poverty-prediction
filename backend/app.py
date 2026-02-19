from flask import Flask, request, jsonify
import joblib
import pandas as pd
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Load trained model
model = joblib.load("../model-training/poverty_model.pkl")

@app.route("/")
def home():
    return "Poverty Prediction API is running"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.json
    # List of expected keys
    required_keys = [
        "District", "Education_Level", "Employment_Status",
        "Housing_Type", "Electricity_Access", "Water_Access",
        "Owns_Vehicle", "Owns_Computer", "Household_Size",
        "Head_Age", "Monthly_Income_LKR", "Food_Expenditure_LKR",
        "NonFood_Expenditure_LKR"
    ]
    
    # Fill missing keys with None
    input_dict = {key: data.get(key, None) for key in required_keys}

    df = pd.DataFrame([input_dict])
    print("Input DataFrame:\n", df)

    # Make prediction
    prediction = model.predict(df)[0]

    # Predict probability of class 1 (Poor)
    probability = model.predict_proba(df)[0][1]  # index 1 is "Poor"

    return jsonify({
        "prediction": int(prediction),
        "probability": float(probability)
    })

if __name__ == "__main__":
    app.run(debug=True)