import { Component } from '@angular/core';
import { ProductserviceService } from '../productservice.service';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
products:any;
  constructor(private _service:ProductserviceService){
    
  }
  ngOnInit()
  {
    this._service.getProduct().subscribe((data)=>{
    this.products=data}); 
  }

  DeleteProduct(id: any)
  {
      this._service.DeleteProduct(id).subscribe((result)=>{console.log(result);})
      this.ngOnInit();
  }

}
