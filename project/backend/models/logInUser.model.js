const mongoos = require("mongoose");

const UsersSchema = new mongoos.Schema(
    {
        mail: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
    },

    { timestamps: true }
);

module.exports = mongoos.model("LogInUsers", UsersSchema);