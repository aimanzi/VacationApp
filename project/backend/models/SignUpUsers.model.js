const mongoos = require("mongoose");

const UsersSchema = new mongoos.Schema(
    {
        userdefinition: {
            type: String,
            require: true,
        },
    

        mail: {
            type: String,
            require: true,
            unique: true
        },
        password: {
            type: String,
            require: true,
        },
        firstname: {
            type: String,
            require: true,
        },
        lastname: {
            type: String,
            require: true,
        },
        follow: [{
            type: mongoos.Schema.Types.ObjectId,
            require: true,
            defult: []
        }],
    },

    { timestamps: true }
);

module.exports = mongoos.model("SignUpUsers", UsersSchema);