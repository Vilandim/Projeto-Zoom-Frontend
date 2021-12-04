import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceCursosService {

  constructor(private http: HttpClient) { }

  apiUrlCategoryCourses = 'http://localhost:3333/api/categories'

  apiUrlCourses = 'http://localhost:3333/api/courses'

  apiUrlClasses = 'http://localhost:3333/api/classes'

// get single category data

getSingleData(id:any): Observable<any>{
  return this.http.get(`${this.apiUrlCategoryCourses}/${id}`)
}


// get all courses from a specific category

getAllCourses(): Observable<any> {
  return this.http.get(`${this.apiUrlCourses}`)
}

//get single course by id
getSingleCourse(id:any): Observable<any> {
  return this.http.get(`${this.apiUrlCourses}/${id}`)
}

//get classes
getClasses(): Observable<any>{
  return this.http.get(this.apiUrlClasses)
}

createCourse(data:any): Observable<any> {
  return this.http.post('http://localhost:3333/api/courses', data)
}

createClasses(data:any): Observable<any> {
  return this.http.post(this.apiUrlClasses, data)
}


}

