import dotenv from "dotenv"
dotenv.config();

const TOKEN_TYPES = {
    ACCESS: "x9aK",
    REFRESH: "p7LmQ",
};

const TOKEN_CONFIG = {
    [TOKEN_TYPES.ACCESS]: {
        secret: process.env.JWT_ACCESS_SECRET,
        expiresIn: "7m",
    },
    [TOKEN_TYPES.REFRESH]: {
        secret: process.env.JWT_REFRESH_SECRET,
        expiresIn: "7d",
    },
};

export { TOKEN_TYPES };
export default TOKEN_CONFIG;
