const jwt = require("jsonwebtoken")
const authenticateJWT = (req, res, next) => {

    const authHeader = req.headers.authorization;
  
    if (authHeader) {
  
      const token = authHeader;
  
      jwt.verify(token, process.env.TOKEN_SECRET , (err, user) => {

        if (err) {
          return res.status(403).send({
            message: "you are not admin"
          });
        }
        req.user = user;
        next();
      });
    } else {
      res.redirect("/admin/admin-login")
    }
  };

module.exports = authenticateJWT