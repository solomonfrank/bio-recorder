import  Model from './index';

class User extends Model {
    constructor (modelType ='users') {
        super(modelType);

    }
    
    static init (){
        return new User();
    }
    
}

export default User;