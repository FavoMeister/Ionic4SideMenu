import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  id;

  constructor(
    private route: ActivatedRoute
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
   }

  ngOnInit() {
  }

}
