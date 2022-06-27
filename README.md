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
















































# Kommt von alter Vorlage kann bei Fertigstellung gelöscht werden

[![License: MIT](https://img.shields.io/github/license/ramp-eu/TTE.project1.svg)](https://opensource.org/licenses/MIT)
[![Docker badge](https://img.shields.io/docker/pulls/ramp-eu/TTE.project1.svg)](https://hub.docker.com/r/<org>/<repo>/)
<br/>
[![Documentation Status](https://readthedocs.org/projects/tte-project1/badge/?version=latest)](https://tte-project1.readthedocs.io/en/latest/?badge=latest)
[![CI](https://github.com/ramp-eu/TTE.project1/workflows/CI/badge.svg)](https://github.com/ramp-eu/TTE.project1/actions?query=workflow%3ACI)
[![Coverage Status](https://coveralls.io/repos/github/ramp-eu/TTE.project1/badge.svg?branch=master)](https://coveralls.io/github/ramp-eu/TTE.project1?branch=master)
[![Codacy grade](https://img.shields.io/codacy/grade/99310c5c4332439197633912a99d2e3c)](https://app.codacy.com/manual/jason-fox/TTE.project1)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/4187/badge)](https://bestpractices.coreinfrastructure.org/projects/4187)

```text

The Badges above demonstrate testing, code coverage
and commitment to coding standards (since the code is linted on commit).

The links need to be amended to point to the correct repo.

Sign up for:

- CI Test system - e.g. GitHub Actions, Travis
- A Documentation website - e.g. ReadTheDocs
- Static Code Analysis tool - e.g. Codacy
- CII Best Practices https://bestpractices.coreinfrastructure.org

Only CII Best Practices (and its badge) is mandatory. Any equivalent public automated tools for the other three may be used.

Note that the CII Best Practices questionaire will request evidence of tooling used.

```

```text
One or two sentence preamble describing the element
```

## Contents

- [<TITLE>](#title)
  - [Contents](#contents)
  - [Background](#background)
  - [Install](#install)
  - [Usage](#usage)
  - [API](#api)
  - [Testing](#testing)
  - [License](#license)

## Test NGSI V2 API with VS code and docker desktop
### VScode Extensions used
 - Name: REST Client
    Id: humao.rest-client
    Description: REST Client for Visual Studio Code
    Version: 0.24.6
    Publisher: Huachao Mao
    VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=humao.rest-client
 - Name: Docker
    Id: ms-azuretools.vscode-docker
    Description: Makes it easy to create, manage, and debug containerized applications.
    Version: 1.21.0
    Publisher: Microsoft
    VS Marketplace Link: https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker

### Example
- Start Docker Desktop
- Open VS code
- Right Click to [docker-compose_orion-minimal.yaml](docker\docker-compose\test\docker-compose_orion-minimal.yml)
  - *Compose Up*
- Send Requests from [example_walkthrough_apiv2.http](docker\docker-compose\test\example_walkthrough_apiv2.http)


## Background

```text
Background information and links to relevant terms
```

## Install

```text
How to install the component

Information about how to install the <Name of component> can be found at the corresponding section of the
[Installation & Administration Guide](docs/installationguide.md).

A `Dockerfile` is also available for your use - further information can be found [here](docker/README.md)

```

## Usage

```text
How to use the component

Information about how to use the <Name of component> can be found in the [User & Programmers Manual](docs/usermanual.md).

The following features are listed as [deprecated](docs/deprecated.md).
```

## API

```text
Definition of the API interface:

Information about the API of  the <Name of component> can be found in the [API documentation](docs/api.md).

```

## Testing

```text
How to test the component

For performing a basic end-to-end test, you have to follow the step below. A detailed description about how to run tests can be found [here].

> npm test

```

## License

[MIT](LICENSE) © <TTE>
