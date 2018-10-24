import { LoginService } from './login/login.service';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import { AppComponent } from './app.component';
import {  ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { ToastyModule } from 'ng2-toasty';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpModule } from '@angular/http';
import { MiniaturasPesquisaComponent } from './miniaturas/miniaturas-pesquisa/miniaturas-pesquisa.component';
import { MiniaturaCadastroComponent } from './miniaturas/miniatura-cadastro/miniatura-cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouteConfigLoadEnd, Router, RouterModule } from '@angular/router'
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './login/auth.guard';
import {TableModule} from 'primeng/table';
import {SliderModule} from 'primeng/slider';
import {DropdownModule} from 'primeng/dropdown';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import { MiniaturaControleComponent } from './miniaturas/miniatura-controle/miniatura-controle.component';
const routes: Routes = [
  { path: 'inicio', component:HomeComponent},
  { path: 'miniaturas', component: MiniaturasPesquisaComponent},
  { path: 'miniaturas/novo', component: MiniaturaCadastroComponent},
  { path: 'controle', component: MiniaturaControleComponent},
  { path: 'login', component:LoginComponent},
  {path: '', redirectTo:"inicio", pathMatch:"full"},
  
];

@NgModule({
  declarations: [
    AppComponent,
    MiniaturasPesquisaComponent,
    NavbarComponent,
    MiniaturaCadastroComponent,
    HomeComponent,
    LoginComponent,
    MiniaturaControleComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TableModule,
    SliderModule,
    DropdownModule,
    DialogModule,
    MultiSelectModule,
    TooltipModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    ToastyModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [ConfirmationService,LoginService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
