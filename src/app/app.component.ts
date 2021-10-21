import { Component } from '@angular/core';
import { CepServiceService } from './cep-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CepAngular';

  constructor(private cepsService: CepServiceService){}
   consultaCep({ valor, form }: { valor: string; form: { setValue: (arg0: {}) => void; }; }){
      this.cepsService.buscar(valor).subscribe((dados) => this.populaForm(dados, form));
}

populaForm(dados: any, form: { setValue: (arg0: {}) => void; }){
  form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      uf: dados.uf
  })
}

}
