const User = require("./user.schema");

exports.createUser = async (req, res) => {
  const userData = await User.create(req.body);

  res.status(201).json({
    success: true,
    message: "User created successfully!",
    data: userData,
  });
};
