import { Component, ElementRef, ViewChild } from '@angular/core';
import { BoxMaterial } from '../../../../util/item/box/BoxMaterial';
import { BoxSize } from '../../../../util/item/box/BoxSize';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BoxDto } from '../../../../model/item/items/BoxDto';

@Component({
  selector: 'app-box',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,NgFor],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent {

  @ViewChild('lblBoxId') lblBoxId !: ElementRef;
  @ViewChild('txtBoxId') boxId !:ElementRef;
  isWaterProof:boolean = false;
  isLockable:boolean=false;
  selectedMaterial: BoxMaterial = BoxMaterial.NONE;
  selectedSize: BoxSize = BoxSize.NONE;


  materialArray: BoxMaterial[] = Object.values(BoxMaterial);
  sizeArray: BoxSize[] = Object.values(BoxSize);

  itemId: number | null = null;
  

  changeMaterial(material: BoxMaterial): void {
    this.selectedMaterial = material;
  }

  changeSize(size: BoxSize): void {
    this.selectedSize = size;
  }

  waterProfCheckboxChange(event: Event) {
    this.isWaterProof = (event.target as HTMLInputElement).checked;
  }

  lockableCheckboxChange(event: Event) {
    this.isLockable = (event.target as HTMLInputElement).checked;
  }

  setBoxValue(boxDto:BoxDto):void{
    this.itemId=boxDto.itemId;
    this.boxId.nativeElement.value='BOX-'+boxDto.id;
    this.changeMaterial(boxDto.material??BoxMaterial.NONE);
    this.changeSize(boxDto.size??BoxSize.NONE);
    this.isLockable=boxDto.isLockable??false;
    this.isWaterProof=boxDto.isWaterProof??false;
  }

  getBoxValue():BoxDto{
    return new BoxDto(
      this.boxId.nativeElement.value==''?null:parseInt(this.boxId.nativeElement.value.split('-')[1]),
      this.itemId,
      this.selectedMaterial,
      this.selectedSize,
      this.isLockable,
      this.isWaterProof
    );
  }
  
}
