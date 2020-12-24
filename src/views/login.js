import React from 'react';

import Card from '../components/card';
import FormGroup from '../components/FormGroup';
import { withRouter } from 'react-router-dom'

class Login extends React.Component{

    state = {
        username: '',
        senha: ''
    }
    entrar = () =>{
        console.log('Username: ', this.state.username);
        console.log('Senha: ', this.state.senha);
    }

    prepareCadastrar = () => {
        this.props.history.push('/cadastroUsuario')
    }
    render(){
        return(
          
                <div className="row">
                    <div className="col-md-6" 
                    style={{position: 'relative', left: '300px'}}
                    >
                        <div className="bs-docs-section">
                            <Card title="Login">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="bs-component">
                                        <fieldset>
                                            <FormGroup label="Username: *" htmlFor="username">
                                                <input 
                                                    type="text" 
                                                    value= {this.state.username}
                                                    onChange={ e => this.setState({ username: e.target.value})}
                                                    className="form-control" 
                                                    id="username" 
                                                    // aria-describedby="emailHelp" 
                                                    placeholder="Digite o Username"
                                                />

                                            </FormGroup>

                                            <FormGroup label="Senha: *" htmlFor="password">
                                                <input type="password" 
                                                        value={this.state.senha}
                                                        onChange={e => this.setState({senha: e.target.value})}
                                                        className="form-control" 
                                                        id="password" 
                                                        placeholder="Password" />
                                            </FormGroup>

                                            <button onClick= {this.entrar} className="btn btn-success">
                                                Entrar
                                            </button>
                                            <button onClick={this.prepareCadastrar} className="btn btn-danger">
                                                Cadastrar
                                            </button>
                                        </fieldset>
                                    </div>
                                </div>
                            </div>
                            </Card>
                        </div>
                    </div>

                </div>
           
        )
    }
}


export default withRouter( Login );