import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './sections/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { SocialIcons } from './components/social-icons/social-icons';
import { Email } from './components/email/email';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { Projects } from './sections/projects/projects';
import { Experience } from './sections/experience/experience';
import { Footer } from './sections/footer/footer';
import { Loader } from './components/loader/loader';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Hero,SocialIcons,Email,About,Contact,Projects,Experience,Footer,Loader,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
isLoading = signal(true);

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading.set(false);
    }, 2000);
  }
}
