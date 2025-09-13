uploads = [
    {"name": "Invoice Ledger", "received": False},
    {"name": "Bank Statements", "received": False},
    {"name": "Expense Receipts", "received": False},
]

def list_requested():
    return uploads

def toggle_received(name: str):
    for item in uploads:
        if item["name"] == name:
            item["received"] = not item["received"]
            return item
    return None
