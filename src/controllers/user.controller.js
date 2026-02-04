const users = [
    { id: 1, name: "Jose"},
    { id: 2, name: "Maria"},
];

//GET /api/users
exports.getUsers = (req, res) => {
    res.status(200).json(users);
};

//GET /api/users/:id
exports.getUserById = (req, res) => {
    const id = parseInt(req.params.id);

    const user = user.find((u) => u.id === id);

    if(!user) {
        return res.status(404).json({ message: "User not found"});
    }

    res.status(200).json(user);
};

//POST /api/users

exports.createUser = (req, res) => {
    const { name } = req.body;

    if(!name) {
        return res.status(400).json({ message: "Name is required"});
    }

    const newUser = {
        id: users.lenght + 1,
        name,
    };

    users.push(newUser);

    res.status (201).json(newUser);
}