import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

cursos = ['Angular 2', 'Java', 'Phonegap'];

  constructor() { }
  ngOnInit() {
  }


}

