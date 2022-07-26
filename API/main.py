from flask import Flask, jsonify, request, send_file
from flask_cors import CORS, cross_origin
from Models.ProductPage import Productpage
from services.orderService import OrderService
from services.productService import ProductService

from Models.orders import Order
from Models.products import Product

from services.robotService import RobotService
from Models.robots import Robot



app = Flask(__name__)
# CORS is only needed if a website requests data from the api
cors = CORS(app, resources={r"*": {"origins": "*"}})

@app.route("/api", methods=["GET"])
def get_home():
    return 'Welcome to Robosonic-API'

# @app.route("/api/robots/add", methods =["GET","POST"])
# def add_robot():
#     Robot().add()
#     return 'Robot added'

@app.route("/api/product/add", methods=["GET", "POST"])
@cross_origin()
def add_product():
    print(request.form['productName'])

    Product().add_product(request.form['productName'], request.form['programVersion'], request.form['planCycleTime'], request.form['pdf'])
    return 'Product added'

@app.route("/api/robots", methods = ["GET"])
@cross_origin()
def get_robots():
    response = jsonify((RobotService().get_all()))
    # return jsonify((RobotService().get_all()))
    print(response)
    return response

@app.route("/api/orders/add", methods=['GET'])
@cross_origin()
def add_order():
    Order().add()
    return 'Added new Order'

@app.route("/api/orders/all")
def get_orders():
    return jsonify(OrderService().getOrders())

@app.route('/api/products/all')
@cross_origin()
def get_products():
    products = ProductService().getProducts()
    for product in products:
        product['pdf'] = request.url_root + product['pdf'];
    return jsonify((products))

@app.route('/api/products/page')
def get_products_page():
    productpage = getProductPages()
    print(jsonify(productpage))
    return jsonify(productpage)

@app.route('/api/pdf/<path:filename>')
def getPdf(filename):
    print(filename)
    # return send_from_directory('', filename, as_attachment=True)
    return send_file(('PDF/' + filename), attachment_filename=filename)

@app.route('/api/products/page/<id>',methods = ["GET"])
def get_product(id):
    products = getProductPages()
    print(products)
    for product in products:
        print(product)
        if product['product']['entity_id'] == id:
            return jsonify(product)


def getProductPages():
    # get all products and orders
    products = ProductService().getProducts()
    orders = OrderService().getOrders()
    # orders = orders.items()
    productpage = []
    print(orders)

    for product in products:
        finishedorders = []
        pendingorders = []
        runningOrder = {}
        for order in orders:
            print(order)
            if product['entity_id'] == order['productid'] :
                if order['orderstatus'] == 'Finished':
                    finishedorders.append(order)
                elif order['orderstatus'] == 'Open':
                    pendingorders.append(order)
                elif order['orderstatus'] == 'Running':
                    runningOrder = order
        productpage.append(Productpage(product=product,finishedOrders=finishedorders, pendingOrders=pendingorders, runningOrder=runningOrder).serialize())
    return productpage

if __name__ == "__main__":
    app.run(host="0.0.0.0", port="5011", debug=True)
    print("started")