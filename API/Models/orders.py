
from flask import jsonify


from .base import BaseModel
import sqlalchemy as sa 
from sqlalchemy.ext import declarative
from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship
from crate.client.sqlalchemy import types


Base = declarative.declarative_base(bind=BaseModel().engine)

class Order(BaseModel,Base ):
    __tablename__ = 'orders'
    id = sa.Column(sa.String, primary_key=True, default=BaseModel.gen_key)
    description = sa.Column(sa.String)
    finished = sa.Column(sa.Boolean)
    product_id = sa.Column(sa.String)
    

    
    def as_dict(self):
        return {c.name: getattr(self, c.program_version) for c in self.__table__.columns}

    def __init__(self):
        
        super().__init__()
        Base.metadata.create_all()
        # print('I am creating the table now')
       
        # print('I  the table now')



    def add(self):
        order = Order()
        order.description = "Auftrag 2"
        order.finished = True
        order.product_id = 'c1746d62-6475-4952-b656-51a3deaf5279'

        # self.baseModel.session.add(robot)
        # self.baseModel.session.commit()
        self.session.add(order)
        print('Going here')
        self.session.commit()
    
    def get_all(self):
        query = f'select * from {self.__tablename__}'
        # query = f'select * from robots'
        # return self.session.execute(query).fetchall()
        res = self.session.execute(query).fetchall()
        return self.toDict(res)

        # return self.session.execute(query).all()
        
        