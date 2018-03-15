import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DataTableModule} from 'primeng/datatable';
import {TooltipModule} from 'primeng/tooltip';
import { NavbarComponent } from './navbar/navbar.component';
import {CalendarModule} from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pessoas/home/home.component';
import { PessoaService } from './pessoas/pessoa.service';
import { HttpModule } from '@angular/http';
// tslint:disable-next-line:import-spacing
import { ConfirmDialogModule } from  'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import { EditarPessoaComponent } from './pessoas/editar-pessoa/editar-pessoa.component';
import { Routes, RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    EditarPessoaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    DataTableModule,
    TooltipModule,
    CalendarModule,
    FormsModule,
    HttpModule,
    ConfirmDialogModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    ButtonModule
  ],
  providers: [PessoaService,
  ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
