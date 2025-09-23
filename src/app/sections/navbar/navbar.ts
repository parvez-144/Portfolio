import { Component, HostListener, OnInit } from '@angular/core';
import { Button } from '../../components/button/button';
import { CommonModule } from '@angular/common';
import { Logo } from '../../components/logo/logo';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-navbar',
  imports:[Button,CommonModule,Logo,RouterLink],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
 sectionLinks = [
    { name: 'About', link: '#about' },
    { name: 'Project', link: '#project' },
    { name: 'Contact', link: '#contact' },
  ];

  navbarVisible = false;
  responsiveNavVisible = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.navbarVisible = window.scrollY > 100;
  }

  toggleResponsiveNav() {
    this.responsiveNavVisible = !this.responsiveNavVisible;
    const main = document.querySelector('main');
    if (main) {
      this.responsiveNavVisible ? main.classList.add('blur') : main.classList.remove('blur');
    }
  }

  closeResponsiveNav() {
    this.responsiveNavVisible = false;
    const main = document.querySelector('main');
    if (main) {
      main.classList.remove('blur');
    }
  }
}