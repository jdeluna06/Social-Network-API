import { Router } from "express";
import {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../../controllers/userController.js";

const router = Router();

// GET all users
router.route("/").get(getUsers);

// GET a single user by its _id and populated thought and friend data
router.route("/:id").get(getUserById);

// POST a new user
router.route("/").post(createUser);

// PUT to update a user by its _id
router.route("/:id").put(updateUser);

// DELETE to remove user by its _id
router.route("/:id").delete(deleteUser);

export default router;
