const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// middleware to hash password before saving
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// method to check if the passed password is correct
userSchema.methods.isPasswordCorrect = async function(password) {
  return await bcrypt.compare(password, this.password);
};

// method to generate access token
userSchema.methods.generateAccessToken = async function() {
  return jwt.sign(
    {
      UserData: {
        username: this.username,
        email: this.email,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "1h" },
  );
};

// method to generate refresh token
userSchema.methods.generateRefreshToken = async function() {
  return jwt.sign(
    { data: this.username },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "10d" });

};

module.exports = mongoose.model("User", userSchema);