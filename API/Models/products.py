from doctest import FAIL_FAST
from .base import BaseModel
import sqlalchemy as sa 
from sqlalchemy.ext import declarative
from datetime import datetime
from Models.orders import Order

Base = declarative.declarative_base(bind=BaseModel().engine)

class Product(BaseModel,Base ):
    __tablename__ = 'products'
    id = sa.Column(sa.String, primary_key=True)
    programName = sa.Column(sa.String, nullable=False)
    programVersion = sa.Column(sa.Integer, nullable=False)
    versionOnRobot = sa.Column(sa.Boolean, nullable=False)
    processingLength = sa.Column(sa.Integer, nullable=False)
    planCycleTime = sa.Column(sa.Integer, nullable=False)

    def __init__(self):
        super().__init__()
        Base.metadata.create_all()


    def add_product(self):
        product = Product()
        product.id = 'Blasius 6'
        product.programName = 'blasius6.src'
        product.programVersion = 1
        product.versionOnRobot = True
        product.processingLength = 400
        product.planCycleTime = 25
        self.session.add(product)
        self.session.commit()


    
    def get_all(self):
        query = f'select * from {self.__tablename__}'
        res = self.session.execute(query).fetchall()
        return self.toDict(res)
        
        