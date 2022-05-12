from .base import BaseModel
import sqlalchemy as sa 
from sqlalchemy.ext import declarative



Base = declarative.declarative_base(bind=BaseModel().engine)

class Robot(BaseModel,Base ):
    __tablename__ = 'robots'
    id = sa.Column(sa.String, primary_key=True, default=BaseModel.gen_key)
    program_version = sa.Column(sa.String)

    def __init__(self):
        
        super().__init__()
        Base.metadata.create_all()



    def add(self):
        robot = Robot()
        robot.program_version = "1.1.5.8"
        self.session.add(robot)
        self.session.commit()
    
    def get_all(self):
        query = f'select * from {self.__tablename__}'
        res = self.session.execute(query).fetchall()
        return self.toDict(res)
        
        