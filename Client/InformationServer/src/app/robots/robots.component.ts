import { Component, OnInit } from '@angular/core';
import { FiwareService } from '../services/fiware.service';

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.scss']
})
export class RobotsComponent implements OnInit {

  robots:any = []
  constructor(private fiwareService: FiwareService) { }

  ngOnInit(): void {
    this.fiwareService.getRobots().subscribe((response: any) =>{
      this.robots = response;
    });
  }




}
