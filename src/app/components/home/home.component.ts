import { Component, OnInit } from '@angular/core';
import { Skills, Experience } from '../../../models/Data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  experience: Experience[];
  skills: Skills[];
  title = 'angularTest';
  ngOnInit(): void {
    this.experience = [
      {
        from: 'Kantari Suites Hotel',
        subject: 'Guest service agent',
        date: 'April 2017 - Present',
        avatar:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZyYH-wZGJbBv-bmDlrzrs4xr3Cl1tZ6h8GA&usqp=CAU',
      },
      {
        from: 'Goodies Verdun',
        subject: 'Warehouse keeper',
        date: 'April 2013 – October 2015',
        avatar:
          'https://lh3.googleusercontent.com/proxy/sMVUwBF5buI_0CMI40RPytLYQS1HewtiwjaU9N8xv4wrrpq2KaDZsHNyDVoqh6fU4bHli7jKI862oHcPSlRKOUEOquLY0uckKlSWFVo',
      },
    ];
    this.skills = [
      {
        text: 'Good knowledge of Java',
      },
      {
        text: 'Good knowledge of Python',
      },
      {
        text: 'Good knowledge of Android Studio',
      },
      {
        text: 'Good knowledge of Microsoft Office Word, Excel and PowerPoint',
      },
      {
        text: 'Able to communicate easily with others ',
      },
      {
        text: 'Able to perform clear presentations of work and concepts',
      },
      {
        text: 'Able to perform under pressure',
      },
      {
        text: 'Able to learn new procedures quickly',
      },
      {
        text: 'Able to work in team and independently',
      },
    ];
  }
}
