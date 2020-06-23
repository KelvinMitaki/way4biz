const mongoose = require("mongoose");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = require("../models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        const { id, name, emails, photos } = profile;
        const existingUser = await User.findOne({ googleId: id });
        if (existingUser) {
          done(null, existingUser);
        }
        const user = new User({
          googleId: id,
          firstName: name.givenName,
          lastName: name.familyName,
          email: emails[0].value,
          verified: emails[0].verified
        });
        await user.save();
        done(null, user);
      } catch (error) {
        console.log(error);
      }
    }
  )
);
