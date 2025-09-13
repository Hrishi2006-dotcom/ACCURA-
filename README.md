# Accura v0.1

Scaffold for **Accura**, an AI-assisted accounting portal. Includes a React + Vite frontend and a FastAPI backend with Docker setup.

## Development

### Backend
```
cd backend
pip install -r requirements.txt
uvicorn main:app --reload --port 8001
```

### Frontend
```
cd frontend
npm install
npm run dev
```
The frontend expects the backend at `http://localhost:8001`.

## Docker
```
docker compose up
```
This runs the backend on `:8001` and the frontend on `:3000`.

## Notes
- Auth tokens are stored only in memory.
- Uploads and other data reset when the server restarts.
