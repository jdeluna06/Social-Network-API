import { Schema, model, Types, Document } from "mongoose";
import moment from "moment";

interface IReaction extends Document {
  reactionId: Schema.Types.ObjectId;
  reactionBody: string;
  username: string;
  createdAt: Schema.Types.Date;
}

interface IThought extends Document {
  thoughtText: string;
  createdAt: Schema.Types.Date;
  username: string;
  reactions: IReaction[];
  reactionCount: number;
}

const reactionSchema = new Schema<IReaction>(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp: Date) =>
        moment(timestamp).format("MMM DD, YYYY [at] hh:mm a"),
    },
  },
  {
    toJSON: { getters: true },
    id: false,
  }
);

const thoughtSchema = new Schema<IThought>(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp: Date) =>
        moment(timestamp).format("MMM DD, YYYY [at] hh:mm a"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: { virtuals: true, getters: true },
    id: false,
  }
);

thoughtSchema.virtual("reactionCount").get(function (this: IThought) {
  return this.reactions.length;
});

const Thought = model<IThought>("Thought", thoughtSchema);
export default Thought;
