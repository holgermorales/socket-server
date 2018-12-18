import {Usuario} from "./usuario";

export class UsuariosLista {
    private lista: Array<Usuario> = [];

    constructor() {
    }

    //Agregar un usuario
    public agregar(usuario: Usuario) {
        this.lista.push(usuario);
        console.log(this.lista);
        return usuario;
    }

    public actualizarNombre(id: string, nombre: string) {
        for (let usuario of this.lista) {
            if (usuario.id === id) {
                usuario.nombre = nombre;
                break;
            }
        }
        console.log("Clientes actualizados", this.lista);
    }

    //Obtener lista de usuarios
    public getLista(): Usuario[] {
        return this.getLista();
    }

    //
    public getUsuario(id: string) {

        return this.lista.find(usuario => usuario.id === id);
        /*
        return this.lista.find(usuario => {
            return usuario.id === id;
        });
        */
    }

    //Obtener usuarios en una sala particular
    public getUsuarioEnSalar(sala: string) {
        return this.lista.filter(usuario => usuario.sala === sala);

        /*
        return this.lista.filter(usuario => {
            return usuario.sala === sala;
        });
        */
    }

    //Borrar usuario
    public borrarUsuario(id: string) {
        const tmpUsuario = this.getUsuario(id);
        this.lista = this.lista.filter(usuario => usuario.id != id);
        console.log(this.lista);
        return this.lista;
    }

}