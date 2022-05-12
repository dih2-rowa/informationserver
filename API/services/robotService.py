from Models.robots import Robot

# implementing the service-pattern for better testing
class RobotService:
    def __init__(self):
        self.model = Robot()

    def get_all(self):
        return self.model.get_all()