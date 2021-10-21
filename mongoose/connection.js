import mongoose from 'mongoose';
import { dbConnectionString } from '../components/global';

const databaseMiddleware = async (req, res, next) => {
    try {
        if (!global.mongoose) {
            global.mongoose = await mongoose.connect(dbConnectionString, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                // useFindAndModify: false,
            });
        }
    }
    catch (ex) {
        console.error(ex);
    }
    console.log('connected');
    return next();
};
export default databaseMiddleware;