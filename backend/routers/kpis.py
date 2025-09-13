from fastapi import APIRouter

router = APIRouter()

@router.get("/summary")
async def summary():
    return {
        "revenue": 100000,
        "profit": 25000,
        "expenses": 75000,
        "vatOwed": 5000,
    }
