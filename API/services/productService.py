from Models.products import Product

# implementing the service-pattern for better testing
class ProductService:
    def __init__(self):
        self.model = Product()


    def getProducts(self):
        return self.model.get_all()
