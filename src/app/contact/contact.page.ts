import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  twitter = 'FM';
  showTwitter = false;

  //tasks: string [];
  tasks: string[] = [];
  nuevaTarea = '';

  constructor() { }

  ngOnInit() {
  }

  show(){
    this.showTwitter = true;
  }

  hide(){
    this.showTwitter = false;
  }

  toggle(){
    this.showTwitter = !this.showTwitter; 
  }

  addTask(){
    console.log(this.nuevaTarea);
    //this.tasks.push('New Task');
    this.tasks.push(this.nuevaTarea);
    this.nuevaTarea = '';
    console.log(this.tasks);
    
  }
}
