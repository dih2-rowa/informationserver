from Models.orders import Order


# implementing the service-pattern for better testing
class OrderService:
    def __init__(self):
        self.model = Order()


    def getOrders(self):
        return self.model.get_all()
