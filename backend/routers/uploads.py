from fastapi import APIRouter
from pydantic import BaseModel
from services import storage_stub

router = APIRouter()

class UploadName(BaseModel):
    name: str

@router.post("/requested")
async def requested():
    return {"uploads": storage_stub.list_requested()}

@router.post("/mark-received")
async def mark_received(name: UploadName):
    item = storage_stub.toggle_received(name.name)
    return {"upload": item}
