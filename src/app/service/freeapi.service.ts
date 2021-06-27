import { HttpClient } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class freeApiService{

constructor(private httpClient: HttpClient){ }

    getStudents(): Observable<any> {
        return this.httpClient.get("https://jsonplaceholder.typicode.com/todos")
    }
}