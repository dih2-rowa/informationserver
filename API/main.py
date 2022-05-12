from flask import Flask, jsonify
from flask_cors import CORS, cross_origin
from services.productService import ProductService

from Models.orders import Order
from Models.products import Product

from services.robotService import RobotService
from Models.Robot import Robot


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

@app.route("/api/order/add", methods=['GET'])
@cross_origin()
def add_order():
    Order().add()
    return 'Added new Order'

@app.route('/api/product/all')
@cross_origin()
def get_products():
    return jsonify((ProductService().getProducts()))

if __name__ == "__main__":
    app.run(debug=True)