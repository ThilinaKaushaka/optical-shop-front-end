import { Component, ElementRef, ViewChild } from '@angular/core';
import { CleanerType } from '../../../../util/item/lens-cleaner/CleanerType';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LensCleanerDto } from '../../../../model/item/items/LensCleanerDto';

@Component({
  selector: 'app-lens-cleaner',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,NgFor],
  templateUrl: './lens-cleaner.component.html',
  styleUrl: './lens-cleaner.component.css'
})
export class LensCleanerComponent {
  @ViewChild('txtCleanerID') cleanerId!: ElementRef;
  @ViewChild('txtVoluem') voluem!: ElementRef;
  
  selectedCleanerType: CleanerType = CleanerType.NONE;
  cleanerTypeArray: CleanerType[] = Object.values(CleanerType);

  itemId: number | null = null;

  
  changeCleanerType(cleaner: CleanerType): void {
      this.selectedCleanerType = cleaner;
  }

  isAlcoholFree: boolean = false;
  isAntiFog: boolean = false;


  onAlcoholFreeChange(event: Event) {
    this.isAlcoholFree = (event.target as HTMLInputElement).checked;
  }


  onAntiFogChange(event: Event) {
    this.isAntiFog = (event.target as HTMLInputElement).checked;
  }

  setLensCleanerValues(cleanerOb:LensCleanerDto): void {
    this.itemId = cleanerOb.itemId;
    this.cleanerId.nativeElement.value = `CLEANER-${cleanerOb.id}`;
    this.voluem.nativeElement.value = cleanerOb.volume;
    this.changeCleanerType(cleanerOb.type??CleanerType.NONE);
    this.isAlcoholFree=cleanerOb.alcoholFree??false;
    this.isAntiFog=cleanerOb.antiFog??false;
  }  

  getLensCleanerValues(): LensCleanerDto {
    return new LensCleanerDto(
      this.cleanerId.nativeElement.value==''?null:parseInt(this.cleanerId.nativeElement.value.split('-')[1]),
      this.itemId,
      parseFloat(this.voluem.nativeElement.value),
      this.selectedCleanerType,
      this.isAlcoholFree,
      this.isAntiFog
    );
  } 

}
