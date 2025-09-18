import { body } from "express-validator";


export const taskValidator = [
    body("title").notEmpty().withMessage("Title is required"),
]