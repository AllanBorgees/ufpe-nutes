import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Pessoa } from './model';
import * as moment from 'moment';

@Injectable()
export class PessoaService {

  private urlBase = 'http://localhost:8080/pessoa';

  constructor(private http: Http) {

   }

   getPessoas(): Promise<any> {
     return this.http.get(`${this.urlBase}/listar`)
     .toPromise()
     .then(response =>{
       console.log(response.json());
       return response.json();
     });
    }// response.json());
     
  // }

   excluirPessoa(id: number): Promise<any> {
    return this.http.delete(`${this.urlBase}/remover/${id}`)
    .toPromise()
    .then(() => null);
  }

  salvarPessoa(pessoa: Pessoa): Promise<Pessoa> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.urlBase}/salvar`, JSON.stringify(pessoa), {headers })
    .toPromise()
    .then(response => response.json());
  }

  buscarPessoaById(id:number): Promise<Pessoa>{
    return this.http.get(`${this.urlBase}/buscar/${id}`)
    .toPromise()
    .then(response =>{
      const pessoa = response.json() as Pessoa;
      this.converterStringsToDate([pessoa]);
      return pessoa;
    });
  }
  atualizarPessoa(pessoa: Pessoa): Promise<Pessoa> {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.urlBase}/atualizar`, JSON.stringify(pessoa), {headers })
    .toPromise()
    .then(response => response.json());
  }

  converterStringsToDate(pessoas : Pessoa[]){


    for(const pessoa of pessoas){
      console.log("sem converteeeeeeeeer");
      console.log(pessoa.dataAniversario);
    
      let data = new Date(pessoa.dataAniversario);  
      pessoa.dataAniversario = moment(data, "DD/MM/YYYY").toDate();
     // pessoa.dataAniversario =  moment(pessoa.dataAniversario).format('DD/MM/YYYY');
     

      if(pessoa.dataAniversario){
        console.log("sem converteeeeeeeeer dentro do if");
        let data = new Date(pessoa.dataAniversario);  
        pessoa.dataAniversario = moment(data, "DD/MM/YYYY").toDate();
          
      // pessoa.dataAniversario = moment(pessoa.dataAniversario,'DD-MM-YYYY').toDate();
        // console.log("aniversaaaaaaaaario");
      //   console.log(pessoa.dataAniversario);
         
      }

    }

  }

}
