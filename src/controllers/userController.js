import User from '../db/model/User';
import  { respondWithSuccess } from '../helpers/responseHandler';

export const createUser = async (req, res) => {
    
    try {
        const { rows } = await User.init().insert( { ...req.body, created_at: new Date() });
        return respondWithSuccess(res, 201, 'user successfully recorded', rows)
        
    } catch (err) {
      console.log(err.stack)
        return respondWithSuccess(res, 500, err.stack);
    }
  
}

export const editUser = async (req, res) => {
    
        const { userId } = req.params;
        const { rows } = await User.init().update(userId, req.body).catch( err => {
            return respondWithSuccess(res, 500, 'Internal server error');
        });
        return respondWithSuccess(res, 202, 'user successfully updated', rows)
        }


export const deleteUser = async (req, res) => {
    const { userId } = req.params;
    const { rows }  = await User.init().delete(userId).catch(err => {
        return respondWithSuccess(res, 500, 'Internal server error');
    })
    
    return respondWithSuccess(res, 202, 'user successfully deleted', rows)

}

export const fetchAllUsers = async (req,res) => {
    const { rows } = await User.init().getAllUsers().catch( err => {
        return respondWithSuccess(res, 500, 'Internal server error');
    })
    return respondWithSuccess(res, 202, 'users successfully fetched', rows)
}
