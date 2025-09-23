import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './sections/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { SocialIcons } from './components/social-icons/social-icons';
import { Email } from './components/email/email';
import { About } from './sections/about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Hero,SocialIcons,Email,About],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
