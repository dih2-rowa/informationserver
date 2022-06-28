
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
    __tablename__ = 'etorder'
    id = sa.Column(sa.String, primary_key=True)
    planParts = sa.Column(sa.Integer)
    prodParts = sa.Column(sa.Integer, nullable=False)
    prodPartsIO = sa.Column(sa.Integer)
    startTime = sa.Column(sa.DateTime)
    finishedTime = sa.Column(sa.DateTime)
    deadline = sa.Column(sa.DateTime)
    orderstatus = sa.Column(sa.String, nullable=False)
    workingStation = sa.Column(sa.String, nullable=False)
    productid = sa.Column(sa.String,nullable=False)
    

    def __init__(self):
        super().__init__()
        #if tables don't exists in the db --> create them
        Base.metadata.create_all()


    #adding sample data to db (only for tesing purposes)
    def add(self):
        order = Order()
        order.id = 'ON001356'
        order.productid = 'MY83-014K97'
        order.planParts = 8000
        order.prodParts = 8000
        order.startTime = datetime(2022,6,18,12,17,55);
        order.finishedTime = datetime(2022,6,19,11,25,20)
        order.deadline = datetime(2022,8,19,12,17,55)
        order.orderstatus = 'Finished'
        order.workingStation = 'Robot1'
        self.session.add(order)
        self.session.commit()
    
    def get_all(self):
        query = f'select * from mtrobot_info.{self.__tablename__}'
        res = self.session.execute(query).fetchall()
        return self.toDict(res)
        
        