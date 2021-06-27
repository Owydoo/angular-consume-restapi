import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { freeApiService } from './service/freeapi.service';
import { Todo } from './classes/todo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  readonly ROOT_URL = "https://jsonplaceholder.typicode.com";

  posts: any;
  listStudents:Todo[] | undefined;

  constructor(private http: HttpClient, private _freeApiService : freeApiService) {}
  
  public getTodos(){
    return this.http.get(this.ROOT_URL + "todos")
  }

  ngOnInit(){
    this._freeApiService.getStudents().subscribe(
      data=>{
        this.listStudents = data;
      }
    );
  }
  
}
