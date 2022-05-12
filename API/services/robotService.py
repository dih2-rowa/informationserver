from Models.Robot import Robot

class RobotService:
    def __init__(self):
        self.model = Robot()

    def get_all(self):
        return self.model.get_all()
        # mydict = []
        # for elem in res:
        #     mydict.append( dict(elem))
        # return mydict
