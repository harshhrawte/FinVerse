const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // Validate JWT_SECRET_KEY existence
  if (!process.env.JWT_SECRET_KEY) {
    console.error("JWT_SECRET_KEY not configured");
    return res.status(500).json({
      success: false,
      message: "Server configuration error"
    });
  }

  // Extract token with proper validation
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({
      success: false,
      message: "Authorization header missing or invalid format"
    });
  }

  const token = authHeader.split(" ")[1];
  
  try {
    // Verify token with expiration check
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY, {
      algorithms: ["HS256"], // Specify allowed algorithms
      ignoreExpiration: false // Enforce expiration check
    });

    // Attach user information to request
    req.user = {
      userId: decodedToken.userId,
      role: decodedToken.role // Add role-based access control if needed
    };

    next();
  } catch (error) {
    // Handle specific JWT errors
    let statusCode = 401;
    let errorMessage = "Invalid token";

    if (error.name === "TokenExpiredError") {
      statusCode = 403;
      errorMessage = "Session expired, please login again";
    } else if (error.name === "JsonWebTokenError") {
      errorMessage = "Invalid token signature";
    }

    console.error(`JWT Error: ${error.name} - ${error.message}`);
    res.status(statusCode).json({
      success: false,
      message: errorMessage
    });
  }
};

module.exports = authMiddleware;