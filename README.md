# 🇱🇰 ML-Based Poverty Prediction System

## Overview

This project predicts household poverty status in Sri Lanka using
socioeconomic indicators such as income, education level,
employment status, housing conditions, and asset ownership.

The system includes:
- Machine Learning training pipeline
- Model evaluation & explainability
- Flask REST API for inference
- React-based frontend dashboard

## Problem Statement

Identifying economically vulnerable households is critical for
targeted government welfare distribution.

This project builds a machine learning system to classify
households as "Poor" or "Non-Poor" based on structured
socioeconomic features.

## Dataset

The dataset contains household-level socioeconomic attributes including:

- District
- Education Level
- Employment Status
- Housing Type
- Electricity Access
- Water Access
- Asset Ownership
- Monthly Income
- Expenditure Patterns

Target Variable:
Poverty_Status (1 = Poor, 0 = Non-Poor)

## Model Architecture

The model is built using Scikit-learn Pipeline:

- ColumnTransformer
    - OneHotEncoder for categorical features
- RandomForestClassifier
    - 200 estimators
    - max_depth = 10

This ensures consistent preprocessing during both training
and inference.