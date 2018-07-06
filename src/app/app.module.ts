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
const routes: Routes = [
  { path: 'miniaturas', component: MiniaturasPesquisaComponent },
  { path: 'miniaturas/novo', component: MiniaturaCadastroComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    MiniaturasPesquisaComponent,
    NavbarComponent,
    MiniaturaCadastroComponent,
    
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    HttpModule,
    FormsModule,
    ToastyModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
