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

## Model Details: RNN-LSTM
The core of the prediction system is a **Long Short-Term Memory (LSTM)** network, which is well-suited for time-series data due to its ability to maintain long-term dependencies.

### Architecture:
- **Input Layer**: Accepts a 24-hour window of electricity usage.
- **LSTM Layers**: Two stacked LSTM layers with 50 units each and ReLU activation.
- **Dropout Layers**: 20% dropout to prevent overfitting.
- **Dense Layer**: Single output neuron predicting the usage for the next hour.
- **Optimizer**: Adam
- **Loss Function**: Mean Squared Error (MSE)

### Data Preprocessing:
- MinMax Scaling (0, 1) to normalize the features.
- Slidng window approach for sequence generation.

## Troubleshooting
- **ModuleNotFoundError**: Ensure your `PYTHONPATH` includes the current directory and any external library folders.
- **Port 8000 in use**: If the FastAPI server fails to start, check if another process is using port 8000.
- **Model not found**: Ensure `backend/model.py` has been run at least once to generate `backend/model.h5`.

## Testing
Unit tests are provided for the data layer:
`python3 backend/test_data.py`
