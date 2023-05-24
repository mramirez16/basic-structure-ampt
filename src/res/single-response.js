const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": "true",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT,DELETE",
  "Content-Type": "application/json",
};
const response = {
  success: function (req, res, body, code, msg) {
    res.status(code).send({
      body: {
        ok: true,
        response: body,
        responseCode: code,
        message: msg,
        validations: [],
      },
      statusCode: 200,
      headers,
    });
  },

  error: function (req, res, code, statusCode, msg, validations) {
    res.status(code).send({
      body: {
        ok: false,
        response: null,
        responseCode: code,
        message: msg,
        validations: validations ? validations : [],
      },
      statusCode: statusCode || 200,
      headers,
    });
  },
};

export default response;
