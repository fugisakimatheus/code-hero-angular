import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { GetCharacterReturnType } from '../models/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  searchCharacters(
    name: string,
    limit: number,
    offset: number
  ): Observable<GetCharacterReturnType> {
    const nameStartsWith = name ? `&nameStartsWith=${name}` : '';
    return this.http
      .get<GetCharacterReturnType>(
        `${environment.apiUrl}/characters?apikey=${environment.apiKey}${nameStartsWith}&limit=${limit}&offset=${offset}`
      )
      .pipe(
        (response) => response,
        (error) => error
      );
  }

  getCharacterById(id: number): Observable<GetCharacterReturnType> {
    return this.http.get<GetCharacterReturnType>(
      `${environment.apiUrl}/characters/${id}?apikey=${environment.apiKey}`
    );
  }
}
