import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Epsilon';
  constructor(private route: ActivatedRoute) {}


  ngOnInit() {
    this.route.paramMap.subscribe( (params) => {
      console.log(`params : ${JSON.stringify(params)}`);
      this.title = params.get('title');
    });
  }

}
