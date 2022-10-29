# Information Server

## Purpose
This software enables an user to obtain information about current orders and work sequences as easily as possible. The shown data is based on a product identification and comes from the Orion Context Broker (OCB) and a web server.

### Features
  - provide order data for a certain product from OCB
  - possibility to attach documents like e.g.: work sequence to a product
  - QR-Code base search funktion
  - search bar to find specific products

## Overview
The Information Server was developed as part of the Robosonic Project (Part of the 2nd [DIH²](http://www.dih-squared.eu/) funding project). Developed by [RoWa Automation GmBh](https://www.rowa-automation.at/)

## Architecture

![image](https://user-images.githubusercontent.com/102011176/175545443-489eeeb5-7f34-4d03-aa02-6bf11b5d22fd.png)
*The whole picture shows the scope of the entire Robosonic project. The red square shows the components of the Information Server.*

Basically, the Information Server consists of 3 software components:
  - Operator Information Server
  - Web Server
  - GUI

### Operator Information Server
  The Operator Information Server is written in python and with the use of the library Flask.
  The API reads the data from the CrateDB and returns it to the Web-Client if the data is requested. To access CrateDB the library SQLAlchemy is used. But only the version 1.3 or lower supports CrateDB.


### Web Server

### GUI
  The graphical user interface is written with the Angular-framework. This allows to write the website a reusable way. The website is designed with HTML and SCSS. Typescript is used to request the data from the api and parse it down to the HTML-template.
  

## How to install it?

Check the file [getting_started.md](/docs/getting_started.md). And follow steps of every Doku.

## How to adapt it?
  - **API:** To adapt the API you have to change the connection string to the database.
     If the database runs on localhost:4200 you can skip that step.
  - **Web-Client:** To adapt the Web-Client you have to change the base-Url in both of the environment files in the environments folder.

## How to deploy it?
The Information server consists of two big parts:
  - **API:** To run the api you have to navigate to the API folder. Then run the command:

        docker-compose up

    After that all libraries are installed and you can access the API.
    If the host or port need to be changed, it is necessary to change the following conde in the main.py file:
    
        app.run(host="0.0.0.0", port="5011", debug=True)
    To create the connection to the database you have to change the following code:
        
        self.engine = sa.create_engine('crate://')

    Replace 'crate://' with the Connection-String of your database.
    You don't have to change it when the database is running on localhost:4200.
    After that you need to navigate to the API-folder and youcan start the API with the following command:
    
        python3 main.py --port 4400
    
    4400 can be replaced by any port.
  - **Web-Client:** To run the client you need to navigate to the folder "Client/InformationServer and run following command:
  
        docker-compose up

    After that, all libraries are automaticaly installed and the website can be started through docker.


## How to use it?
  Access the Information-Server on the port where it is deployed.
  To make use of the QR-Code Scanner the device needs a camera. When you click 'QR Code scannen' the browser ask for permission to access the camera. If you want to make use of it you have to click 'Yes'.
  The website can be used on large and  on mobile screen sizes.


## Environment Restrictions
  

## Known Limitations
  The QR-Code-Scanner can only be usef if the device which access the website has a camera.


## Improvements Backlog

## License
Provided under various open source licenses (mainly [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0.html) and [MIT](http://opensource.org/licenses/MIT)). Third-party libraries or application servers included are distributed under their respective licenses. Full list including optional dependencies can be found on [Camunda - Third party libraries](https://docs.camunda.org/manual/7.15/introduction/third-party-libraries/).
