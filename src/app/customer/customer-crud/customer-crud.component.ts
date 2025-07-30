import { HttpClient } from '@angular/common/http';
import { Component ,ViewChild,ElementRef, AfterViewInit, OnInit} from '@angular/core';
import { Customer } from '../../model/customer/Customer';
import { CustomerService } from '../../service/CustomerService';

@Component({
  selector: 'app-customer-crud',
  imports: [],
  templateUrl: './customer-crud.component.html',
  styleUrl: './customer-crud.component.css'
})
export class CustomerCrudComponent implements AfterViewInit {

  
  constructor(private http: HttpClient,private customerService:CustomerService) {
  
  }
  
  

  @ViewChild('txtId') txtId!:ElementRef;
  txtIdValue:string='';

  @ViewChild('txtName') txtName!:ElementRef;
  txtNameValue:string='';

  @ViewChild('txtAddress') txtAddress!:ElementRef;
  txtAddressValue:string='';

  @ViewChild('txtTpNo') txtPhone!:ElementRef;
  txtTpNoValue:string='';

  @ViewChild('txtEmail') txtEmail!:ElementRef;
  txtEmailValue:string='';

  @ViewChild('txtNic') txtNic!:ElementRef;
  txtNicValue:string='';

  @ViewChild('regDateH1') regDateH1 !:ElementRef;

  @ViewChild('regDate') regDate!:ElementRef;

  @ViewChild('btnSearch') btnSearch!:ElementRef;

  @ViewChild('btnUpdate') btnUpdate!:ElementRef;

  @ViewChild('btnAdd') btnAdd !:ElementRef;

  @ViewChild('lblId') lblId !:ElementRef;
  
  @ViewChild('lblName') lblName !:ElementRef;

  @ViewChild('lblAddress') lblAddress !:ElementRef;

  @ViewChild('lblEmail') lblEmail !:ElementRef;

  @ViewChild('lblNic') lblNic !:ElementRef;

  @ViewChild('lblTpNo') lblTpNo !:ElementRef;

  @ViewChild('btnSaveUpdate') btnSaveUpdate !:ElementRef;

  @ViewChild('btnSaveCustomer') btnSaveCustomer!:ElementRef;

  regDateTxt:string='';

 

  ngAfterViewInit(): void {
    this.btnSearch.nativeElement.addEventListener('click',()=>{  
      this.search();   
    });

    this.btnUpdate.nativeElement.addEventListener('click',()=>{
      if (this.txtPhone.nativeElement.value!='') {
        this.disableTxtId();
        this.enableAll();
        this.enableUpdate();
        this.disableSave();
      }
    });

    this.btnSaveUpdate.nativeElement.addEventListener('click',()=>{
      this.upate();
    });

    this.btnAdd.nativeElement.addEventListener('click',()=>{
        this.clearAll();
        this.disableTxtId();
        this.enableAll();
        this.enableSave();
        this.disableUpdate();
        
    });

    this.btnSaveCustomer.nativeElement.addEventListener('click',()=>{
      if (this.txtPhone.nativeElement.value!=''){
        this.add();
      }  
    });

  }  
  
  

  search():void{
    
    let itemRegex = /^CUS-\d+$/;
    this.txtIdValue=this.txtId.nativeElement.value;
    if(itemRegex.test(this.txtIdValue.toUpperCase())){
      this.customerService.searchCustomer(this.getCustomerId(this.txtIdValue)).subscribe(res=>{          
        this.enableTxtId();
        this.txtName.nativeElement.value=res.name;  
        this.txtAddress.nativeElement.value=res.address;
        this.txtPhone.nativeElement.value=res.tpNo;
        this.txtEmail.nativeElement.value=res.email;
        this.txtNic.nativeElement.value=res.nic;
        this.regDateTxt=new Date(res.registeredDate).toLocaleDateString();
        this.disableAll();
      });
    }
  }

  upate():void{
    this.customerService.customerUpdate(new Customer(this.getCustomerId(this.txtId.nativeElement.value),this.txtName.nativeElement.value,this.txtAddress.nativeElement.value,this.txtPhone.nativeElement.value,this.txtEmail.nativeElement.value,this.txtNic.nativeElement.value,new Date(this.regDateTxt))).subscribe(res=>{

    });
    this.clearAll();
    this.enableTxtId();
    this.disableAll();
    this.disableUpdate();
  }



  add():void{
    
    this.customerService.customerAdd(new Customer(null,this.txtName.nativeElement.value,this.txtAddress.nativeElement.value,this.txtPhone.nativeElement.value,this.txtEmail.nativeElement.value,this.txtNic.nativeElement.value,null)).subscribe(res=>{
      
    });
    this.clearAll();
    this.enableTxtId();
    this.clearAll();
    this.disableSave();
  }



  getCustomerId(cusId:string):number{
    return parseInt(cusId.split('-')[1]);
  }

  disableTxtId():void{
    this.txtId.nativeElement.disabled=true;
    this.lblId.nativeElement.classList.add('up');
  }

  enableTxtId(){
    this.txtId.nativeElement.disabled=false;
    this.lblId.nativeElement.classList.remove('up');  
  }

  disableAll():void{
    this.txtName.nativeElement.disabled=true;
    this.txtAddress.nativeElement.disabled=true;
    this.txtEmail.nativeElement.disabled=true;
    this.txtNic.nativeElement.disabled=true;
    this.txtPhone.nativeElement.disabled=true;

    this.lblName.nativeElement.classList.add('up');
    this.lblAddress.nativeElement.classList.add('up');
    this.lblNic.nativeElement.classList.add('up');
    this.lblTpNo.nativeElement.classList.add('up');
    this.lblEmail.nativeElement.classList.add('up');
  }

  enableAll():void{
    this.txtName.nativeElement.disabled=false;
    this.txtAddress.nativeElement.disabled=false;
    this.txtEmail.nativeElement.disabled=false;
    this.txtNic.nativeElement.disabled=false;
    this.txtPhone.nativeElement.disabled=false;

    this.lblName.nativeElement.classList.remove('up');
    this.lblAddress.nativeElement.classList.remove('up');
    this.lblNic.nativeElement.classList.remove('up');
    this.lblTpNo.nativeElement.classList.remove('up');
    this.lblEmail.nativeElement.classList.remove('up');
  }

  clearAll(){
    this.txtId.nativeElement.value='';
    this.txtName.nativeElement.value='';
    this.txtAddress.nativeElement.value='';
    this.txtPhone.nativeElement.value='';
    this.txtNic.nativeElement.value='';
    this.txtEmail.nativeElement.value='';
    this.regDateTxt='';
  }



  disableUpdate():void{
    this.btnSaveUpdate.nativeElement.classList.add('hidden');
  }

  enableUpdate():void{
    this.btnSaveUpdate.nativeElement.classList.remove('hidden');
  }

  disableSave():void{
    this.btnSaveCustomer.nativeElement.classList.add('hidden');
  }

  enableSave():void{
    this.btnSaveCustomer.nativeElement.classList.remove('hidden');
  }

}
