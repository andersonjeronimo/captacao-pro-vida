import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { SheetsService } from '../_services/sheets.service';
// import { Captacao } from '../_models/Captacao';

@Component({
  selector: 'app-captacao',
  templateUrl: './captacao.component.html',
  styleUrls: ['./captacao.component.css']
})
export class CaptacaoComponent implements OnInit {
  // private captacoes: Captacao[];
  public data: any[];
  public spreadsheetData: any[];
  private error = '';

  constructor(private service: SheetsService) {}

  ngOnInit() {
    // TODO: listar resultados deverá gravá-los no Firebase database, que será a base de dados.
    //  ... os dados da planilha deverão ser deletados.
    this.listResults();
    // delete rows com Sheets API--> https://developers.google.com/sheets/api/samples/rowcolumn
  }

  listResults() {
    this.service
      .getSpreadsheetsData()
      .subscribe(
        data => {
          this.spreadsheetData = data,
          console.log(this.spreadsheetData[0]['gsx$nome']['$t']);
        },
        error => (this.error = <any>error)
      );
  }
}
