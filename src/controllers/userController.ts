import { Request, Response } from "express";
import { User } from "../models/index.js";

export const getUsers = (_req: Request, res: Response) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(500).json(err));
};

export const getUserById = (req: Request, res: Response) => {
  User.findOne({ _id: req.params.id })
    .then((user) =>
      !user
        ? res.status(404).json({ message: "No user found with this id!" })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
};

export const createUser = (req: Request, res: Response) => {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
};

export const updateUser = (req: Request, res: Response) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((user) =>
      !user
        ? res.status(404).json({ message: "No user found with this id!" })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
};

export const deleteUser = (req: Request, res: Response) => {
  User.findOneAndDelete({ _id: req.params.id })
    .then((user) =>
      !user
        ? res.status(404).json({ message: "No user found with this id!" })
        : res.json({ message: "User deleted!" })
    )
    .catch((err) => res.status(500).json(err));
};

export const addFriend = (req: Request, res: Response) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    { $addToSet: { friends: req.params.friendId } },
    { new: true }
  )
    .then((user) =>
      !user
        ? res.status(404).json({ message: "No user found with this id!" })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
};

export const removeFriend = (req: Request, res: Response) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    { $pull: { friends: req.params.friendId } },
    { new: true }
  )
    .then((user) =>
      !user
        ? res.status(404).json({ message: "No user found with this id!" })
        : res.json(user)
    )
    .catch((err) => res.status(500).json(err));
};
