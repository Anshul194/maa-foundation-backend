class ErrorHandler {
  static sendErrorResponse(res, message, errorCode, data) {
    let responseData = {
      success: false,
      message: message,
      errorCode: errorCode
    };

    if (data !== undefined) {
      responseData.data = data;
    }

    return res.status(errorCode).json(responseData);
  }
}

module.exports = ErrorHandler;
