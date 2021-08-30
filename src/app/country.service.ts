import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService implements OnInit{
  
  // headers = new Headers();
  // requestOptions = {
  //   method: 'GET',
  //   headers: this.headers,
  //   redirect: 'follow'
  // }

  url="https://restcountries.eu/rest/v2/all";
  url2 = "https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json";

  ngOnInit(){
    // this.headers.append("X-CSCAPI-KEY","API_KEY");
  }
  constructor(private http:HttpClient) { }

  getnow(){
    return this.http.get(this.url);
  }
  // getusername(username:any){
  //    const body  : any = {username}
  //   return this.http.post('http://localhost:8000/mainapi/getusername/'+username,null) 
  //   // return this.http.post('http://localhost:8000/mainapi/getusername',body)                                                                                                                                            
  //  }
//   getusername(username:any){
//     console.log("username in frontend service======="+username);
//     const body = {"username":username}
//     // const body ={
//     //   userName : username
//     // }
//     // console.log("body==="+body);
//     // return this.http.post('http://localhost:8000/mainapi/getusername',username) 
//     // return this.http.post('http://localhost:8000/mainapi/getusername', { userName: 'Angular POST Request Example' }) 
//     // return this.http.post('http://localhost:8000/mainapi/getusername?username='+username,null) 
//     return this.http.post('http://localhost:8000/mainapi/getusername',body)                                                                                                                                            
//  }

getusername
(username:any): Observable<any> {
  const body={username};
  return this.http.post('http://localhost:8000/mainapi/getusername', body)
}

getdetails
(username:any): Observable<any> {
  const body={username};
  return this.http.post('http://localhost:8000/mainapi/getdetails', body)
}


setdetails
(): Observable<any> {
  
  return this.http.get('http://localhost:8000/mainapi/getDetailslist')
}




  //   getusername(username:any): Observable<any>{
  //     console.log("username in frontend service======="+username);
  //     // const body ={
  //     //   userName : username
  //     // }
  //     // console.log("body==="+body);
  //     return this.http.post('http://localhost:8000/mainapi/getusername',username) 
  //     // return this.http.post('http://localhost:8000/mainapi/getusername', { userName: 'Angular POST Request Example' }) 
  //     // return this.http.post('http://localhost:8000/mainapi/getusername?username='+username,null) 
  //     // return this.http.post('http://localhost:8000/mainapi/getusername',body)                                                                                                                                            
  //  }

  //  createLhc(data: any): Observable<any> {
  //   return this.http.post<ApiResponse>(`${this.baseUrl}order/createLhc`,data);
  // }
  //  getusername(){
  //  return this.http.get('http://localhost:8000/getusername')                                                                                                                                         
  // }
  getnow2(){
    return this.http.get(this.url2)
  }
}
