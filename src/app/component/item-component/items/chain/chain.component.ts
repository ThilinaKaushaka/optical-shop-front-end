import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChainClaspType } from '../../../../util/item/chain/ChainClaspType';
import { ChainMaterial } from '../../../../util/item/chain/ChainMaterial';
import { ChainStyle } from '../../../../util/item/chain/ChainStyle';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ChainDto } from '../../../../model/item/items/ChainDto';

@Component({
  selector: 'app-chain',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,NgFor],
  templateUrl: './chain.component.html',
  styleUrl: './chain.component.css'
})
export class ChainComponent {
  @ViewChild('txtChainId') txtChainId !:ElementRef;
  @ViewChild('txtChainLength') txtChainLength !:ElementRef;

  selectedClaspType: ChainClaspType = ChainClaspType.NONE;
  selectedMaterial: ChainMaterial = ChainMaterial.NONE;
  selectedStyle: ChainStyle = ChainStyle.NONE;


  claspTypeArray: ChainClaspType[] = Object.values(ChainClaspType);
  materialArray: ChainMaterial[] = Object.values(ChainMaterial);
  styleArray: ChainStyle[] = Object.values(ChainStyle);

  itemId: number | null = null;


  changeClaspType(claspType: ChainClaspType): void {
    this.selectedClaspType = claspType;
  }

  changeMaterial(material: ChainMaterial): void {
    this.selectedMaterial = material;
  }

  changeStyle(style: ChainStyle): void {
    this.selectedStyle = style;
  }

  setChainValue(chainDto:ChainDto):void{
    this.itemId=chainDto.itemId;
    this.txtChainId.nativeElement.value=`CHAIN-${chainDto.id}`;
    this.txtChainLength.nativeElement.value=chainDto.length;
    this.changeClaspType(chainDto.claspType!=null?chainDto.claspType:ChainClaspType.NONE);
    this.changeMaterial(chainDto.material!=null?chainDto.material:ChainMaterial.NONE);
    this.changeStyle(chainDto.style!=null?chainDto.style:ChainStyle.NONE);
  }

  getChainValue():ChainDto{
    return new ChainDto(
      parseInt(this.txtChainId.nativeElement.value.split('-')[1]),
      this.itemId,
      this.selectedMaterial,
      this.selectedStyle,
      this.selectedClaspType,
      this.txtChainLength.nativeElement.value
    );
  }



}
