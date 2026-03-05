from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import pandas as pd
import json
import os
import sys

# Add libs to path
sys.path.append("/tmp/sports_libs")

# Import our model class
from model import ElectricityPredictor

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

predictor = ElectricityPredictor()
DATA_PATH = 'backend/sports_facility_usage.csv'
MODEL_PATH = 'backend/model.h5'

@app.get("/")
def read_root():
    return {"message": "Sports Facility API is running"}

@app.get("/data")
def get_data(day_type: str = "All"):
    df = pd.read_csv(DATA_PATH)
    if day_type != "All":
        df = df[df['day_type'] == day_type]
    
    # Take a sample of 24 hours for the dashboard
    sample = df.head(24)
    return {
        "labels": sample['hour'].tolist(),
        "actual": sample['electricity_usage'].tolist(),
        "day_type": day_type
    }

@app.get("/predict")
def predict_usage():
    # In a real app, we'd load the model and predict
    # For now, return some dummy predictions if model isn't trained
    if not os.path.exists(MODEL_PATH):
        return {"prediction": [v * 1.05 for v in [10, 8, 6, 5, 5, 7, 12, 18, 22, 25, 28, 30, 32, 35, 38, 42, 45, 50, 60, 55, 45, 30, 20, 15]]}
    
    # Placeholder for actual model inference
    return {"message": "Model inference coming soon"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
