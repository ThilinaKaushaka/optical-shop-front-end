import { NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { SolutionType } from '../../../../util/item/contact-lens-liquid/SolutionType';
import { ContactLiquidDto } from '../../../../model/item/items/ContactLiquidDto ';

@Component({
  selector: 'app-contact-lens-liquid',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,NgFor],
  templateUrl: './contact-lens-liquid.component.html',
  styleUrl: './contact-lens-liquid.component.css'
})
export class ContactLensLiquidComponent {
  
  @ViewChild('txtLiquidID') liquidID !: ElementRef;
  @ViewChild('txtVolume') volume !: ElementRef;

  isPreservatives:boolean =false;

  preservativesCheckboxChange(event: Event) {
    this.isPreservatives = (event.target as HTMLInputElement).checked;
  }

  selectedSolution: SolutionType = SolutionType.NONE;
  solutionTypeArray: SolutionType[] = Object.values(SolutionType);

  itemId: number | null = null;


  changeSolutionType(solution: SolutionType): void {
    this.selectedSolution = solution;
  }

  setContactLensLiquidValues(liquOb: ContactLiquidDto): void {
    this.itemId = liquOb.itemId;
    this.liquidID.nativeElement.value = `LIQUID-${liquOb.id}`;
    this.volume.nativeElement.value = liquOb.volume;
    this.changeSolutionType(liquOb.type??SolutionType.NONE);
    this.isPreservatives=liquOb.preservatives??false;
  }

  getContactLensLiquidValues(): ContactLiquidDto {
    return new ContactLiquidDto(
      this.liquidID.nativeElement.value==''?null:parseInt(this.liquidID.nativeElement.value.split('-')[1]),
      this.itemId,
      parseFloat(this.volume.nativeElement.value),
      this.isPreservatives,
      this.selectedSolution
      
    );

  }


}
