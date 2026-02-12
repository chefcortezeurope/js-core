const User = require("../models/User");

//GET /api/users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

//GET /api/users/:id
exports.getUserById = async (req, res) => {
try {

    const user = await User.findById(req.params.id);

    if(!user) {
        return res.status(404).json({ message: "User not found"});
    }

    res.status(200).json(user);
} catch (error) {
    res.status(500).json({message: error.message});
}
};

//POST /api/users

exports.createUser = async (req, res) => {
try {
    const { name, email } = req.body;

    if(!name || !email) {
        return res.status(400).json({ message: "Name and email required"});
    }

    const userExists = await User.findOne({ email });

    if (userExists){
        return res.status(400).json({message: "Email already used"});
    }

    const user = await User.create ({
        name,
        email,
    });

   res.status(201).json(user);
} catch (error) {
    res.status(500).json({message: error.message});
}
};