import axios from "axios";
export default class UsuarioService{
    cadastrarNovoUsuario(usuarioDto) {
        axios.post('http://localhost:8080/usuarios/', JSON.stringify(usuarioDto), {
            headers: {
                'Content-Type':'application/json',

            }
        }).then(
            res => {
                console.log(res.headers);
            }
        ).catch(function(error) {
            console.log(error);
        });
    }
};