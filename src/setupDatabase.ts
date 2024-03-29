import mongoose from 'mongoose';
import { config } from './config'
import Logger from 'bunyan';

const log: Logger = config.createLogger('setupDatabase');

export default () =>{
    const connect = () =>{
        mongoose.connect(`${config.DATABASE_URL}`)
            .then(()=>{
                log.info('Database connected!')
            })
            .catch((e)=>{
                log.error(e)
                return process.exit(1);
            });
    };
    connect();

    mongoose.connection.on('disconnected', connect);
}