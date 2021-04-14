import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 20, label: "# of Users" },
    { value: 900, label: "Revenue" },
    { value: 50, label: "Reviews" },
  ]
  itemsList = [
    {
      image: "/assets/couch.jpeg",
      title: "Couch",
      description: "This is a fantastic counch to sit on."
    },
    {
      image: "/assets/dresser.jpeg",
      title: "Dresser",
      description: "This is a great dresser to put stuff in."
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
