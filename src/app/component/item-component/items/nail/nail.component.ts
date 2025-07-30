import { Component, ElementRef, ViewChild } from '@angular/core';
import { NailMaterial } from '../../../../util/item/nail/NailMaterial';
import { NailThreadType } from '../../../../util/item/nail/NailThreadType';
import { NailUsage } from '../../../../util/item/nail/NailUsage';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NailDto } from '../../../../model/item/items/NailDto';

@Component({
  selector: 'app-nail',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,NgFor],
  templateUrl: './nail.component.html',
  styleUrl: './nail.component.css'
})
export class NailComponent {
  @ViewChild('txtNailID') nailId!:ElementRef;
  @ViewChild('txtSize') size!:ElementRef;



  isNutAndBolt:boolean=false;

  materialArray: NailMaterial[] = Object.values(NailMaterial);
  selectedMaterial: NailMaterial = NailMaterial.NONE;

  threadArray: NailThreadType[] = Object.values(NailThreadType);
  selectedTread: NailThreadType = NailThreadType.NONE;

  usageArray: NailUsage[] = Object.values(NailUsage);
  selectedUsage: NailUsage = NailUsage.NONE;

  itemId: number | null = null;


  nutAndBoltChange(event: Event) {
    this.isNutAndBolt = (event.target as HTMLInputElement).checked;
  }

  
  
  changeMaterial(material: NailMaterial): void {
    this.selectedMaterial=material;
  }

  changeThread(thread: NailThreadType): void {
    this.selectedTread=thread;
  }

  changeUsage(usage: NailUsage): void {
    this.selectedUsage=usage;
  }

  setNailValues(nailOb:NailDto): void {
    this.itemId = nailOb.itemId;
    this.nailId.nativeElement.value = `NAIL-${nailOb.id}`;
    this.size.nativeElement.value = nailOb.size;
    this.changeMaterial(nailOb.material??NailMaterial.NONE);
    this.changeThread(nailOb.threadType??NailThreadType.NONE);
    this.changeUsage(nailOb.usages??NailUsage.NONE);
    this.size.nativeElement.value=nailOb.size;
  }

  getNailValues(): NailDto {
    return new NailDto(
      this.nailId.nativeElement.value==''?null:parseInt(this.nailId.nativeElement.value.split('-')[1]),
      this.itemId,
      this.size.nativeElement.value,
      this.isNutAndBolt,
      this.selectedMaterial,
      this.selectedUsage,
      this.selectedTread
    );
  
  }

  

}
