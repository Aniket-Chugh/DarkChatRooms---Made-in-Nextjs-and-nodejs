import db from "../connections/db.connection.js";
import { signToken } from "../utils/jwt.util.js";
import { TOKEN_TYPES } from "../connections/TOKEN_CONFIG.connection.js";

export const RegisterDao = async ({ username, displayName, email, hashedPass }) => {
    const connection = await db.getConnection();

    try {
        await connection.beginTransaction();

        const userRegistrationQuery = `
            INSERT INTO users (username, account_name, email, user_pass)
            VALUES (?, ?, ?, ?);
        `;

        const [result] = await connection.query(userRegistrationQuery, [
            username,
            displayName,
            email,
            hashedPass
        ]);

        const user_id = result.insertId;
        await connection.commit();


        const accessToken = signToken(TOKEN_TYPES.ACCESS, { user_id, username });
        const Refresh_Token = signToken(TOKEN_TYPES.REFRESH, { user_id, username });



        return {
            success: true,
            user: {
                id: user_id,
                username: username,
                email: email
            },
            accessToken: accessToken.token,
            AccessexpireIn: accessToken.expiresIn,
            RefreshToken: Refresh_Token.token,
            RefreshexpireIn: Refresh_Token.expiresIn
        };

    } catch (error) {
        await connection.rollback();


        if (error.code === 'ER_DUP_ENTRY') {
            console.warn(`[RegisterDao] Duplicate entry attempt for email/username: ${email} / ${username}`);
            throw new Error("A user with that username or email already exists.");
        }

        console.error("[RegisterDao] Critical error during user registration:", error.message || error);

        throw error;

    } finally {
        connection.release();
    }
};
