
from datetime import datetime, timedelta
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
    id = sa.Column(sa.String, primary_key=True)
    planParts = sa.Column(sa.Integer)
    prodParts = sa.Column(sa.Integer, nullable=False)
    startTime = sa.Column(sa.DateTime)
    finishedTime = sa.Column(sa.DateTime)
    deadline = sa.Column(sa.DateTime)
    orderStatus = sa.Column(sa.String, nullable=False)
    workingStation = sa.Column(sa.String, nullable=False)
    product_id = sa.Column(sa.String,nullable=False)
    

    def __init__(self):
        super().__init__()
        #if tables don't exists in the db --> create them
        Base.metadata.create_all()


    #adding sample data to db (only for tesing purposes)
    def add(self):
        order = Order()
        order.id = 'Order 2'
        order.product_id = 'Blasius 10'
        order.planParts = 10000
        order.prodParts = 1643
        order.startTime = datetime.now();
        order.deadline = datetime.now() + timedelta(days=2)
        order.orderStatus = 'Finished'
        order.workingStation = 'Robot01'
        self.session.add(order)
        self.session.commit()
    
    def get_all(self):
        query = f'select * from {self.__tablename__}'
        res = self.session.execute(query).fetchall()
        return self.toDict(res)
        
        