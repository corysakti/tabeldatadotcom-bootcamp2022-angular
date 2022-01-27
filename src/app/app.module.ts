import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DeptindukComponent } from './deptinduk/deptinduk.component';
import { DeptchildComponent } from './deptchild/deptchild.component';
import { ProductComponent } from './product/product.component';
import { ProductChildComponent } from './product-child/product-child.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CategoryComponent,
    AddDepartmentComponent,
    DeptindukComponent,
    DeptchildComponent,

    ProductComponent,
     ProductChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
