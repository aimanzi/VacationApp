const mongoos = require("mongoose");

const UsersSchema = new mongoos.Schema(
    {
        id: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        destination: {
            type: String,
            require: true,
        },
        img:
        {
            type: String,
            require: true,
        },
        startdate: {
            type: String,
            require: true,
        },
        enddate: {
            type: String,
            require: true,
        },
        price: {
            type: String,
            require: true,
        },
        follower: {
            type: String,
            require: true,
        },

        // follower: {
        //     type: mongoos.Schema.Types.ObjectId,
        //     require: true,
        // },
    },

    { timestamps: true }
);
module.exports = mongoos.model("Vacations", UsersSchema);