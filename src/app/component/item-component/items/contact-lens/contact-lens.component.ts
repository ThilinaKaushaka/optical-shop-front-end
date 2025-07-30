import { Component } from '@angular/core';
import { ContactLensDuration } from '../../../../util/item/contact-lens/ContactLensDuration';
import { ContactLensMaterial } from '../../../../util/item/contact-lens/ContactLensMaterial';
import { ContactLensType } from '../../../../util/item/contact-lens/ContactLensType';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-contact-lens',
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule,NgFor],
  templateUrl: './contact-lens.component.html',
  styleUrl: './contact-lens.component.css',
  standalone:true
})
export class ContactLensComponent {



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
}
