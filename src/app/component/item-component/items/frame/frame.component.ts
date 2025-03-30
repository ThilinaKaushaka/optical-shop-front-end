import { Component, NgModule } from '@angular/core';
import { FrameMaterial } from '../../../../util/frame/FrameMaterial';
import { NgFor} from '@angular/common';


@Component({
  selector: 'app-frame',
  imports: [NgFor],
  templateUrl: './frame.component.html',
  styleUrl: './frame.component.css',
  standalone:true
})




export class FrameComponent {

  materialArray:FrameMaterial[]=Object.values(FrameMaterial);

  material:FrameMaterial=FrameMaterial.None;


  setMaterial(mat:FrameMaterial):void{
    this.material=mat;
  }

  selectedOption: string = '';
  options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ];
}


