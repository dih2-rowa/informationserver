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

Check the file [How_To_Install.md](/docs/How_To_Install.md) and follow steps.

## How to adapt it?

Check the file [How_To_Adapt.md](/docs/How_To_Adapt.md) and follow steps.

## How to deploy it?

Check the file [How_To_Deploy.md](/docs/How_To_Deploy.md) and follow steps.

## How to use it?

Check the file [How_To_Use.md](/docs/How_To_Use.md) and follow steps.

## Environment Restrictions
  

## Known Limitations
  The QR-Code-Scanner can only be usef if the device which access the website has a camera.


## Improvements Backlog

## License
Provided under various open source licenses (mainly [Apache License 2.0](http://www.apache.org/licenses/LICENSE-2.0.html) and [MIT](http://opensource.org/licenses/MIT)). Third-party libraries or application servers included are distributed under their respective licenses. Full list including optional dependencies can be found on [Camunda - Third party libraries](https://docs.camunda.org/manual/7.15/introduction/third-party-libraries/).
