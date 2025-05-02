const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // header mdun frontend side kadun current jwt token yete!
  const token = authHeader && authHeader.split(" ")[1];
  //   console.log(token);
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "No token provided! Access Denied. Please log in to continue",
    });
  } // if token is invalid so it'll never be able to access home page so home page is protected

  // decode the token - user info
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
    console.log(decodedToken);
    req.userInfo = decodedToken;
    console.log(req.userInfo);
    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error verifying token"
    });
  }
};

module.exports = authMiddleware;
