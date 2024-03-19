const db = require("../models");

const add_user = async (req, res) => {
  var User = db.user;
  const user_data = req.body;
  const created_user = await User.create({ ...user_data });

  res.status(200).json(created_user.toJSON());
};

const get_all_users = async (req, res) => {
  var User = db.user;
  const users = await User.findAll();
  res.status(200).json({ data: users });
};

const get_one_user = async (req, res) => {
  const User = db.user;
  const id = req.params.id;

  const user = await User.findAll({ where: { id } });
  res.status(200).json({ data: user });
};

const delete_user = async (req, res) => {
  const User = db.user;
  const id = req.params.id;

  const user = await User.destroy({ where: { id } });
  res.status(200).send("successs");
};

const update_user = async (req, res) => {
  const User = db.user;
  const id = req.body.id;
  const data = req.body.data;

  const user = await User.update({ ...data }, { where: { id } });
  res.status(200).send("updated");
};

module.exports = {
  add_user,
  get_all_users,
  get_one_user,
  delete_user,
  update_user,
};
