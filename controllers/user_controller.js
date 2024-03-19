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

// wrap all await statements inside try catch block to do error handling

const one_to_one = async (req, res) => {
  const User = db.user;
  const Contact = db.contact;

  // const data = { first_name: "Tushar One to one 2.0" };
  // const user = await User.create({ ...data });

  // console.log(user);

  // if (user?.dataValues?.id) {
  //   const contactObj = {
  //     permanent_address: "Shipra",
  //     current_address: "Gurgaon",
  //     userId: user.dataValues.id,
  //   };

  //   const contact = await Contact.create({ ...contactObj });
  // }

  const data = await User.findAll({
    attributes: ["first_name", "last_name"],
    include: [
      { model: Contact, attributes: ["permanent_address", "current_address"] },
    ],
    where: { id: 3 },
  });

  res.status(200).json({ data });
};

const one_to_many = async (req, res) => {
  const User = db.user;
  const Contact = db.contact;

  // const contactObj = {
  //   permanent_address: "Shipra",
  //   current_address: "Gurgaon",
  //   userId: 3,
  // };
  // const extraContact = await Contact.create({ ...contactObj });

  const data = await User.findAll({
    attributes: ["first_name", "last_name"],
    include: [
      {
        model: Contact,
        attributes: ["permanent_address", "current_address"],
      },
    ],
    where: { id: 3 },
  });

  // const data = await Contact.findAll({
  //   attributes: ["permanent_address", "current_address"],
  //   include: [
  //     {
  //       model: User,
  //       attributes: ["first_name", "last_name"],
  //     },
  //   ],
  //   where: { id: 3 },
  // });

  res.status(200).json({ data });
};

const many_to_many = async (req, res) => {
  const User = db.user;
  const Contact = db.contact;

  // const user_data = { first_name: "Tushar", last_name: "Garg" };
  // const data = await User.create({ ...user_data });

  // if (data?.dataValues?.id) {
  //   const contactObj = {
  //     permanent_address: "Shipra",
  //     current_address: "Gurgaon",
  //   };
  //   const contact = await Contact.create({ ...contactObj });
  // }

  // const data = await User.findAll({
  //   attributes: ["first_name", "last_name"],
  //   include: [
  //     {
  //       model: Contact,
  //       attributes: ["permanent_address", "current_address"],
  //     },
  //   ],
  // });

  const data = await Contact.findAll({
    attributes: ["permanent_address", "current_address"],
    include: [
      {
        model: User,
        attributes: ["first_name", "last_name"],
      },
    ],
  });

  res.status(200).json({ data });
};

const loading = async (req, res) => {
  const User = db.user;
  const Contact = db.contact;

  const data = await User.findAll({ include: Contact });
  res.status(200).json({ data });
};

module.exports = {
  add_user,
  get_all_users,
  get_one_user,
  delete_user,
  update_user,
  one_to_one,
  one_to_many,
  many_to_many,
  loading,
};
