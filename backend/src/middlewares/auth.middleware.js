import { TOKEN_TYPES } from "../connections/TOKEN_CONFIG.connection.js";
import { verifyToken } from "../utils/jwt.util.js";

export const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized: No access token provided" });
        }

        const token = authHeader.split(" ")[1];

        try {
            const decodedUser = verifyToken(TOKEN_TYPES.ACCESS, token);

            req.user = decodedUser;

            next();

        } catch (verifyError) {
            return res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
        }

    } catch (error) {
        console.error("Auth Middleware Error:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
