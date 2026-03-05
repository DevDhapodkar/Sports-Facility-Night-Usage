# Sports Facility Night Usage

Predictive system for sports facility electricity usage using LSTM.

## Setup Instructions

### Prerequisites
- Python 3.8+
- Node.js (Optional, but recommended for development)

### Backend Setup
1. Create a virtual environment: `python3 -m venv venv`
2. Install dependencies: `pip install -r backend/requirements.txt`
3. Generate synthetic data: `python3 backend/data_gen.py`
4. Train the model: `python3 backend/model.py`
5. Start the API: `uvicorn backend.main:app --reload`

### Frontend Setup
Open `frontend/index.html` directly in your browser or serve it using any static server.

## Features
- Hourly electricity usage prediction (post-event).
- Interactive dashboard with filters for day types (Weekday, Weekend, Event Day).

## Architecture
The project follows a decoupled architecture:
- **Data Layer**: Synthetic data generation with realistic hourly patterns (`backend/data_gen.py`).
- **Model Layer**: Simple LSTM RNN implemented in TensorFlow for time-series forecasting (`backend/model.py`).
- **Backend Layer**: FastAPI server serving model predictions and historical data (`backend/main.py`).
- **Frontend Layer**: Premium Vanilla JS dashboard with Chart.js and Glassmorphism CSS.
