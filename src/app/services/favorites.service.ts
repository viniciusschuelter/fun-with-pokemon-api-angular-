import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

import {from, Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Comic} from '../models/interfaces';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  uid = this.auth.getCurrUserUid();

  constructor(
    private Afirestore: AngularFirestore,
    private auth: AuthService
  ) {
  }


  public addNewFavorite(comic: Comic): Observable<any> {
    const uid = this.auth.getCurrUserUid();
    const favoriteWithUser = {...comic, uid};
    return from(
      this.Afirestore.collection(`favorites`).add(favoriteWithUser)
    ).pipe(catchError(this.handleErrors));
  }

  public getAllFavorites(): Observable<any[]> {
    const uid = this.auth.getCurrUserUid();
    return from(
      this.Afirestore.collection('favorites', (ref) =>
        ref.where('uid', '==', uid)
      ).valueChanges()
    ).pipe(catchError(this.handleErrors));
  }

  public removeFavorite(favoriteId: string): Observable<any> {
    return from(this.Afirestore.doc(`favorites/${favoriteId}`).delete()).pipe(
      catchError(this.handleErrors)
    );
  }

  private handleErrors(error: HttpErrorResponse) {
    const err = 'Something wrong!';
    if (error) {
      return throwError(
        error.error?.message ? error.error?.message : error.message
      );
    } else {
      return throwError(err);
    }
  }
}