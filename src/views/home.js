import React from 'react';

import api from 'axios';

class Home extends React.Component {

    state = {
        usuario: []
    }

    componentDidMount(){
        api.get('http://localhost:3002/user/4u1etm')
            .then(response => {
                this.setState({usuario: response.data})
            }).catch(error =>{
                console.error(error.data)
            })
    }
    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo! - {this.state.usuario.fullname}</h1>
                <p className="lead">Esse é seu sistema de gerenciamento.</p>
                {/* <p className="lead">Seu saldo para o mês atual é de R$ 5.325,21</p> */}
                <hr className="my-4"/>
                    <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#/cadastrousuario" role="button"><i
                            className="fa fa-users"></i> Cadastrar Usuário</a>
                        <a className="btn btn-danger btn-lg" href="https://bootswatch.com/flatly/#" role="button"><i
                            className="fa fa-users"></i> Atualizar dados</a>
                    </p>
            </div>
        )
    }
}

export default Home;