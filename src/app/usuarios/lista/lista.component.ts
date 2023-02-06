import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit, OnDestroy {

  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService
  ){}

  ngOnInit(): void {
    this.usuarioService.getUsers().subscribe( data =>  {
      this.usuarios = data;
    });
  }

  ngOnDestroy(): void {
  }

}
