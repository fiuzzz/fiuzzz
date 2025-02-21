const getUsers = (req, res) => {
    const users = [
        { id: 1, username: "Fiuzzz", password:"Bismillah123" },
        { id: 2, username: "Alisya", password:"Bismillah123" },
    ];
    res.status(200).json({
        message:"Data Users",
        users:users
    });
};

module.exports = { getUsers };