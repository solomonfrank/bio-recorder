import User from '../db/model/User';
import  { respondWithSuccess } from '../helpers/responseHandler';

export const createUser = async (req, res) => {
    
    try {
  
    const { rows } = await User.init().insert( { ...req.body, created_at: new Date() });
    let attribute =  rows[0]['attribute'].map(item => (JSON.parse(item)));
    rows[0]['attribute'] = attribute;
    return respondWithSuccess(res, 201, 'user successfully recorded',rows)
        
    } catch (err) {
     
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

export const fetchAllUsers = async (req, res) => {
    const { rows } = await User.init().getAllUsers().catch( err => {
     
        return respondWithSuccess(res, 500, 'Internal server error');
       
    })

   
   let copy = []
   rows.forEach(item => {
        let name = Object.keys(item);
        if(name[4] === 'attribute') {
             
     let childElem = item['attribute'].map(val => {
          let newMap = JSON.parse(val);
          return newMap;
                })
            item['attribute'] = childElem;
            copy.push(item)

            }else {
                copy.push(item)
            }

        })
     
   return respondWithSuccess(res, 202, 'users successfully fetched', copy)
}
