import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  
  linksMenu: Array<any> = [
    {
      name: 'Home',
      icon:''
    },
    {
      name: 'Buscar',
      icon:''
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
