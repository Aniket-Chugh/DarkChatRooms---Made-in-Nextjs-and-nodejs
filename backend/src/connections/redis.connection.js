import { createClient } from 'redis';

const redisClient = createClient({
    url: 'redis://localhost:6379'
})

redisClient.on('error', err => console.error('Redis Error:', err));

export const connectRedis = async () => {
    try {
        await redisClient.connect();
    } catch (error) {
        console.error("❌ Redis Connection Failed:", error);
    }
}


export { redisClient };
