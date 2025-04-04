import { Component } from '@angular/core';
import { NailMaterial } from '../../../../util/item/nail/NailMaterial';
import { NailThreadType } from '../../../../util/item/nail/NailThreadType';
import { NailUsage } from '../../../../util/item/nail/NailUsage';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-nail',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,NgFor],
  templateUrl: './nail.component.html',
  styleUrl: './nail.component.css'
})
export class NailComponent {

  isNutAndBolt:boolean=false;

  materialArray: NailMaterial[] = Object.values(NailMaterial);
  selectedMaterial: NailMaterial = NailMaterial.NONE;

  threadArray: NailThreadType[] = Object.values(NailThreadType);
  selectedTread: NailThreadType = NailThreadType.NONE;

  usageArray: NailUsage[] = Object.values(NailUsage);
  selectedUsage: NailUsage = NailUsage.NONE;



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

}
