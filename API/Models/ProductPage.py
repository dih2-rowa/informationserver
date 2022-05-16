from Models.base import BaseModel

class Productpage(BaseModel):
    def __init__(self, product, finishedOrders, pendingOrders, runningOrder):
        self.product = product
        self.finishedOrders = finishedOrders
        self.pendingOrders = pendingOrders
        self.runningOrder = runningOrder


    def serialize(self):
        return {
            'product': self.product,
            'finishedOrders': self.finishedOrders,
            'pendingOrders': self.pendingOrders,
            'runningOrder': self.runningOrder

        }
