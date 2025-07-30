import { Component } from '@angular/core';
import { CleanerType } from '../../../../util/item/lens-cleaner/CleanerType';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-lens-cleaner',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,NgFor],
  templateUrl: './lens-cleaner.component.html',
  styleUrl: './lens-cleaner.component.css'
})
export class LensCleanerComponent {

  
  selectedCleaner: CleanerType = CleanerType.NONE;
  cleanerTypeArray: CleanerType[] = Object.values(CleanerType);

  itemId: number | null = null;

  
  changeCleanerType(cleaner: CleanerType): void {
      this.selectedCleaner = cleaner;
  }

  isAlcoholFree: boolean = false;
  isAntiFog: boolean = false;


  onAlcoholFreeChange(event: Event) {
    this.isAlcoholFree = (event.target as HTMLInputElement).checked;
  }


  onAntiFogChange(event: Event) {
    this.isAntiFog = (event.target as HTMLInputElement).checked;
  }

}
