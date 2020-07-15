import passport from "passport";
import User from "./model/User";

poassport.use(User.createStrategy());
