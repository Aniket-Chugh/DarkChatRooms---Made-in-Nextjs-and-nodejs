export const signup = (req, res) => {
    const { username, account_name, email, user_pass } = req.query;
    console.log(username, account_name, email, user_pass);
} 
