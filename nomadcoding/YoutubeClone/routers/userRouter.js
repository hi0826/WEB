import express from "express";
import routes from "../routes";
import {
  users,
  userDetail,
  editProfile,
  changePassword,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.home, users);
userRouter.get(routes.users, users);
userRouter.get("/change", changePassword);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.userDetail, userDetail);

export default userRouter;
