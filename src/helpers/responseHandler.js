export const respondWithSuccess = (res, statusCode = 200, message, additionalFields = {}) => {

    const payload = Array.isArray(additionalFields) ? [...additionalFields ] : {...additionalFields }
    return res.status(statusCode).send( {success: true, message, payload });
}

export const respondWithWarning = (res, statusCode, message, additionalFields) => res
   .status(statusCode).send({ success: false, message, payload: { ...additionalFields } });