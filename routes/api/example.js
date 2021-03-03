const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware");
const Login = require("../../models/example.js");

//Use this route in Postman to ensure routes are connecting properly
// router.get("/test", (req, res) => {
//   res.send("working")
// })

router.post("/register", async (req, res) => {
  try {
    let {
      username,
      password,
      passwordCheck,
      displayName,
      jobType,
      phoneNumber,
    } = req.body;

    // validate

    if (!username || !password || !passwordCheck)
      return res.status(400).json({ msg: "Not all fields have been entered." });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "The password needs to be at least 5 characters long." });
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });

    const existingUser = await Login.findOne({ username: username });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this username already exists." });

    if (!displayName) displayName = username;

    //storing the password in the database using encryption
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new Login({
      username,
      password: passwordHash,
      displayName,
      phoneNumber,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // validate
    if (!username || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await Login.findOne({ username: username });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this username has been registered." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        displayName: user.displayName
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await Login.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await Login.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  const token = req.header("x-auth-token");
  if (!token) return res.json(false);

  const verified = jwt.verify(token, process.env.JWT_SECRET);
  if (!verified) return res.json(false);

  const user = await Login.findById(verified.id);
  if (!user) return res.json(false);

  return res.json({
    token,
    displayName: user.displayName,
    id: user._id,
  });
});
router.get("/register", async (req, res) => {
  const user = await Login.find();
  console.log(user);
  res.json(user);
});

router.get("/register/:id", async (req, res) => {
  Login.findById(req.params.id)
    .then((dbModel) => res.json(dbModel))
    .catch((err) => res.status(422).json(err));
});
router.put("/register/:id", async (req, res) => {
  Login.findOneAndUpdate({ _id: req.params.id }, 
    {$set: {
      cleaning: req.body.cleaning
    }})
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
});
module.exports = router;
