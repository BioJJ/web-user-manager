import React from 'react';

import Card from '../components/card';
import FormGroup from '../components/FormGroup';

import UsuarioService from '../app/service/usuarioService';
import { mensagemSucesso, mensagemErro } from '../components/toastr';

class CadastroUsuario extends React.Component{

    state = {
        nome : '',
        username: '', 
        age: '',
        senha: '',
        senhaRepeticao : ''
    }

    constructor(){
        super();
        this.service = new UsuarioService();
    }

    validar(){
        const msgs =[];

        if(!this.state.nome){
            msgs.push("O campo Nome é obrigatório.")
        }
        else if(!this.state.username){
            msgs.push("O campo username é obrigatório.")
        }
        else if(!this.state.age){
            msgs.push("O campo Age é obrigatório.")
        }
        if(!this.state.senha || !this.state.senhaRepeticao){
            msgs.push('Digite a senha 2x.')

        }else if( this.state.senha !== this.state.senhaRepeticao ){
            msgs.push('As senhas não batem.')
        }     

        return msgs;
    }

    cadastrar = () => {
        const msgs =  this.validar();

        if(msgs && msgs.length>0){
            msgs.forEach( (msg, index)=>{
                mensagemErro(msg);
            });
            return false;
        }

        const usuario = {
            fullname: this.state.nome,
            username: this.state.username,
            age: this.state.age,
            password: this.state.senha
        }

        this.service.salvar(usuario)
        .then( response => {
            mensagemSucesso('Usuário cadastrado! Faça o login para acessar o sistema.')
            this.props.history.push('/login')
        }).catch(error => {
            mensagemErro(error.response.data)
        })

        console.log(this.state);

    }

    cancelar = () => {
        this.props.history.push('/login')
    }
    render(){
        return(

                <Card title="Cadastro de Usuario">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                        <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text" 
                                       id="inputNome" 
                                       className="form-control"
                                       name="nome"
                                       onChange={e => this.setState({nome: e.target.value})} />
                            </FormGroup>

                            <FormGroup label="Username: *" htmlFor="username">
                                <input type="text" 
                                       id="username"
                                       className="form-control"
                                       name="username"
                                       onChange={e => this.setState({username: e.target.value})} />
                            </FormGroup>

                            <FormGroup label="Age: *" htmlFor="age">
                                <input type="text" 
                                       id="age"
                                       className="form-control"
                                       name="age"
                                       onChange={e => this.setState({age: e.target.value})} />
                            </FormGroup>

                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password" 
                                       id="inputSenha"
                                       className="form-control"
                                       name="senha"
                                       onChange={e => this.setState({senha: e.target.value})} />
                            </FormGroup>

                            <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                <input type="password" 
                                       id="inputRepitaSenha"
                                       className="form-control"
                                       name="senha"
                                       onChange={e => this.setState({senhaRepeticao: e.target.value})} />
                            </FormGroup>

                            <button onClick={this.cadastrar} type="button" className="btn btn-success">
                                <i className="pi pi-save"></i> Salvar
                            </button>
                            <button  onClick={this.cancelar} type="button" className="btn btn-danger">
                                <i className="pi pi-times"></i> Cancelar
                            </button>
                            
                        </div>
                    </div>
                </div>
                </Card>
           
        )
    }
}

export default CadastroUsuario;