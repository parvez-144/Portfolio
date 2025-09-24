import { Component } from '@angular/core';
import { projectsData } from '../../utils/utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projectsData = projectsData;

}
