import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pic } from '../models/pic.interface';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PicsService {

    constructor(private http: HttpClient) { }

    get(): Observable<Pic[]> {
        return this.http.get<Pic[]>('https://jsonplaceholder.typicode.com/photos');
    }

    delete(id: number) {
        return this.http.delete(`https://jsonplaceholder.typicode.com/photos/${id}`);
    }
}
