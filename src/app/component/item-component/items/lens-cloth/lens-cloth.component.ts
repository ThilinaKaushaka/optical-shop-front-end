import { NgFor } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LensClothMaterial } from '../../../../util/item/lens-cloth/LensClothMaterial';
import { LensClothSize } from '../../../../util/item/lens-cloth/LensClothSize';
import { LensClothDto } from '../../../../model/item/items/LensClothDto';

@Component({
  selector: 'app-lens-cloth',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,NgFor],
  templateUrl: './lens-cloth.component.html',
  styleUrl: './lens-cloth.component.css'
})
export class LensClothComponent {
  @ViewChild('txtClothId') clothId!: ElementRef;



  selectedMaterial: LensClothMaterial = LensClothMaterial.NONE;
  selectedSize: LensClothSize = LensClothSize.NONE;
  isAntiStatic: boolean = false;
  isPrinted: boolean = false;


  materialArray: LensClothMaterial[] = Object.values(LensClothMaterial);
  sizeArray: LensClothSize[] = Object.values(LensClothSize);

  itemId: number | null = null;


  changrMaterial(material:LensClothMaterial):void{
    this.selectedMaterial=material;
  }

  changeSize(size:LensClothSize):void{
    this.selectedSize=size;
  }

  onAntiStatic(event: Event) {
    this.isAntiStatic = (event.target as HTMLInputElement).checked;
  
  }

  onPrintedStatus(event: Event) {
    this.isPrinted = (event.target as HTMLInputElement).checked;

  }



onAntiStaticChange(event: Event) {
  this.isAntiStatic = (event.target as HTMLInputElement).checked;
}


onPrintedChange(event: Event) {
  this.isPrinted = (event.target as HTMLInputElement).checked;
}

  setLensClothValues(clothOb:LensClothDto):void{
    this.itemId=clothOb.itemId;
    this.clothId.nativeElement.value=`CLOTH-${clothOb.id}`;
    this.changrMaterial(clothOb.material??LensClothMaterial.NONE);
    this.changeSize(clothOb.size??LensClothSize.NONE);
    this.isAntiStatic=clothOb.isAntiStatic??false;
    this.isPrinted=clothOb.isPrinted??false;
  } 

  getLensClothValues():LensClothDto{
    return new LensClothDto(
      this.clothId.nativeElement.value==''?null:parseInt(this.clothId.nativeElement.value.split('-')[1]),
      this.itemId,
      this.selectedMaterial,
      this.selectedSize,
      this.isAntiStatic,
      this.isPrinted
    );
  }
}
