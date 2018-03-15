import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../model';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PessoaService } from '../pessoa.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {

  pessoa = new Pessoa();
  constructor(private pessoaService : PessoaService,
  private route : ActivatedRoute,
  private toastr: ToastrService) { }

  ngOnInit() {

    const id_pessoa = this.route.snapshot.params['id'];
    if(id_pessoa){
      this.carregarPessoa(id_pessoa);
    }
  }

  atualizarPessoa(form: FormControl){
    this.pessoaService.atualizarPessoa(this.pessoa)
    .then(()=>{
       console.log('pessoa atualizadacom sucesso');
       this.toastr.success('Usuario atualizado com sucesso!');
  //     this.pessoa = new Pessoa();
    });  }

  carregarPessoa(id:number){
    this.pessoaService.buscarPessoaById(id)
    .then(pessoa =>{
      this.pessoa=pessoa;
    });

  }

}
