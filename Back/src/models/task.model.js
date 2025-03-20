import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  userId: { type: mongoose.Schema.Types.ObjectId, required: true },
  isCompleted: { type: Boolean, default: false },
});

const taskModel = mongoose.models.task || mongoose.model("task", taskSchema);

export default taskModel;
