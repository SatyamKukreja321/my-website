import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  theme: 'light' | 'dark' = 'light';

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.loadTheme();
  }

  toggleTheme(): void {
    if (this.theme === 'light') {
      this.setTheme('dark');
    } else {
      this.setTheme('light');
    }
  }

  private loadTheme(): void {
    const savedTheme = (localStorage.getItem('theme') as 'light' | 'dark') || 'light';
    this.setTheme(savedTheme);
  }

  private setTheme(theme: 'light' | 'dark'): void {
    this.theme = theme;
    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      this.renderer.addClass(document.body, 'dark-theme');
      this.renderer.removeClass(document.body, 'light-theme');
    } else {
      this.renderer.addClass(document.body, 'light-theme');
      this.renderer.removeClass(document.body, 'dark-theme');
    }
  }

}
