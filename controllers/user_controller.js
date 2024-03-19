const db = require("../models");

const addUser = async (req, res) => {
  var User = db.user;
  // const tushar = User.build({ first_name: "Tushar" });
  // console.log(jane instanceof User); // true
  // console.log(jane.name); // "Jane"
  // Jane exists in the database now!

  // await tushar.save();
  // res.status(200).json(tushar.toJSON());

  const jane = await User.create({ first_name: "Neymar" });
  res.status(200).json(jane.toJSON());
};

module.exports = { addUser };
