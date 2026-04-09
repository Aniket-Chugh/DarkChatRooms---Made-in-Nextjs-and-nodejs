-- Insert dummy users

INSERT INTO `users` (username, account_name, email, user_pass)
VALUES
( 'john_doe', 'John Doe', 'john@example.com', 'mySecurePass123'),
( 'jane_smith', 'Jane Smith', 'jane@example.com', 'password456'),
( 'alice_w', 'Alice W', 'alice@example.com', 'alicePass789');

CREATE TABLE refresh_tokens (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    token TEXT NOT NULL,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
