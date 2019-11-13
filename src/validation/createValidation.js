import Joi from '@hapi/joi'
import { joiValidator } from './joiValidator';
import { respondWithWarning } from '../helpers/responseHandler';

export const createUserValidation = async (req, res, next) => {
  const schema = Joi.object().keys({
    first_name: Joi.string().required(),
    surname: Joi.string().required(),
    birth_date:  Joi.string().required()
    });
    const options = {
      allowUnknown: true, 
      stripUnknown: true, 
      abortEarly: false 
      };
      
      try {
        await schema.validateAsync(req.body, options);
        return next();
    }
    catch (err) { 
      const message = err.details.map(items => items.message.replace(/['"]/g, ''));
      return respondWithWarning(res, 400, message);
     }
   };

export const  validateUserId = async (req, res, next ) => {
  const schema = Joi.object().keys({
    userId: Joi.number().required()
  });

    const options = {
      allowUnknown: true, 
      stripUnknown: true, 
      abortEarly: false 
  };
     try {
        await schema.validateAsync(req.params, options)
        return next();
      } catch (err) {
        
      const  messages = err.details.map(items => items.message.replace(/['"]/g, ''));
      return respondWithWarning(res, 400, messages);
      }
   }

