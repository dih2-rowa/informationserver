
import sqlalchemy as sa
from sqlalchemy.orm import sessionmaker
from uuid import uuid4


 # Base Class from which every model inherits
class BaseModel():
    def __init__(self):
        #default connection to crateDB: localhost:4200
        # self.engine = sa.create_engine('crate://host.docker.internal:4200')
        self.engine = sa.create_engine('crate://')
        Session = sessionmaker(bind=self.engine)
        self.session = Session()
        
        
    # needed to jsonify the data
    def toDict(self, res):
        mydict = []
        for r in res:
            mydict.append(dict(r))
        return mydict

    # generates the id for database entries
    def gen_key():
        return str(uuid4())

