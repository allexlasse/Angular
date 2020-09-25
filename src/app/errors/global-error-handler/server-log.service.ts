import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerLog } from './server-log';

@Injectable({providedIn: 'root'})
export class ServerLogService{
    constructor(
        private http: HttpClient
    ){}

    log(serverLog: ServerLog){
        return this.http.post('http://localhost:7000/infra/log', serverLog);
    }
}