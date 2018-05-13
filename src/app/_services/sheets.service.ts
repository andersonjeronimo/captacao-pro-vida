import { Injectable } from '@angular/core';
import { Response, Headers, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import { Captacao } from '../_models/Captacao';

@Injectable()
export class SheetsService {
  constructor(private http: HttpClient) {}

  private spreadsheetID = '1Xo3Je6cZ8GPqdyr13tWW6N8If3EznWcX5HH1uPyENXc';

  private error = '';

  private spreadsheetsUrl = `https://spreadsheets.google.com/feeds/list/${this.spreadsheetID}/default/public/values?alt=json`;

  getSpreadsheetsData(): Observable<any[]> {
    return this.http
      .get(this.spreadsheetsUrl)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    const data = res;
    return data['feed']['entry']; // || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
