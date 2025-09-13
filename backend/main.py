from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import auth, kpis, uploads

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/health")
async def health():
    return {"status": "ok"}

app.include_router(auth.router, prefix="/api/auth")
app.include_router(kpis.router, prefix="/api/kpis")
app.include_router(uploads.router, prefix="/api/uploads")

@app.get("/api/widgets/list")
async def widgets_list():
    return {
        "widgets": [
            "Real-Time Profitability",
            "Ad Spend \u2192 Profit Bridge",
            "Cashflow Stress Test",
            "Marketplace Fee Audit & Recovery",
            "Weekly CEO Report",
        ]
    }
