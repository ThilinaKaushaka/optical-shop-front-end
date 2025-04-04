import { Component } from '@angular/core';
import { ChainClaspType } from '../../../../util/item/chain/ChainClaspType';
import { ChainMaterial } from '../../../../util/item/chain/ChainMaterial';
import { ChainStyle } from '../../../../util/item/chain/ChainStyle';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-chain',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,NgFor],
  templateUrl: './chain.component.html',
  styleUrl: './chain.component.css'
})
export class ChainComponent {


  selectedClaspType: ChainClaspType = ChainClaspType.NONE;
  selectedMaterial: ChainMaterial = ChainMaterial.NONE;
  selectedStyle: ChainStyle = ChainStyle.NONE;


  claspTypeArray: ChainClaspType[] = Object.values(ChainClaspType);
  materialArray: ChainMaterial[] = Object.values(ChainMaterial);
  styleArray: ChainStyle[] = Object.values(ChainStyle);


  changeClaspType(claspType: ChainClaspType): void {
    this.selectedClaspType = claspType;
  }

  changeMaterial(material: ChainMaterial): void {
    this.selectedMaterial = material;
  }

  changeStyle(style: ChainStyle): void {
    this.selectedStyle = style;
  }


}
