import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './sections/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { SocialIcons } from './components/social-icons/social-icons';
import { Email } from './components/email/email';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Hero,SocialIcons,Email,About,Contact],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
