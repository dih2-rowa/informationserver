

from .base import BaseModel
import sqlalchemy as sa 
from sqlalchemy.ext import declarative

Base = declarative.declarative_base(bind=BaseModel().engine)

class Product(BaseModel,Base ):
    __tablename__ = 'etproduct'
    __table_args__ = {'schema': 'mtrobot_info'}
    entity_id = sa.Column(sa.String, primary_key=True)
    programName = sa.Column(sa.String, nullable=False)
    programVersion = sa.Column(sa.Integer, nullable=False)
    versionOnRobot = sa.Column(sa.Boolean, nullable=False)
    processingLength = sa.Column(sa.Integer, nullable=False)
    planCycleTime = sa.Column(sa.Integer, nullable=False)
    pdf = sa.Column(sa.String, nullable=False)

    def __init__(self):
        super().__init__()
        Base.metadata.create_all()


    def add_product(self, productName, programVersion, planCycleTime, pdf):
        product = Product()
        product.entity_id = 'MY83-014K99'
        product.programName = productName
        product.programVersion = programVersion
        product.versionOnRobot = True
        product.processingLength = 340
        product.planCycleTime = planCycleTime
        product.pdf = '1118-Aero-Duct-LH-921-A.pdf'
        self.session.add(product)
        self.session.commit()


    
    def get_all(self):
        query = f'select * from mtrobot_info.{self.__tablename__}'
        res = self.session.execute(query).fetchall()
        return self.toDict(res)
        
        