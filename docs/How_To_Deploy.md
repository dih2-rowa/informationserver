### Information Server

To run Infomation Server, open a repository in Visual Studio code and perform these steps:
Chose folder API and with a right-click button chose an option:  Open in Integrated Terminal.

Run a command docker-compose up, altenatively you can just right click on docker-compose.yml and choose a command Compose Up -  This is docker for pdf server, if you won't use PDF's in your application you can skip this point.
![image](https://user-images.githubusercontent.com/103100980/198825387-ac37d251-4ffa-4e60-85a3-86a0c0cc4f39.png)

Put in console commands visible below: 


  ```  -	npm install -g @angular/cli```

  ```  -	npm install```

  ```  -	npm install bootstrap```

  ```  -	npm i @zxing/browser@latest –save```

  ```  -	npm i @zxing/library@latest --save```

  ```  -	npm i @zxing/ngx-scanner@3.5.0 --save```

  
The Information server consists of two big parts:
  - **API:** To run the api you have to navigate to the API folder. Then run the command:

        docker-compose up

    After that all libraries are installed and you can access the API.
    If the host or port need to be changed, it is necessary to change the following conde in the main.py file:
    
        app.run(host="0.0.0.0", port="5011", debug=True)
    To create the connection to the database you have to change the following code:
        
        self.engine = sa.create_engine('crate://')

    Replace 'crate://' with the Connection-String of your database.
    You don't have to change it when the database is running on 10.92.80.10:4200.
    After that you need to navigate to the API-folder and youcan start the API with the following command:
    
        python3 main.py --port 4400
    
    4400 can be replaced by any port.
  - **Web-Client:** To run the client you need to navigate to the folder "Client/InformationServer and run following command:
  
        docker-compose up

    After that, all libraries are automaticaly installed and the website can be started through docker.

