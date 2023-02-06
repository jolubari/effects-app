import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { AppState } from '../../store/app.reducer';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from '../../store/actions/usuarios.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnDestroy {

  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;

  constructor(
    // private usuarioService: UsuarioService
    private store: Store<AppState>
  ){}

  ngOnInit(): void {
    // this.usuarioService.getUsers().subscribe( data =>  {
    //   this.usuarios = data;
    // });

    this.store.dispatch( cargarUsuarios() );
    this.store.select('usuarios').subscribe( ({users, loading, error}) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    })
  }

  ngOnDestroy(): void {
  }

}
