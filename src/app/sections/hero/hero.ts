import { Component } from '@angular/core';
import { Button } from '../../components/button/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  imports: [Button,CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class Hero {

}
