/* eslint-disable object-shorthand */
/* eslint-disable no-empty */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
const crate = require('node-crate');


exports.getproduct = (req, res, next) => {
    const id = req.params.id;
    crate.connect('localhost', 4200);
    crate.execute('select * from mtrobot_info.etproduct').then((products) => {
        crate.execute('select * from mtrobot_info.etorder').then((orders) => {
            const productPages = getProductsWithOrders(products, orders);
            productPages.forEach((productPage) => {
                console.log(productPage);
                console.log(id);
                if (productPage.product.entity_id === id) {
                    console.log('Going here')
                    res.status(200).json(productPage);
                }
            })
        });
    });
}

exports.getProducts = (req, res, next) => {
    crate.connect('localhost', 4200);
    crate.execute('select * from mtrobot_info.etproduct').then((products) => {
        crate.execute('select * from mtrobot_info.etorder').then((orders) => {
            const productPage = getProductsWithOrders(products, orders);
            res.status(200).json(productPage);
        });
    });

}

const getProductsWithOrders = (products, orders) => {

    const productPage = [];
    Array.from(products.json).forEach((product) => {
        const ordersfinished = [];
        const orderspending = [];
        let orderrunning = {}
        Array.from(orders.json).forEach((order) => {
            if (order.productid === product.entity_id) {
                if (order.orderstatus === "Finished") {
                    ordersfinished.push(order);
                } else if (order.orderstatus === "Open") {
                    orderspending.push(order)
                } else if (order.orderstatus === "Running") {
                    orderrunning = order;
                }
            }
        });
        productPage.push({
            "product": product,
            "ordersfinished": ordersfinished,
            "orderstodo": orderspending,
            "orderrunning": orderrunning
        });
    });

    return productPage
}