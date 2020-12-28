import ApiService from '../apiservices';

class UsuarioService extends ApiService{

    constructor(){
        super('/user');
    }

    autenticar(credenciais){
        return this.post('/authenticate', credenciais);
    }

    UsuarioLogado(id){
        return this.get(`/${id}`);
    }

    salvar(usuario){
        return this.post('/', usuario);
    }

    atualizar(usuario){
        return this.put(`/${usuario.id}`, usuario);
    }

    deletar(id){
        return this.delete(`/${id}`)
    }




}
export default UsuarioService;