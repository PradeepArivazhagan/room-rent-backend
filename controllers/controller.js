import User from "../models/usermodel.js";
import Rent from "../models/rentmodel.js";
import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const { roomNumber, mobileNumber } = req.body;
  await User.findOne({ mobileNumber })
    .then((response) => {
      if (response !== null) {
        const payload = {
          roomNumber: roomNumber,
        };
        const jwtToken = jwt.sign(payload, "MY_SECRET_KEY");
        res.status(200).json({ jwtToken });
      }
      if (response === null) {
        res.status(201).json({ message: "No User Found" });
      }
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};

export const rentalDetails = async (req, res) => {
  const userId = req.params;
  await Rent.findOne(userId)
    .then((response) => {
      res.status(200).json({ response });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
};
