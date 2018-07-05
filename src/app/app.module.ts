import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/components/inputtext/inputtext';
import { AppComponent } from './app.component';
import {  ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';

import { NavbarComponent } from './navbar/navbar.component';
import { HttpModule } from '@angular/http';
import { MiniaturasPesquisaComponent } from './miniaturas/miniaturas-pesquisa/miniaturas-pesquisa.component';
import { MiniaturaService } from './miniaturas/miniatura.service';
import { MiniaturaCadastroComponent } from './miniaturas/miniatura-cadastro/miniatura-cadastro.component';


@NgModule({
  declarations: [
    AppComponent,
    MiniaturasPesquisaComponent,
    NavbarComponent,
    MiniaturaCadastroComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    HttpModule
  ],
  providers: [MiniaturaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
