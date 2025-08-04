const Intern = require("../models/Intern");

exports.registerIntern = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) return res.status(400).json({ error: "All fields required" });

  const already = await Intern.findOne({ email });
  if (already) return res.status(400).json({ error: "Email already registered" });

  const referralCode = name.toLowerCase() + "2025";

  const intern = await Intern.create({ name, email, password, referralCode });
  res.status(201).json(intern);
};

exports.loginIntern = async (req, res) => {
  const { email, password } = req.body;
  const intern = await Intern.findOne({ email });
  if (!intern || intern.password !== password) return res.status(401).json({ error: "Invalid credentials" });

  res.json(intern);
};

exports.getDashboardData = async (req, res) => {
  const { email } = req.params;
  const intern = await Intern.findOne({ email });
  if (!intern) return res.status(404).json({ error: "User not found" });

  res.json({
    name: intern.name,
    referralCode: intern.referralCode,
    donations: intern.donations
  });
};
