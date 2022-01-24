import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { CategoryComponent } from "./category/category.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component : AboutComponent},
    { path: 'category', component: CategoryComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}