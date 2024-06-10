from fastapi import FastAPI, HTTPException, Depends
from sqlalchemy.orm import Session
from models import Centra as DBCentra, Delivery as DBDelivery, Batch as DBBatch, SessionLocal
from schemas import CentraCreate, Centra, DeliveryCreate, Delivery, BatchCreate, Batch, DeliveryUpdate
from typing import List, Optional
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust this to the specific origins you want to allow
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/centra/", response_model=Centra)
def create_centra(centra: CentraCreate, db: Session = Depends(get_db)):
    db_centra = DBCentra(**centra.dict())
    db.add(db_centra)
    db.commit()
    db.refresh(db_centra)
    return db_centra

@app.get("/centra/", response_model=List[Centra])
def read_centras(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(DBCentra).offset(skip).limit(limit).all()

@app.get("/centra/{centra_id}", response_model=Centra)
def read_centra(centra_id: int, db: Session = Depends(get_db)):
    db_centra = db.query(DBCentra).filter(DBCentra.Centra_ID == centra_id).first()
    if db_centra is None:
        raise HTTPException(status_code=404, detail="Centra not found")
    return db_centra

@app.put("/centra/{centra_id}", response_model=Centra)
def update_centra(centra_id: int, centra: CentraCreate, db: Session = Depends(get_db)):
    db_centra = db.query(DBCentra).filter(DBCentra.Centra_ID == centra_id).first()
    if db_centra is None:
        raise HTTPException(status_code=404, detail="Centra not found")
    for key, value in centra.dict().items():
        setattr(db_centra, key, value)
    db.commit()
    db.refresh(db_centra)
    return db_centra

@app.delete("/centra/{centra_id}", response_model=Centra)
def delete_centra(centra_id: int, db: Session = Depends(get_db)):
    db_centra = db.query(DBCentra).filter(DBCentra.Centra_ID == centra_id).first()
    if db_centra is None:
        raise HTTPException(status_code=404, detail="Centra not found")
    db.delete(db_centra)
    db.commit()
    return db_centra

@app.post("/delivery/", response_model=Delivery)
def create_delivery(delivery: DeliveryCreate, db: Session = Depends(get_db)):
    db_delivery = DBDelivery(**delivery.dict())
    db.add(db_delivery)
    db.commit()
    db.refresh(db_delivery)
    return db_delivery

@app.get("/delivery/", response_model=List[Delivery])
def read_deliveries(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(DBDelivery).offset(skip).limit(limit).all()

@app.get("/delivery/{package_id}", response_model=Delivery)
def read_delivery(package_id: int, db: Session = Depends(get_db)):
    db_delivery = db.query(DBDelivery).filter(DBDelivery.Package_ID == package_id).first()
    if db_delivery is None:
        raise HTTPException(status_code=404, detail="Delivery not found")
    return db_delivery

@app.put("/delivery/{package_id}", response_model=Delivery)
def update_delivery(package_id: int, delivery: DeliveryUpdate, db: Session = Depends(get_db)):
    db_delivery = db.query(DBDelivery).filter(DBDelivery.Package_ID == package_id).first()
    if db_delivery is None:
        raise HTTPException(status_code=404, detail="Delivery not found")
    for key, value in delivery.dict(exclude_unset=True).items():
        setattr(db_delivery, key, value)
    db.commit()
    db.refresh(db_delivery)
    return db_delivery

@app.delete("/delivery/{package_id}", response_model=Delivery)
def delete_delivery(package_id: int, db: Session = Depends(get_db)):
    db_delivery = db.query(DBDelivery).filter(DBDelivery.Package_ID == package_id).first()
    if db_delivery is None:
        raise HTTPException(status_code=404, detail="Delivery not found")
    db.delete(db_delivery)
    db.commit()
    return db_delivery

@app.post("/batch/", response_model=Batch)
def create_batch(batch: BatchCreate, db: Session = Depends(get_db)):
    db_batch = DBBatch(**batch.dict())
    db.add(db_batch)
    db.commit()
    db.refresh(db_batch)
    return db_batch

@app.get("/batch/", response_model=List[Batch])
def read_batches(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    return db.query(DBBatch).offset(skip).limit(limit).all()

@app.get("/batch/{batch_id}", response_model=Batch)
def read_batch(batch_id: int, db: Session = Depends(get_db)):
    db_batch = db.query(DBBatch).filter(DBBatch.Batch_ID == batch_id).first()
    if db_batch is None:
        raise HTTPException(status_code=404, detail="Batch not found")
    return db_batch

@app.get("/batch/package/{package_id}", response_model=Batch)
def read_batch_by_package(package_id: int, db: Session = Depends(get_db)):
    db_batch = db.query(DBBatch).filter(DBBatch.Package_ID == package_id).first()
    if db_batch is None:
        raise HTTPException(status_code=404, detail="Batch not found")
    return db_batch

@app.get("/centra/batch/{batch_id}", response_model=Centra)
def read_centra_by_batch(batch_id: int, db: Session = Depends(get_db)):
    db_batch = db.query(DBBatch).filter(DBBatch.Batch_ID == batch_id).first()
    if db_batch is None:
        raise HTTPException(status_code=404, detail="Batch not found")
    db_centra = db.query(DBCentra).filter(DBCentra.Centra_ID == db_batch.Centra_ID).first()
    if db_centra is None:
        raise HTTPException(status_code=404, detail="Centra not found")
    return db_centra

@app.put("/batch/{batch_id}", response_model=Batch)
def update_batch(batch_id: int, batch: BatchCreate, db: Session = Depends(get_db)):
    db_batch = db.query(DBBatch).filter(DBBatch.Batch_ID == batch_id).first()
    if db_batch is None:
        raise HTTPException(status_code=404, detail="Batch not found")
    for key, value in batch.dict().items():
        setattr(db_batch, key, value)
    db.commit()
    db.refresh(db_batch)
    return db_batch

@app.delete("/batch/{batch_id}", response_model=Batch)
def delete_batch(batch_id: int, db: Session = Depends(get_db)):
    db_batch = db.query(DBBatch).filter(DBBatch.Batch_ID == batch_id).first()
    if db_batch is None:
        raise HTTPException(status_code=404, detail="Batch not found")
    db.delete(db_batch)
    db.commit()
    return db_batch

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
