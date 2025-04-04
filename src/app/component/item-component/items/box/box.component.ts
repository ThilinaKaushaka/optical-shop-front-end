import { Component } from '@angular/core';
import { BoxMaterial } from '../../../../util/item/box/BoxMaterial';
import { BoxSize } from '../../../../util/item/box/BoxSize';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-box',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,NgFor],
  templateUrl: './box.component.html',
  styleUrl: './box.component.css'
})
export class BoxComponent {


  selectedMaterial: BoxMaterial = BoxMaterial.NONE;
  selectedSize: BoxSize = BoxSize.NONE;


  materialArray: BoxMaterial[] = Object.values(BoxMaterial);
  sizeArray: BoxSize[] = Object.values(BoxSize);


  changeMaterial(material: BoxMaterial): void {
    this.selectedMaterial = material;
  }

  changeSize(size: BoxSize): void {
    this.selectedSize = size;
  }


  isWaterProof:boolean = false;
  isLockable:boolean=false;
  waterProfCheckboxChange(event: Event) {
      this.isWaterProof = (event.target as HTMLInputElement).checked;
  }

  lockableCheckboxChange(event: Event) {
    this.isLockable = (event.target as HTMLInputElement).checked;
  }


  

}
