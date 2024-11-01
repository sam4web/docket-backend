const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const verifyTokenMiddleware = async (req, res, next) => {
  const authToken = req.headers["authorization" || "Authorization"];
  if (!authToken || !authToken?.includes("Bearer ")) return res.status(401).json({ message: "Unauthorized" });
  const token = authToken.replace("Bearer ", "");

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const id = decoded.UserInfo.id;
    const user = await User.findById(id).lean();
    if (!user) return res.status(401).send("User does not exists.");
    req.userId = id;
  } catch (err) {
    return res.status(400).json({ message: `${err.name}: ${err.message}` });
  }
  next();
};

module.exports = { verifyToken: verifyTokenMiddleware };