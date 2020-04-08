const User = require("./models/User");

exports.createNewContact = async (ctx) => {

    const user = new User(ctx.request.body);
    
    try {
        await user.save();
        return ( ctx.body = { message: "User Created", user});
    } catch(e) {
        console.log(e);
    }
    
};

exports.getAllContacts = async (ctx) => {
    
    const users = await User.find();
    return (ctx.body = { message: "All contacts" ,users});
};

exports.getContactDetails = async (ctx) => {
    
    const contact = await User.findOne({ mobile: ctx.params.number })
    if(!contact) {
        console.log("Contact Not Found.")
    }
    return (ctx.body = { message: "Contact Details", contact});
};

exports.updateContactNumber = async (ctx) => {
    const { mobile } = ctx.request.body;
    if(!mobile) {
        return (ctx.body = {  error: "Invalid updates!"});
    }

    try {
        const user = await User.findOne({ _id: ctx.params.id });

        if(!user) {
            return (ctx.body = {status: 404, error: "User not found."});
        }

        user["mobile"] = mobile;
        await user.save();
        return (ctx.body = { status: 201, message: "Updated", user });
    } catch(e) {
        console.log(e)
    }
};

exports.deleteContact = async (ctx) => {
    try {
        const user = await User.findOneAndDelete({ mobile: ctx.params.number });

        if(!user) {
            return (ctx.body = { status: 404, message: "Not Found" });
        }

        return ( ctx.body = { message: "Deleted", user})

    } catch(e) {
        console.log(e)
    }
};