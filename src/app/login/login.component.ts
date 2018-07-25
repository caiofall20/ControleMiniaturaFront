


import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Usuario } from './usuario.model';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario;
  exibirAlerta: boolean = false;
  loginForm: FormGroup
  constructor(private fb: FormBuilder,private loginService: LoginService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null,Validators.required],
      password: [null,Validators.required]
    })
    this.usuario = new Usuario;
  }

  autenticar(){
    this.usuario.email = this.loginForm.get("email").value;
    this.usuario.senha = this.loginForm.get("password").value;
    this.loginService.autenticar(this.usuario)
    .subscribe(usuario => {
      this.loginService.proximaPagina();
      this.loginService.autenticou = true;
    },(error:any)=>{
      this.exibirAlerta = true;
    })
  }

}
