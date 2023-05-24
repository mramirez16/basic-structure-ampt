import auth from "../auth/auth.js";

export default function checkAuth() {
  function middleware(req, res, next) {
    auth.checkAuth.confirmToken(req);
    next();
  }

  return middleware;
}
