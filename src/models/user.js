const mongoose = require('mongoose');
const mongo_keys = require('../config').mongo_keys

mongoose.connect(`mongodb+srv://${mongo_keys.publicKey}:${mongo_keys.privateKey}@cluster-int.xc8td.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

module.exports = mongoose.model(
    'User', 
    { 
        user_id: String,
        user_name: String,
        user_mail: String,
        pass_hash: String,
        watched: [
            {
                id: String,
                episodes: [
                    String
                ]
            },
        ],
    }
);