import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SolutionType } from '../../../../util/item/contact-lens-liquid/SolutionType';

@Component({
  selector: 'app-contact-lens-liquid',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,NgFor],
  templateUrl: './contact-lens-liquid.component.html',
  styleUrl: './contact-lens-liquid.component.css'
})
export class ContactLensLiquidComponent {
  
  isPreservatives:boolean =false;

  preservativesCheckboxChange(event: Event) {
    this.isPreservatives = (event.target as HTMLInputElement).checked;
  }

selectedSolution: SolutionType = SolutionType.NONE;
solutionTypeArray: SolutionType[] = Object.values(SolutionType);

changeSolutionType(solution: SolutionType): void {
  this.selectedSolution = solution;
}



}
