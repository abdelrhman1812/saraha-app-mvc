import Joi from "joi";

// Validation schema
const messageValidation = Joi.object({
  message: Joi.string().min(4).max(40).required().trim(true).messages({
    "string.min": "Message must be at least 4 characters long.",
    "string.max": "Message must be at most 40 characters long.",
    "any.required": "Message is required.",
  }),
});

export { messageValidation };
