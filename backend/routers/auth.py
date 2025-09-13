from fastapi import APIRouter

router = APIRouter()

@router.post("/signup")
async def signup():
    return {"token": "stub"}

@router.post("/login")
async def login():
    return {"token": "stub"}
