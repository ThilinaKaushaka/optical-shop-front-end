import { Component, ElementRef, ViewChild } from '@angular/core';
import { ContactLensDuration } from '../../../../util/item/contact-lens/ContactLensDuration';
import { ContactLensMaterial } from '../../../../util/item/contact-lens/ContactLensMaterial';
import { ContactLensType } from '../../../../util/item/contact-lens/ContactLensType';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ContactLensDto } from '../../../../model/item/items/ContactLensDto';

@Component({
  selector: 'app-contact-lens',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,NgFor],
  templateUrl: './contact-lens.component.html',
  styleUrl: './contact-lens.component.css',
  standalone:true
})
export class ContactLensComponent {

  
  @ViewChild('txtContactLensId') contactLensId !: ElementRef;
  @ViewChild('txtWaterLv') waterLevel!:ElementRef;
  @ViewChild('txtPower') power !: ElementRef;
  @ViewChild('txtAxis') axis !: ElementRef;
  @ViewChild('txtBaseCur') baseCur !: ElementRef;
  @ViewChild('txtDiameter') diameter !: ElementRef;
  @ViewChild('txtCylinder') cylinder !: ElementRef;
  @ViewChild('txtColour') colour !: ElementRef;

  selectedDuration: ContactLensDuration = ContactLensDuration.NONE;
  durationArray: ContactLensDuration[] = Object.values(ContactLensDuration);

  
  selectedMaterial: ContactLensMaterial = ContactLensMaterial.NONE;
  materialArray: ContactLensMaterial[] = Object.values(ContactLensMaterial);

  
  selectedType: ContactLensType = ContactLensType.NONE;
  typeArray: ContactLensType[] = Object.values(ContactLensType);

  itemId: number | null = null;

  
  changeDuration(duration: ContactLensDuration): void {
    this.selectedDuration = duration;
  }

  changeMaterial(material: ContactLensMaterial): void {
    this.selectedMaterial = material;
  }

  changeType(type: ContactLensType): void {
    this.selectedType = type;
  }
  
  setContactLensValue(contactLensDto:ContactLensDto):void{
    this.contactLensId.nativeElement.value = contactLensDto.id;
    this.waterLevel.nativeElement.value = contactLensDto.waterContent;
    this.colour.nativeElement.value = contactLensDto.colour;
    this.power.nativeElement.value = contactLensDto.power;
    this.axis.nativeElement.value = contactLensDto.axis;
    this.baseCur.nativeElement.value = contactLensDto.baseCurve;
    this.diameter.nativeElement.value = contactLensDto.diameter;
    this.cylinder.nativeElement.value = contactLensDto.cylinder;
    this.changeDuration(contactLensDto.duration??ContactLensDuration.NONE);
    this.changeMaterial(contactLensDto.material??ContactLensMaterial.NONE);
    this.changeType(contactLensDto.type??ContactLensType.NONE);
    this.itemId = contactLensDto.itemId
  }

  getContactLensValues():ContactLensDto{
    return new ContactLensDto(
      this.contactLensId.nativeElement.value==''?null:parseInt(this.contactLensId.nativeElement.value),
      this.itemId,
      this.selectedType,
      this.selectedDuration,
      this.selectedMaterial,
      parseFloat(this.waterLevel.nativeElement.value),
      parseFloat(this.power.nativeElement.value),
      parseInt(this.axis.nativeElement.value),
      parseFloat(this.baseCur.nativeElement.value),
      parseFloat(this.diameter.nativeElement.value),
      parseFloat(this.cylinder.nativeElement.value),
      this.colour.nativeElement.value
    );

  }  


}
