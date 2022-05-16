from enum import Enum

class OrderStatus(Enum):
    Finished = 'Finished'
    Pending = 'Pending'
    Running = 'Running'