import Joi from "joi";

// Function to generate validation messages dynamically
const generateMessages = (fieldName) => ({
    'string.email': `Please provide a valid ${fieldName}.`,
    'string.pattern.base': `${fieldName} must start with an uppercase letter and be between 4 and 40 characters long.`,
    'any.required': `${fieldName} is required.`
});

// Validation schema
const loginValidation = Joi.object({
    email: Joi.string()
        .email()
        .required()
        .messages(generateMessages('Email')),
    password: Joi.string()
        .pattern(/^[A-Z][A-Za-z0-9]{3,40}$/)
        .required()
        .messages(generateMessages('Password'))
});




export { loginValidation };
