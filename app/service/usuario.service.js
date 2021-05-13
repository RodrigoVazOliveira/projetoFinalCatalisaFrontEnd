import axios from "axios";
export default class UsuarioService{
    cadastrarNovoUsuario(usuarioDto) {
        return axios.post('http://localhost:8080/usuarios/', JSON.stringify(usuarioDto), {
            headers: {
                'Content-Type':'application/json',
            }
        });
    }
};