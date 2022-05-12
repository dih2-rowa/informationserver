from .base import BaseModel
import sqlalchemy as sa 
from sqlalchemy.ext import declarative
from datetime import datetime
from Models.orders import Order


Base = declarative.declarative_base(bind=BaseModel().engine)

class Product(BaseModel,Base ):
    __tablename__ = 'products'
    id = sa.Column(sa.String, primary_key=True, default=BaseModel.gen_key)
    current_Orders = sa.Column(sa.String)
    finished_Orders = sa.Column(sa.String)
    program_version = sa.Column(sa.String)
    finished = sa.Column(sa.Boolean)
    program_name = sa.Column(sa.String)
    process_length = sa.Column(sa.String)
    shall_cycle_time = sa.Column(sa.TIMESTAMP)

    def __init__(self):
        super().__init__()
        Base.metadata.create_all()


    def add_product(self):
        product = Product()
        product.current_Orders = 'This is the current order'
        product.finished_Orders = 'This is a finished order'
        product.program_name = 'This is the product name'
        product.program_version = '1.3.2'
        product.process_length = '10mm'
        product.shall_cycle_time = datetime.now()
        product.orders = Order()
        self.session.add(product)
        self.session.commit()


    
    def get_all(self):
        query = f'select * from {self.__tablename__}'
        res = self.session.execute(query).fetchall()
        return self.toDict(res)
        
        