import User from '../db/model/User';
import  { respondWithSuccess } from '../helpers/responseHandler';

export const createUser = async (req, res) => {
   
    
    try {
        
        const { rows } = await User.init().insert( { ...req.body, created_at: new Date() });

      
        return respondWithSuccess(res, 201, 'user successfully recorded',rows)
        
    } catch (err) {
        console.log(err.stack)
      //  return respondWithSuccess(res, 201, 'user successfully recorded',user)
    }
  
}
