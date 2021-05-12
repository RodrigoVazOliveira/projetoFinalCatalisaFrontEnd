import axios from "axios";
import Login from '../models/usuario.dto';

export default class UsuarioService{autenticar(nomeCompleto, email, senha, nivelDeAcesso) {
                                    let usuarioDto = new Usuario(nomeCompleto, email, senha, nivelDeAcesso)
                                    axios.post('http://localhost:8080/usuario', JSON.stringify(usuarioDto), {
                                                          headers: {
                                                              'Content-Type':'application/json',
                                                              'Access-Control-Allow-Origin': '*',
                                                              'Access-Control-Allow-Methods': 'POST, PUT, DELETE, OPTIONS, GET'
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