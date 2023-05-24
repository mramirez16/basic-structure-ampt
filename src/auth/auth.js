import JWT from "jsonwebtoken";
import config from "../config/config.js";

function asignToken(data) {
  return JWT.sign(data, config.jwt.secret);
}

function verifyToken(token) {
  return JWT.verify(token, config.jwt.secret);
}

function getToken(headersAuth) {
  try {
    if (!headersAuth) {
      throw new Error("Empty token");
    }

    if (headersAuth.indexOf("Bearer") === -1) {
      throw new Error("Invalid token format");
    }
    console.log("headersAuth " + headersAuth);

    let token = headersAuth.replace("Bearer ", "");

    console.log("token " + token);
    return token;
  } catch (error) {
    console.log(error);
  }
}

function headersDecode(req) {
  const headersAuth = req.headers.authorization || "";
  const token = getToken(headersAuth);
  const decode = verifyToken(token);
  req.user = decode;
  return decode;
}

const checkAuth = {
  confirmToken: function (req) {
    const decode = headersDecode(req);
  },
};

const exportsFunctions = {
  asignToken,
  checkAuth,
};

export default exportsFunctions;
