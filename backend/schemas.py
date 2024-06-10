from pydantic import BaseModel
from datetime import datetime
from typing import List, Optional

class CentraBase(BaseModel):
    CentraName: str
    CentraAddress: str
    NumberOfEmployees: int

class CentraCreate(CentraBase):
    pass

class Centra(CentraBase):
    Centra_ID: int
    class Config:
        orm_mode = True

class DeliveryBase(BaseModel):
    Status: str
    InDeliveryTime: datetime
    OutDeliveryTime: Optional[datetime] = None
    ExpeditionType: str
    Batch_ID: Optional[int] = None  # Add Batch_ID to DeliveryBase

class DeliveryCreate(DeliveryBase):
    pass

class DeliveryUpdate(BaseModel):
    Status: Optional[str] = None
    InDeliveryTime: Optional[datetime] = None
    OutDeliveryTime: Optional[datetime] = None
    ExpeditionType: Optional[str] = None
    Batch_ID: Optional[int] = None  # Add Batch_ID to DeliveryUpdate

class Delivery(DeliveryBase):
    Package_ID: int
    class Config:
        orm_mode = True

class BatchBase(BaseModel):
    RawWeight: int
    InTimeRaw: datetime
    InTimeWet: Optional[datetime] = None
    OutTimeWet: Optional[datetime] = None
    WetWeight: Optional[int] = None
    InTimeDry: Optional[datetime] = None
    OutTimeDry: Optional[datetime] = None
    Centra_ID: int
    DryWeight: Optional[int] = None
    InTimePowder: Optional[datetime] = None
    OutTimePowder: Optional[datetime] = None
    PowderWeight: Optional[int] = None
    Status: str
    Package_ID: Optional[int] = None
    WeightRescale: Optional[int] = None

class BatchCreate(BatchBase):
    pass

class Batch(BatchBase):
    Batch_ID: int
    class Config:
        orm_mode = True
