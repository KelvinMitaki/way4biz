const { check, validationResult } = require("express-validator");
const Driver = require("../models/Driver");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

router.post(
  "/api/driver/register",
  check("email").trim().isEmail().withMessage("Please enter a valid email"),
  check("password")
    .trim()
    .isLength({ min: 6 })
    .withMessage("password must be at least 6 characters long"),
  check("firstName")
    .trim()
    .notEmpty()
    .withMessage("Please provide a valid first name"),
  check("lastName")
    .trim()
    .notEmpty()
    .withMessage("please provide a valid last name"),
  check("confirmPassword").trim().notEmpty(),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(401).send({ message: errors.array()[0].msg });
      }
      const {
        password,
        confirmPassword,
        email,
        firstName,
        lastName
      } = req.body;
      if (password.trim() !== confirmPassword.trim()) {
        return res.status(401).send({ message: "passwords do not match" });
      }
      const hashedPass = await bcrypt.hash(password, 12);
      const driver = new Driver({
        firstName,
        lastName,
        email,
        password: hashedPass
      });
      await driver.save();
      res.send(driver);
    } catch (error) {
      res.status(500).send(error);
    }
  }
);

module.exports = router;
