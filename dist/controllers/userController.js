import { User } from "../models/index.js";
export const getUsers = (_req, res) => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
};
export const getUserById = (req, res) => {
    User.findOne({ _id: req.params.id })
        .then((user) => !user
        ? res.status(404).json({ message: "No user found with this id!" })
        : res.json(user))
        .catch((err) => res.status(500).json(err));
};
export const createUser = (req, res) => {
    User.create(req.body)
        .then((user) => res.json(user))
        .catch((err) => res.status(500).json(err));
};
export const updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((user) => !user
        ? res.status(404).json({ message: "No user found with this id!" })
        : res.json(user))
        .catch((err) => res.status(500).json(err));
};
export const deleteUser = (req, res) => {
    User.findOneAndDelete({ _id: req.params.id })
        .then((user) => !user
        ? res.status(404).json({ message: "No user found with this id!" })
        : res.json({ message: "User deleted!" }))
        .catch((err) => res.status(500).json(err));
};
export const addFriend = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, { $addToSet: { friends: req.params.friendId } }, { new: true })
        .then((user) => !user
        ? res.status(404).json({ message: "No user found with this id!" })
        : res.json(user))
        .catch((err) => res.status(500).json(err));
};
export const removeFriend = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, { $pull: { friends: req.params.friendId } }, { new: true })
        .then((user) => !user
        ? res.status(404).json({ message: "No user found with this id!" })
        : res.json(user))
        .catch((err) => res.status(500).json(err));
};
