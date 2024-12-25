// Write a script that:
// 1. Connects to MongoDB.
// 2. Creates the 'users' collection.
// 3. Adds new users.
// 4. Finds users with duplicate emails.

// Use Mongoose library
import mongoose from 'mongoose';

type DuplicatedUsers = {
    email: string
}

async function manageUsers(): Promise<DuplicatedUsers[]> {
    try {
        await mongoose.connect('mongodb://localhost:27017/users');

        const userSchema = new mongoose.Schema({  //неработает mongoose_1.default.Schema is not a constructor 
            name: { type: String, required: true },
            email: { type: String, required: true, unique: true },
        });
        
        var User = mongoose.model('User', userSchema);
        module.exports = User;

        await User.create([
            { name: 'Daniil', email: 'dsvyatkov@mail.ru' },
            { name: 'Sasha', email: 'duplicate@example.com' },
            { name: 'Vova', email: 'duplicate@example.com' }
        ]);

        // const duplicatedUsers = await User.aggregate([
        //     { $group: { _id: '$email', count: { $sum: 1 } } }, 
        //     { $match: { count: { $gt: 1 } } }, 
        //     { $project: { _id: 0, email: '$_id' } } 
        // ]);

        // return duplicatedUsers;
        return [];

    } catch (error) {
        console.log('Error managing users:', error);
        return [];
    } finally {
        await mongoose.disconnect();
    }
}

module.exports = { manageUsers }