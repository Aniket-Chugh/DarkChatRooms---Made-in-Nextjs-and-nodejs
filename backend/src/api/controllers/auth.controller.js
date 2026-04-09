import { RegisterDao } from "../../repositories/user.repository.js";
import { bcryptHash } from "../../utils/bcrypt.js";
import { registrationInputValidation } from "../../validation/input.registration.validation.js";
import { cookieOptions } from "../../connections/cookies.connection.js";
import { TOKEN_TYPES } from "../../connections/TOKEN_CONFIG.connection.js";
import { addRefreshTokenToDB } from "../../repositories/refreshToken.repository.js";

export const register = async (req, res) => {
    try {
        if (!req.body || typeof req.body !== 'object') {
            return res.status(400).json({
                success: false,
                message: "Invalid request. Data is missing."
            });
        }


        const validation = registrationInputValidation({
            ...req.body,
            pass: req.body.password
        });


        if (!validation.success) {
            return res.status(400).json({
                success: false,
                message: "Validation failed",
                errors: validation.errors
            });
        }

        const { username, displayName, email, pass } = validation.data;

        const hashedPass = await bcryptHash(pass);

        const data = await RegisterDao({
            username,
            displayName,
            email,
            hashedPass
        });



        const RefreshexpireIn = data.RefreshexpireIn
        const date = parseInt(RefreshexpireIn);


        const milliRefreshexpireIn = date * 24 * 60 * 60 * 1000


        console.log(data.user.id);


        res.cookie(TOKEN_TYPES.REFRESH, data.RefreshToken, cookieOptions(milliRefreshexpireIn));
        const userId = data.user.id;

        await addRefreshTokenToDB(userId, data.RefreshToken, date);

        return res.status(201).json({
            success: true,
            message: "User registered successfully.",
            accessToken: data.accessToken,
        });



    } catch (error) {
        console.error(`[Registration_Controller_Error]:`, error);

        if (error.code === 'ER_DUP_ENTRY' || error.message.includes("exists")) {
            return res.status(409).json({
                success: false,
                message: "A user with this email or username already exists."
            });
        }

        return res.status(500).json({
            success: false,
            message: "An unexpected error occurred. Please try again later."
        });
    }
};
