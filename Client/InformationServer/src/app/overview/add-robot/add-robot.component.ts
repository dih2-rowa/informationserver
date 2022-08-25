import { Component, OnInit } from '@angular/core';
import { FiwareService } from 'src/app/services/fiware.service';

@Component({
  selector: 'app-add-robot',
  templateUrl: './add-robot.component.html',
  styleUrls: ['./add-robot.component.scss']
})
export class AddRobotComponent implements OnInit {

  constructor(private fiwareService: FiwareService) { }

  ngOnInit(): void {
  }



}
