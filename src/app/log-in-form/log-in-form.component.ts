import { Component } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-log-in-form',
  imports: [RouterModule,RouterOutlet],
  templateUrl: './log-in-form.component.html',
  styleUrl: './log-in-form.component.css'
})
export class LogInFormComponent {
  imagePath:string="image/eye.png";

  
  logIn(){
    
    
  }

}
