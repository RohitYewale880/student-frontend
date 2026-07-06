import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Istd } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  BaseUrl: string = environment.StudentUrl
  updateUrl$ : Subject<boolean> = new Subject<boolean>()
  editStdObj$ : Subject<Istd> = new Subject<Istd>()
  constructor(
    private _http: HttpClient
  ) { }

  getstudents():Observable<any> {
    return this._http.get<any>(this.BaseUrl)
  }

  addStudent(std : Istd){
    return this._http.post<any>(this.BaseUrl, std)
  }

  removestudent(id : number){
    let deleteUrl = `${this.BaseUrl}/${id}`
    return this._http.delete<any>(deleteUrl)
  }

  updatestd(std : Istd){
    let updated_url = `${this.BaseUrl}/${std.id}`
    return this._http.patch<any>(updated_url, std)
  }
}
