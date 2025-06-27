const {Schema, model} = require('mongoose')
const Client = new Schema(
    {
        name: 
		{ type: String, 
           uniqued: true, 
           required: true 
        },
        phoneNumber: {
            type: Number
        },
        email: {
            type: String
        }
    }
)

module.exports=model("Client", Client)
