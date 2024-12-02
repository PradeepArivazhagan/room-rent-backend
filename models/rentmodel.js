import mongoose from "mongoose";

const rentSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  months: {
    type: [String],
    enum: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    default: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
  },
  rents: {
    type: [Number],
    default: Array(12).fill(0), // Default values as 0 for 12 months
  },
  electricityCharges: {
    type: [Number],
    default: Array(12).fill(0),
  },
  totals: {
    type: [Number],
    default: Array(12).fill(0),
  },
  paymentStatuses: {
    type: [String],
    enum: ["Completed", "Pending", "Pay Now"],
    default: Array(12).fill("Pay Now"), // Default to 'Pending' for all months
  },
});

const Rent = mongoose.model("Rents", rentSchema);

export default Rent;
