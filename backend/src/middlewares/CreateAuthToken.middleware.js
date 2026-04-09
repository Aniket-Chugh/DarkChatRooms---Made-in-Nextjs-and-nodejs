import { TOKEN_TYPES } from "../connections/TOKEN_CONFIG.connection.js";
import { signToken, verifyToken } from "../utils/jwt.util.js";


export const createAccessToken = async (req, res, next) => {
    try {
        const refreshToken = req.cookies?.p7LmQ;

        if (!refreshToken) {
            return res.status(401).json({
                success: false,
                message: "Authentication failed: Missing refresh token.",
            });
        }

        const decoded = verifyToken(TOKEN_TYPES.REFRESH, refreshToken);

        if (!decoded || !decoded.user_id) {
            return res.status(403).json({
                success: false,
                message: "Session expired: Please log in again.",
            });
        }


        const payload = {
            username: decoded.username,
            user_id: decoded.user_id,

        };

        const accessToken = signToken(TOKEN_TYPES.ACCESS, payload);

        return res.status(200).json({
            success: true,
            data: {
                success: true,
                accessToken,
                isLoggedIn: true,
                username: decoded.username

            }
        });

    } catch (error) {
        next(error);
    }
};



export const handleRefresh = () => {

}
