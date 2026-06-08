const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["Todo", "In Progress", "Completed", "Blocked"],
      default: "Todo",
    },

    priority: {
      type: String,
      enum: ["Low", "Medium", "High", "Critical"],
      default: "Medium",
    },

    assignedTo: [
      {
        type: String,
      },
    ],

    createdBy: {
      type: String,
      required: true,
    },

    progressNotes: [
      {
        type: String,
      },
    ],

    dueDate: {
      type: Date,
    },

    attachments: [
      {
        type: String,
      },
    ],

    // Future enhancement:
    // Replace attachment strings with actual file upload metadata.
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;