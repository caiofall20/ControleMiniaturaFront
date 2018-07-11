import { BrowserModule } from '@angular/platform-browser';
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
import { FormsModule } from '@angular/forms';
import { Routes, RouteConfigLoadEnd, Router, RouterModule } from '@angular/router'
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  { path: 'miniaturas', component: MiniaturasPesquisaComponent },
  { path: 'miniaturas/novo', component: MiniaturaCadastroComponent },
  { path: 'inicio', component: HomeComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    MiniaturasPesquisaComponent,
    NavbarComponent,
    MiniaturaCadastroComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    HttpModule,
    FormsModule,
    ToastyModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
