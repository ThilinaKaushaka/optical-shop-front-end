import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import 'boxicons';
@Component({
  selector: 'app-admin-nav-panel',
  imports: [RouterOutlet,RouterModule],
  templateUrl: './admin-nav-panel.component.html',
  styleUrl: './admin-nav-panel.component.css'
})
export class AdminNavPanelComponent implements OnInit {

  customSidebar!: HTMLElement;
  customCloseBtn!: HTMLElement;
  customSearchBtn!: HTMLElement;

  ngOnInit(): void {
    this.customSidebar = document.querySelector(".custom-sidebar") as HTMLElement;
    this.customCloseBtn = document.querySelector("#custom-btn") as HTMLElement;
    this.customSearchBtn = document.querySelector(".bx-search") as HTMLElement;

    if (this.customCloseBtn && this.customSidebar && this.customSearchBtn) {
      this.customCloseBtn.addEventListener("click", () => {
        this.toggleSidebar();
      });

      this.customSearchBtn.addEventListener("click", () => {
        this.toggleSidebar();
      });
    }
  }

  toggleSidebar(): void {
    this.customSidebar.classList.toggle("open");
    this.customMenuBtnChange();
  }

  customMenuBtnChange(): void {
    if (this.customSidebar.classList.contains("open")) {
      this.customCloseBtn.classList.replace("bx-menu", "bx-menu-alt-right");
    } else {
      this.customCloseBtn.classList.replace("bx-menu-alt-right", "bx-menu");
    }
  }
}



