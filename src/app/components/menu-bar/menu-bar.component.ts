import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {
  private links: string[] = [
    "https://www.youtube.com/shorts/bRSSDsE5R3g",
    "https://www.youtube.com/watch?v=TATkXfZWgYU",
    "https://www.youtube.com/watch?v=LlAYEbpniAs",
    "https://www.youtube.com/watch?v=A2fpqSmVvRM",
    "https://www.youtube.com/watch?v=d7FIpqPvL7E",
    "https://www.youtube.com/watch?v=y90yaLFoYoA",
    "https://www.youtube.com/watch?v=nVmXsBNfwHY",
    "https://www.youtube.com/watch?v=cRl75jPxHAo&t",
    "https://www.youtube.com/watch?v=kGsaF8OWY1Q",
    "https://www.youtube.com/watch?v=CIF-r7F2clc",
    "https://www.youtube.com/watch?v=uo2WTaZ8Xd4",
    "https://www.youtube.com/watch?v=UnrWbACnur8",
    "https://youtu.be/zFZXV9EoMEc?si=LvPpmBLGA_4KFEQi",
    "https://www.youtube.com/watch?v=q3fTnxvquGY"
  ];

  openRandomLink() {
    const randomIndex = Math.floor(Math.random() * this.links.length);
    const randomURL = this.links[randomIndex];
    window.open(randomURL, '_blank');
  }
}
