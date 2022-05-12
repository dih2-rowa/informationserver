import { Component, OnInit } from '@angular/core';
import { RobotsService } from '../services/robots.service';

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.scss']
})
export class RobotsComponent implements OnInit {

  robots:any = []
  constructor(private robotService: RobotsService) { }

  ngOnInit(): void {
    this.robotService.get_robots().subscribe((response: any) =>{
      this.robots = response;
    });
  }




}
