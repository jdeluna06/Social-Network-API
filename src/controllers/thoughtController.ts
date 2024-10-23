import { Request, Response } from "express";
import { Thought } from "../models/index.js";

export const getThoughts = (_req: Request, res: Response) => {
  Thought.find()
    .then((thoughts) => res.json(thoughts))
    .catch((err) => res.status(500).json(err));
};

export const getThoughtById = (req: Request, res: Response) => {
  Thought.findOne({ _id: req.params.id })
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: "No thought found with this id!" })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
};

export const createThought = (req: Request, res: Response) => {
  Thought.create(req.body)
    .then((thought) => res.json(thought))
    .catch((err) => res.status(500).json(err));
};

export const updateThought = (req: Request, res: Response) => {
  Thought.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: "No thought found with this id!" })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
};

export const deleteThought = (req: Request, res: Response) => {
  Thought.findOneAndDelete({ _id: req.params.id })
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: "No thought found with this id!" })
        : res.json({ message: "Thought deleted!" })
    )
    .catch((err) => res.status(500).json(err));
};

export const addReaction = (req: Request, res: Response) => {
  Thought.findOneAndUpdate(
    { _id: req.params.id },
    { $addToSet: { reactions: req.body } },
    { new: true }
  )
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: "No thought found with this id!" })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
};

export const removeReaction = (req: Request, res: Response) => {
  Thought.findOneAndUpdate(
    { _id: req.params.id },
    { $pull: { reactions: { _id: req.params.reactionId } } },
    { new: true }
  )
    .then((thought) =>
      !thought
        ? res.status(404).json({ message: "No thought found with this id!" })
        : res.json(thought)
    )
    .catch((err) => res.status(500).json(err));
};
