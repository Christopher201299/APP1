import { Component } from '@angular/core';
import {}from '@angular/common/http';
import { serviciosService } from '../../../servicios.servis'
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent {
 tiendaList: any[]=[];


 constructor(private SVC:serviciosService, private router:Router){
  this.SVC.get().subscribe ((result:any)=>{
    this.tiendaList=result 
  })
 }

}