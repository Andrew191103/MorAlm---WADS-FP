from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship

DATABASE_URL = "mysql+pymysql://root:191103@localhost/real_moringa"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class Centra(Base):
    __tablename__ = "centra"
    Centra_ID = Column(Integer, primary_key=True, index=True)
    CentraName = Column(String(255), nullable=False)
    CentraAddress = Column(String(255), nullable=False)
    NumberOfEmployees = Column(Integer, nullable=False)
    batches = relationship("Batch", back_populates="centra")

class Delivery(Base):
    __tablename__ = "delivery"
    Package_ID = Column(Integer, primary_key=True, index=True)
    Status = Column(String(255), nullable=False)
    InDeliveryTime = Column(DateTime, nullable=False)
    OutDeliveryTime = Column(DateTime, nullable=True)
    ExpeditionType = Column(String(255), nullable=False)
    batches = relationship("Batch", back_populates="delivery")

class Batch(Base):
    __tablename__ = "batch_id"
    Batch_ID = Column(Integer, primary_key=True, index=True)
    RawWeight = Column(Integer, nullable=False)
    InTimeRaw = Column(DateTime, nullable=False)
    InTimeWet = Column(DateTime, nullable=True)
    OutTimeWet = Column(DateTime, nullable=True)
    WetWeight = Column(Integer, nullable=True)
    InTimeDry = Column(DateTime, nullable=True)
    OutTimeDry = Column(DateTime, nullable=True)
    Centra_ID = Column(Integer, ForeignKey("centra.Centra_ID"), nullable=False)
    DryWeight = Column(Integer, nullable=True)
    InTimePowder = Column(DateTime, nullable=True)
    OutTimePowder = Column(DateTime, nullable=True)
    PowderWeight = Column(Integer, nullable=True)
    Status = Column(String(255), nullable=False)
    Package_ID = Column(Integer, ForeignKey("delivery.Package_ID"), nullable=True)
    WeightRescale = Column(Integer, nullable=True)

    centra = relationship("Centra", back_populates="batches")
    delivery = relationship("Delivery", back_populates="batches")


Base.metadata.create_all(bind=engine)
