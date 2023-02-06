import { createAction, props } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const cargarUsuario = createAction(
  '[usuario] Cargar usuario',
  props<{ id: string }>());

export const cargarUsuarioSuccess = createAction(
  '[usuario] Cargar usuario Success',
  props<{ usuario: Usuario }>());

export const cargarUsuarioError = createAction(
  '[usuario] Cargar usuario Error',
  props<{ payload: any }>());
