from Models.products import Product

class ProductService:
    def __init__(self):
        self.model = Product()


    def getProducts(self):
        return self.model.get_all()
