# 🇱🇰 ML-Based Poverty Prediction System

> *Classifying household poverty status in Sri Lanka using socioeconomic indicators*

![Python](https://img.shields.io/badge/Python-3.10+-3776AB?style=flat-square&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-REST%20API-000000?style=flat-square&logo=flask&logoColor=white)
![React](https://img.shields.io/badge/React-Dashboard-61DAFB?style=flat-square&logo=react&logoColor=black)
![Scikit-learn](https://img.shields.io/badge/Scikit--learn-Pipeline-F7931E?style=flat-square&logo=scikit-learn&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## 📌 Overview

Identifying economically vulnerable households is critical for targeted government welfare distribution across Sri Lanka. This end-to-end machine learning system classifies households as **Poor** or **Non-Poor** using structured socioeconomic features — covering every stage from data ingestion and model training to a production-ready REST API and an interactive web dashboard.

### What's inside

| Component | Description |
|---|---|
| 🧠 **Training Pipeline** | Scikit-learn Pipeline with ColumnTransformer for consistent preprocessing |
| 📊 **Model Evaluation** | Classification metrics, feature importance, and SHAP-based explainability |
| 🌐 **Flask REST API** | Lightweight inference endpoint for real-time household classification |
| 🖥️ **React Dashboard** | Interactive frontend for data entry, predictions, and result interpretation |

---

## 🎯 Problem Statement

Targeted welfare programs depend on accurately identifying households most in need. Manual assessment at scale is both expensive and inconsistent. This project builds a machine learning classifier that predicts poverty status from structured household data — enabling data-driven, transparent, and auditable decision-making for social welfare distribution.

---

## 📂 Dataset

The dataset contains household-level socioeconomic attributes sourced from district-level surveys across Sri Lanka.

### Features

| Feature | Type | Description |
|---|---|---|
| `District` | Categorical | Administrative district of the household |
| `Education_Level` | Categorical | Highest education level attained |
| `Employment_Status` | Categorical | Current employment situation |
| `Housing_Type` | Categorical | Type and quality of housing structure |
| `Electricity_Access` | Categorical | Access to electricity supply |
| `Water_Access` | Categorical | Access to safe drinking water |
| `Asset_Ownership` | Categorical | Ownership of key household assets |
| `Monthly_Income` | Numerical | Estimated monthly household income |
| `Expenditure_Patterns` | Numerical | Monthly expenditure profile |

### Target variable

```
Poverty_Status  →  1 = Poor  |  0 = Non-Poor
```

---

## 🏗️ Model Architecture

The model is built as a **Scikit-learn Pipeline**, guaranteeing that the same preprocessing steps are applied consistently during both training and inference — eliminating the risk of data leakage.

```
Raw Input Features
       │
       ▼
┌─────────────────────────┐
│     ColumnTransformer   │  ← Handles mixed feature types
│   ┌─────────────────┐   │
│   │  OneHotEncoder  │   │  ← Encodes categorical features
│   └─────────────────┘   │
└─────────────────────────┘
       │
       ▼
┌─────────────────────────┐
│  RandomForestClassifier │
│   n_estimators = 200    │
│   max_depth    = 10     │
└─────────────────────────┘
       │
       ▼
  Poverty_Status (0 or 1)
```

### Why Random Forest?

- **Robustness** — handles missing values and outliers gracefully
- **Interpretability** — native feature importance rankings
- **No feature scaling required** — works well with mixed data types
- **Resistant to overfitting** — ensemble of 200 decision trees with bounded depth

---

## 🔄 System Pipeline

```
Raw Data → Preprocessing → Model Training → Evaluation → Flask API → React Dashboard
```

1. **Data Ingestion** — Load and validate household survey data
2. **Feature Engineering** — Encode categorical variables via OneHotEncoder
3. **Model Training** — Fit RandomForestClassifier within a Pipeline
4. **Evaluation** — Accuracy, Precision, Recall, F1, ROC-AUC, and SHAP analysis
5. **Serialization** — Export trained pipeline using `joblib`
6. **API Deployment** — Serve predictions via Flask REST endpoint
7. **Dashboard** — Visualize predictions and feature contributions in React

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| Language | Python 3.10+ |
| ML Framework | Scikit-learn |
| Data Processing | NumPy, Pandas |
| Visualization | Matplotlib, Seaborn |
| Explainability | SHAP |
| API | Flask |
| Frontend | React |
| Serialization | Joblib |

---

## 🚀 Quick Start

### Prerequisites

- Python 3.10+
- Node.js 18+
- pip

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/poverty-prediction-lk.git
cd poverty-prediction-lk
```

### 2. Install Python dependencies

```bash
pip install -r requirements.txt
```

### 3. Train the model

```bash
python train.py
```

### 4. Start the Flask API

```bash
python app.py
```

The API will be available at `http://localhost:5000`.

### 5. Launch the React dashboard

```bash
cd frontend
npm install
npm start
```

The dashboard will be available at `http://localhost:3000`.

---

## 📡 API Reference

### `POST /predict`

Classifies a household as Poor or Non-Poor.

**Request body**

```json
{
  "District": "Colombo",
  "Education_Level": "Secondary",
  "Employment_Status": "Employed",
  "Housing_Type": "Permanent",
  "Electricity_Access": "Yes",
  "Water_Access": "Yes",
  "Asset_Ownership": "Moderate",
  "Monthly_Income": 45000,
  "Expenditure_Patterns": 38000
}
```

**Response**

```json
{
  "prediction": 0,
  "label": "Non-Poor",
  "confidence": 0.87
}
```

---

## 📁 Project Structure

```
poverty-prediction-lk/
├── data/
│   └── household_survey.csv
├── notebooks/
│   └── exploratory_analysis.ipynb
├── model/
│   ├── train.py
│   ├── evaluate.py
│   └── pipeline.joblib
├── api/
│   └── app.py
├── frontend/
│   ├── src/
│   └── package.json
├── requirements.txt
└── README.md
```

---

## 🤝 Contributing

Contributions are welcome. Please open an issue first to discuss proposed changes, then submit a pull request.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
  <sub>Built with purpose — helping identify economically vulnerable households across Sri Lanka 🇱🇰</sub>
</div>
