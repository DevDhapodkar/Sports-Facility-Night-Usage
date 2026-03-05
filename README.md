# Sports Facility Night Usage

Predictive system for sports facility electricity usage using LSTM.

## Tech Stack
- **Backend**: Python (FastAPI, TensorFlow/Keras)
- **Frontend**: React (Vite, Chart.js)
- **Model**: Simple LSTM RNN

## Features
- Hourly electricity usage prediction (post-event).
- Interactive dashboard with filters for day types (Weekday, Weekend, Event Day).

## Architecture
The project follows a decoupled architecture:
- **Data Layer**: Synthetic data generation with realistic hourly patterns (`backend/data_gen.py`).
- **Model Layer**: Simple LSTM RNN implemented in TensorFlow for time-series forecasting (`backend/model.py`).
- **Backend Layer**: FastAPI server serving model predictions and historical data (`backend/main.py`).
- **Frontend Layer**: Premium Vanilla JS dashboard with Chart.js and Glassmorphism CSS.
