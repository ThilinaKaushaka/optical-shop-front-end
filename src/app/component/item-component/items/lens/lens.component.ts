import { Component, ElementRef, ViewChild } from '@angular/core';
import { LensCoating } from '../../../../util/item/lens/LensCoating';
import { LensFinished } from '../../../../util/item/lens/LensFinished';
import { LensMaterial } from '../../../../util/item/lens/LensMaterial';
import { LensType } from '../../../../util/item/lens/LensType';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-lens',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,NgFor],
  templateUrl: './lens.component.html',
  styleUrl: './lens.component.css'
})
export class LensComponent {
  
  @ViewChild('txtLensId') txtLensId!:ElementRef;

  selectedCoating:LensCoating=LensCoating.NONE;
  coatingArray:LensCoating[]=Object.values(LensCoating);

  selectedFinished:LensFinished=LensFinished.NONE;
  finishedArray:LensFinished[]=Object.values(LensFinished);

  selectedMaterial:LensMaterial=LensMaterial.NONE;
  materialArray:LensMaterial[]=Object.values(LensMaterial);

  selectedType:LensType=LensType.NONE;
  typeArray:LensType[]=Object.values(LensType);

  changeCoating(coating:LensCoating):void{
    this.selectedCoating=coating;
  }

  changeFinished(finished:LensFinished):void{
    this.selectedFinished=finished;
  }

  changeMaterial(material:LensMaterial):void{
    this.selectedMaterial=material;
  }

  changeType(type:LensType):void{
    this.selectedType=type;
  }


}
