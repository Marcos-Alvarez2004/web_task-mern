import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
  const { token } = req.cookies;

  if (!token)
    return res.status(401).json({ message: "No toke, authorization denied" });

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) res.status(403).json({ message: "Invaled token" });

    req.user = user;

    next();
  });
};
