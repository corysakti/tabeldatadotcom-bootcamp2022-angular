import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { CategoryComponent } from "./category/category.component";
import { AddDepartmentComponent } from "./add-department/add-department.component";
import { DeptindukComponent } from "./deptinduk/deptinduk.component";
import { ProductComponent } from "./product/product.component";


const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component : AboutComponent},
    { path: 'category', component: CategoryComponent},
    { path: 'departement', component: AddDepartmentComponent},
    { path: 'departement/:id', component: AddDepartmentComponent},
    { path: 'induk', component: DeptindukComponent},
    { path: 'product', component: ProductComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
    exports: [RouterModule]
})

export class AppRoutingModule {}