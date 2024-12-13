import Razorpay from "razorpay";
import crypto from "crypto";
import { Course } from "../models/course.model.js";
import { CoursePurchase } from "../models/coursePurchase.model.js";

const razorpay = new Razorpay({
  key_id: 'yet_to_be_provided',
  key_secret: 'yet_to_be_provided',
});

export const createRazorpayOrder = async (req, res) => {
  
};

export const verifyPayment = async (req, res) => {
  
};
