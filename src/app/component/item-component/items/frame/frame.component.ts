import {Component, ViewEncapsulation} from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import { FrameMaterial } from '../../../../util/item/frame/FrameMaterial';
import { NgFor } from '@angular/common';
import { FrameGender } from '../../../../util/item/frame/FrameGender';
import { FrameShape } from '../../../../util/item/frame/FrameShape';






interface Food {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-frame',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,NgFor],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.css',
  encapsulation:ViewEncapsulation.None,
  standalone:true,
})
export class FrameComponent {

  


  
  selectedMaterial:FrameMaterial=FrameMaterial.NONE;
  materialArray:FrameMaterial[]=Object.values(FrameMaterial);

  selectedGender:FrameGender=FrameGender.NONE;
  genderArray:FrameGender[]=Object.values(FrameGender);

  selectedShape:FrameShape=FrameShape.NONE;
  shapeArray:FrameShape[]=Object.values(FrameShape);

  changeMaterial(material:FrameMaterial):void{
    this.selectedMaterial=material;
  }

  changeGender(gender:FrameGender):void{
    this.selectedGender=gender;
  }

  changeShape(shape:FrameShape):void{
    this.selectedShape=shape;
  }

}


