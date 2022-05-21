from cProfile import run
import json
from urllib.request import Request
from flask import Flask, jsonify, request, send_file, send_from_directory
from flask_cors import CORS, cross_origin
from Models.ProductPage import Productpage
from services.orderService import OrderService
from services.productService import ProductService

from Models.orders import Order
from Models.products import Product

from services.robotService import RobotService
from Models.robots import Robot

from Models.enums import OrderStatus


app = Flask(__name__)
# CORS is only needed if a website requests data from the api
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

@app.route("/api", methods=["GET"])
def get_home():
    return 'Welcome to Robosonic-API'

@app.route("/api/robots/add", methods =["GET","POST"])
def add_robot():
    Robot().add()
    return 'Robot added'

@app.route("/api/product/add", methods=["GET", "POST"])
@cross_origin()
def add_product():
    Product().add_product()
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
    # get all products and orders
    products = ProductService().getProducts()
    orders = OrderService().getOrders()
    # orders = orders.items()
    productpage = []
    # print(orders)

    for product in products:
        finishedorders = []
        pendingorders = []
        runningOrder = {}
        for order in orders:
            print(order)
            if order['product_id'] == product['id']:
                if order['orderStatus'] == 'Finished':
                    finishedorders.append(order)
                elif order['orderStatus'] == 'Pending':
                    pendingorders.append(order)
                elif order['orderStatus'] == 'Running':
                    runningOrder = order
        productpage.append(Productpage(product=product,finishedOrders=finishedorders, pendingOrders=pendingorders, runningOrder=runningOrder).serialize())
    print(jsonify(productpage))
    return jsonify(productpage)

@app.route('/api/pdf/<path:filename>')
def getPdf(filename):
    print(filename)
    # return send_from_directory('', filename, as_attachment=True)
    return send_file(('PDF/' + filename), attachment_filename=filename)


if __name__ == "__main__":
    app.run(debug=True)