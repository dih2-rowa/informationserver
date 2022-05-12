
from flask import jsonify


from .base import BaseModel
import sqlalchemy as sa 
from sqlalchemy.ext import declarative
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
from crate.client.sqlalchemy import types


Base = declarative.declarative_base(bind=BaseModel().engine)

class Order(BaseModel,Base ):
    #Defenition of the table which is created in the CrateDB
    __tablename__ = 'orders'
    id = sa.Column(sa.String, primary_key=True, default=BaseModel.gen_key)
    description = sa.Column(sa.String)
    finished = sa.Column(sa.Boolean)
    product_id = sa.Column(sa.String)
    

    def __init__(self):
        super().__init__()
        #if tables don't exists in the db --> create them
        Base.metadata.create_all()


    #adding sample data to db (only for tesing purposes)
    def add(self):
        order = Order()
        order.description = "Auftrag 2"
        order.finished = True
        order.product_id = 'c1746d62-6475-4952-b656-51a3deaf5279'
        self.session.add(order)
        print('Going here')
        self.session.commit()
    
    def get_all(self):
        query = f'select * from {self.__tablename__}'
        res = self.session.execute(query).fetchall()
        return self.toDict(res)
        
        