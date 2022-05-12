from importlib.metadata import metadata
import sqlalchemy as sa
from sqlalchemy.orm import sessionmaker
from uuid import uuid4


 
class BaseModel():
    def __init__(self):
        self.engine = sa.create_engine('crate://')
        Session = sessionmaker(bind=self.engine)
        self.session = Session()
        
        

    def toDict(self, res):
        mydict = []
        for r in res:
            mydict.append(dict(r))
        return mydict


    def connectDB(self):
        pass
    def gen_key():
        return str(uuid4())

