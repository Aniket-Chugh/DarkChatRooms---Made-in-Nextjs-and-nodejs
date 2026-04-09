import db from "../connections/db.connection.js"
const connection = await db.getConnection();
export const addRefreshTokenToDB = async (user_id, token, expiresAt) => {


    try {
        await connection.beginTransaction();
        const query = "INSERT INTO refresh_tokens_data(user_id , token , expires_at) VALUES (?, ?, ?);";
        const [result] = await connection.query(query, [user_id, token, expiresAt]);
        await connection.commit();
        console.log(result);

    } catch (error) {
        connection.rollback();
        throw new Error("error : ", error);
    }
}


export const checkRefreshToken = (user_id) => {
    console.log(user_id);

    try {
        connection.beginTransaction();
        const query = "select token from refresh_tokens_data where user_id=?;"
    } catch (error) {

    }
}




