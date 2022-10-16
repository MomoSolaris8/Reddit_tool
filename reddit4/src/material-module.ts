import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from "@angular/material/table";


@NgModule({
  exports:[
   MatTableModule,
   MatPaginatorModule,
   MatSortModule
  ]
})
export class MaterialModule {
    
 }
