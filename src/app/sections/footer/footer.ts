import { Component } from '@angular/core';

interface SocialLink {
  name: string;
  icon: string; 
  link: string;
}
@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {
 socialLinks: SocialLink[] = [
    {
      name: "Github",
      icon: "M15 22v-4a4.8 4.8 0 0 0-1-3.26c3-.4 6-1.5 6-6.74a5.2 5.2 0 0 0-1.2-3.8c.4-1.2.4-2.5-.2-3.8s-1.8-.7-3.2-.2c-1.5-.4-3-.4-4.5 0-1.4-.5-2.6-.2-3.2.2s-.6 2.5-.2 3.8a5.2 5.2 0 0 0-1.2 3.8c0 5.2 3 6.3 6 6.74a4.8 4.8 0 0 0-1 3.26v4M9 18a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5H9a.5.5 0 0 0-.5.5.5.5 0 0 0 .5.5z",
      link: "https://github.com/parvez-144",
    },
    {
      name: "LinkedIn",
      icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM4 21h4v-12h-4zM6 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4z",
      link: "https://linkedin.com/in/parvez-raza-siddiqui/",
    },
    {
      name: "LeetCode",
      icon: "M11 4.5l-7 7l7 7l1-1l-6-6l6-6zM13 18.5l7-7l-7-7l-1 1l6 6l-6 6z",
      link: "https://leetcode.com/parvez_7825",
    },
  ]
}
