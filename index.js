


import { initMongoConnection } from './src/db/initMongoConnection.js';
import { setupServer } from'./src/server.js';

const boostrap = async () => {
    await initMongoConnection();
    setupServer();
};

boostrap();