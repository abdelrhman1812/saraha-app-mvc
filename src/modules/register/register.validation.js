import Joi from "joi";

// Function to generate validation messages dynamically
const generateMessages = (fieldName) => ({
    'string.min': `${fieldName} must be at least 3 characters long.`,
    'string.max': `${fieldName} must not exceed 12 characters.`,
    'string.email': `Please provide a valid ${fieldName}.`,
    'string.pattern.base': `${fieldName} must start with an uppercase letter and be between 4 and 40 characters long.`,
    'any.required': `${fieldName} is required.`
});

// Validation schema
const registerValidation = Joi.object({
    name: Joi.string()
        .min(3)
        .max(12)
        .required()
        .messages(generateMessages('Name')),
    email: Joi.string()
        .email()
        .required()
        .messages(generateMessages('Email')),
    password: Joi.string()
        .pattern(/^[A-Z][A-Za-z0-9]{3,40}$/)
        .required()
        .messages(generateMessages('Password'))
});




export { registerValidation };

