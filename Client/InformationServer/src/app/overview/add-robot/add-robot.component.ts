import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FiwareRobot } from 'src/app/models/Robot';
import { FiwareService } from 'src/app/services/fiware.service';

@Component({
  selector: 'app-add-robot',
  templateUrl: './add-robot.component.html',
  styleUrls: ['./add-robot.component.scss']
})
export class AddRobotComponent implements OnInit {


  markedAsTouched:boolean;

  isUpdate:boolean = false;
  form: FormGroup
  robotJson:string
  id:string;
  constructor(private fiwareService: FiwareService, private formBuilder: FormBuilder, private route: ActivatedRoute) {
    this.form = this.formBuilder.group({
      robotId: ['', [Validators.required]]
  })
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.isUpdate = true;
      this.fiwareService.getRobot(this.id).pipe().subscribe((fiwareRobot:FiwareRobot) =>{
        this.form.controls['robotId'].setValue(fiwareRobot.id);
      });

    }

  }

  onAddClicked(){
    if(!this.isUpdate){
      this.robotJson= `
      {
        "id": "${this.form.controls['robotId'].value}",
        "type": "Processdata",
        "version": {
          "value": 1,
          "type": "Integer"
        },
        "robotRunning": {
          "value": false,
          "type": "Boolean"
        },
        "robotSpeed": {
          "value": 100,
          "type": "Integer"
        },
        "currCycleTime": {
          "value": 0,
          "type": "Integer"
        },
        "drawer1Status": {
          "value": "Raw part",
          "type": "String"
        },
        "drawer2Status": {
          "value": "Processed part",
          "type": "String"
        },
          "restServiceLife": {
          "value": 306000,
          "type": "Integer"
        },
          "orderID": {
          "value": "",
          "type": "String"
        }
      }
      `
    }else{
      this.robotJson= `
      {
        "id": "${this.form.controls['robotId'].value}",
        "type": "Processdata"
      }
      `
    }

  }

  sendRequestClicked(){
    if(!this.isUpdate){
      this.fiwareService.addRobot(this.robotJson);
    }else{
      this.fiwareService.updateRobot(this.robotJson, this.id);
    }
  }



}
