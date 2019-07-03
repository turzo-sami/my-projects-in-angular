import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Message } from '../Libraries/Message';



@Injectable()
export class MasterService{

    constructor(private http: HttpClient) { }


	get(URL: string) : any{
		return this.http.get(URL.trim(), this.getHeaders());
	}

	post(URL: string, Body: any) {
		Message.clear();
		return this.http.post(URL.trim(), Body, this.getHeaders());
	}

	put(URL: string, Body: any) {
		Message.clear();
		return this.http.put(URL.trim(), Body, this.getHeaders());
	}

	delete(URL: string) {
		Message.clear();
		return this.http.delete(URL.trim(), this.getHeaders());
	}
	


    
	getHeaders() {
		const httpOptions = {
			headers: new HttpHeaders({
				'X-Requested-With': 'XMLHttpRequest',
				'Content-Type': 'application/json',
				"Authorization": this.getToken()
			})
		};
		return httpOptions;
	}


	getToken() {
        return "Bearer " + localStorage.getItem('token');
	}
	
}
