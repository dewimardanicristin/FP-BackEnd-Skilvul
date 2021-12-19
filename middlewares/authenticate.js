const authenticateJWT = (req, res, next) => {

    // Read header on authorization
    const authHeader = req.headers.authorization;
  
    // check public or private key
    if (authHeader) {
  
      const token = authHeader;
  
      // Verification on jwt
      jwt.verify(token, process.env.TOKEN_SECRET , (err, user) => {
        // check public or private key is exist
        if (err) {
          return res.status(403).send({
            message: "you are not admin"
          });
        }
        req.user = user;
        next();
      });
    } else {
      res.status(401).send({
        message: "you must login"
      });
    }
  };

module.exports = authenticateJWT