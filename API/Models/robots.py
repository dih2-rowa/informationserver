from .base import BaseModel
import sqlalchemy as sa 
from sqlalchemy.ext import declarative



Base = declarative.declarative_base(bind=BaseModel().engine)

class Robot(BaseModel,Base ):
    __tablename__ = 'robots'
    id = sa.Column(sa.String, primary_key=True)
    robotRunning = sa.Column(sa.Boolean, nullable=False)
    robotSpeed = sa.Column(sa.Integer)
    currCycleTime = sa.Column(sa.Integer)
    drawer1Status = sa.Column(sa.String)
    drawer2Status = sa.Column(sa.String)
    restServiceLife = sa.Column(sa.Integer, nullable=False)

    def __init__(self):
        super().__init__()
        Base.metadata.create_all()



    def add(self):
        robot = Robot()
        robot.id = 'Robot02'
        robot.robotRunning = True
        robot.robotSpeed = 90
        robot.currCycleTime = 34
        robot.drawer1Status = 'Raw part'
        robot.drawer2Status = 'Processed part'
        robot.restServiceLife = 30000
        self.session.add(robot)
        self.session.commit()
    
    def get_all(self):
        query = f'select * from {self.__tablename__}'
        res = self.session.execute(query).fetchall()
        return self.toDict(res)
        
        