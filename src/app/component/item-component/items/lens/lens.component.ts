import { Component, ElementRef, ViewChild } from '@angular/core';
import { LensCoating } from '../../../../util/item/lens/LensCoating';
import { LensFinished } from '../../../../util/item/lens/LensFinished';
import { LensMaterial } from '../../../../util/item/lens/LensMaterial';
import { LensType } from '../../../../util/item/lens/LensType';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LensDto } from '../../../../model/item/items/LensDto';

@Component({
  selector: 'app-lens',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule
  ],
  templateUrl: './lens.component.html',
  styleUrls: ['./lens.component.css']
})
export class LensComponent {
  
  @ViewChild('txtLensId') lensId!: ElementRef;
  @ViewChild('txtLenAxis') txtLenAxis!: ElementRef;
  @ViewChild('txtLensPower') txtLensPower!: ElementRef;
  @ViewChild('txtLensCylinder') txtLensCylinder!: ElementRef;

  selectedCoating: LensCoating = LensCoating.NONE;
  coatingArray: LensCoating[] = Object.values(LensCoating);

  selectedFinished: LensFinished = LensFinished.NONE;
  finishedArray: LensFinished[] = Object.values(LensFinished);

  selectedMaterial: LensMaterial = LensMaterial.NONE;
  materialArray: LensMaterial[] = Object.values(LensMaterial);

  selectedType: LensType = LensType.NONE;
  typeArray: LensType[] = Object.values(LensType);

  itemId: number | null = null;

  changeLensMaterial(material:LensMaterial):void{
    this.selectedMaterial=material;
  }

  changeLensCoating(coating:LensCoating):void{
    this.selectedCoating=coating;
  }

  changeLensFinished(finished:LensFinished):void{
    this.selectedFinished=finished;
  }

  changeLensType(type:LensType):void{
    this.selectedType=type;
  }

  setLensValues(lensOb: LensDto): void {
    this.itemId = lensOb.itemId;
    this.lensId.nativeElement.value = `LENS-${lensOb.id}`;
    this.txtLenAxis.nativeElement.value = lensOb.axis;
    this.txtLensPower.nativeElement.value = lensOb.power;
    this.txtLensCylinder.nativeElement.value = lensOb.cylinder;
    this.changeLensMaterial(lensOb.material);
    this.changeLensCoating(lensOb.coating);
    this.changeLensFinished(lensOb.finished);
    this.changeLensType(lensOb.type);   
  }

  getLensValues(): LensDto {
    return new LensDto(
      this.lensId.nativeElement.value==''?null:parseInt(this.lensId.nativeElement.value.split('-')[1]),
      this.itemId,
      this.selectedType,
      this.selectedMaterial,
      this.selectedCoating,
      this.selectedFinished,
      parseFloat(this.txtLensPower.nativeElement.value),
      parseFloat(this.txtLensCylinder.nativeElement.value),
      parseInt(this.txtLenAxis.nativeElement.value)
    );
  }
}