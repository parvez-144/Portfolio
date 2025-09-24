import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {

  experiences = [
    {
      name: "Biz2x",
      role: "Associate Software Engineer",
      url: "https://www.biz2x.com",
      start: "September 2025",
      end: "Present",
      shortDescription: [
        "I had Experience on working on MEAN stack."
      ]
    },
    {
      name: "Goalwit Technologies",
      role: "Software Engineer Intern",
      url: "https://www.nikahforever.com/home/about",
      start: "April 2025",
      end: "August 2025",
      shortDescription: [
        "Worked on developing and maintaining web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      ]
    },
 
  ];
  selected = 0;

}
