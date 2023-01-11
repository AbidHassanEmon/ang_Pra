import { Component } from '@angular/core';
import { Router } from '@angular/router'; 
import{FormGroup,FormControl} from '@angular/forms';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  public res:any=null;
  addproduct =new FormGroup(
    {
      Name :new FormControl(''),
      Price :new FormControl(''),
      Description:new FormControl(''),
      Quantity:new FormControl('')
    }
  )
constructor(private _service:ProductserviceService,private route:Router){}
  AddProduct()
  {
     this._service.AddProduct(this.addproduct.value).subscribe((result)=>{this.res=result;});
     if(this.res)
     {
      this.addproduct.reset();
      this.route.navigate(['index']);
     }
  }

}
