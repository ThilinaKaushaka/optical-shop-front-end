import { Component } from '@angular/core';
import { NosePadShape } from '../../../../util/item/nose-pad/NosePadShape';
import { NosePadMountType } from '../../../../util/item/nose-pad/NosePadMountType';
import { NosePadMaterial } from '../../../../util/item/nose-pad/NosePadMaterial';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-nose-pad',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,NgFor],
  templateUrl: './nose-pad.component.html',
  styleUrl: './nose-pad.component.css'
})
export class NosePadComponent {

shapeArray: NosePadShape[] = Object.values(NosePadShape);
mountArray: NosePadMountType[] = Object.values(NosePadMountType);
materialArray: NosePadMaterial[] = Object.values(NosePadMaterial);


selectedShape: NosePadShape = NosePadShape.NONE;
selectedMountType: NosePadMountType = NosePadMountType.NONE;
selectedMaterial: NosePadMaterial = NosePadMaterial.NONE;

itemId: number | null = null;


changeShape(shape: NosePadShape): void {
    this.selectedShape = shape;
    console.log(this.materialArray);
    
}

changeMountType(mountType: NosePadMountType): void {
    this.selectedMountType = mountType;
}

changeMaterial(material: NosePadMaterial): void {
    this.selectedMaterial = material;
}



}
