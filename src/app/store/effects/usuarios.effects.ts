import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, of } from 'rxjs';
import { catchError } from 'rxjs';
import { mergeMap } from 'rxjs';
import { tap } from 'rxjs';
import { UsuarioService } from 'src/app/services/usuario.service';
import * as usuariosActions from '../actions/usuarios.actions';


@Injectable()
export class UsuariosEffects {

  constructor(
    private actions$: Actions,
    private usuarioService: UsuarioService
   ) {}

   cargarUsuarios$ = createEffect(
    () => this.actions$.pipe(
      ofType( usuariosActions.cargarUsuarios ),
      mergeMap(
        () => this.usuarioService.getUsers()
              .pipe(
                    map( users => usuariosActions.cargarUsuariosSuccess( { usuarios: users } ) ),
                    catchError( err => of (usuariosActions.cargarUsuariosError( { payload: err } )) )
                 )
              )
      )
   );

}
