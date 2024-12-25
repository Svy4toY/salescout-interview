// Write a script that:
// 1. Connects to Redis.
// 2. Saves the keys with their values.
// 3. Reads and outputs values for a given key.

// Use redis library
import redis from 'redis';

async function manageRedis(): Promise<void> {
    const client = redis.createClient();
    console.log('KLIENT ',client);
    

    try {
        await client.connect(); // Redis: TypeError: client.connect is not a function 
        console.log('Connected');//незнаю как это решить

        await client.set('key1', 'value1');
        await client.set('key2', 'value2');
        await client.set('key3', 'value3');

        //неработает 

    } catch (error) {
        console.log('Error managing Redis:', error);
    } finally {
        await client.quit();
        console.log('Disconnected from Redis.');
    }
}

module.exports = { manageRedis };