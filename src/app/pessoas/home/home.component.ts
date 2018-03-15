import { Component, OnInit, ViewChild } from '@angular/core';
import { PessoaService } from '../pessoa.service';
import { FormControl } from '@angular/forms';
import { Pessoa } from '../model';
import { ConfirmationService } from 'primeng/api';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pessoas = [];

  pessoa = new Pessoa();

  @ViewChild('tabela') grid;
  constructor(private pessoaService: PessoaService,
  private confirmationService: ConfirmationService,
  private toastr: ToastrService) {
   }


  listarPessoas() {
    this.pessoaService.getPessoas()
    .then(data => this.pessoas = data);
    

  }

  ngOnInit() {
    this.listarPessoas();
  }


  confirmarExclusao(pessoa: any) {

    this.confirmationService.confirm({
      message:'Tem certeza que deseja excluir?',
      accept: () => {
        this.excluir(pessoa);
      }
    });

  }



  excluir(pessoa: any) {
    this.pessoaService.excluirPessoa(pessoa.id)
    .then(() => {
      this.toastr.success('Usuario excluído com sucesso!');
      if (this.grid.first === 0) {
          this.listarPessoas();
      }  else {
      this.grid.first = 0 ;
      }
    });
  }


  salvar(form: FormControl) {

    console.log(this.pessoa);
   this.pessoaService.salvarPessoa(this.pessoa)
   .then(() => {
      console.log('pessoa adicionada com sucesso');
      this.toastr.success('Usuario adicionado com sucesso!');
      form.reset();
      this.listarPessoas();
      this.pessoa = new Pessoa();
   });
  }

}
