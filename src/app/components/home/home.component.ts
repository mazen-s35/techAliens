import { ServeService } from './../../service/serve.service';
import { Service } from './../../interFace/service.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  serve: Service[] = []
  constructor(private services: ServeService) { }

  ngOnInit(): void {
    this.getAllServe()
  }

  getAllServe() {
    this.serve = this.services.allServices();
  }
}
