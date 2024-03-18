import { check } from 'express-validator';

export const userRegisterValidation = [
    check('username')
        // .exists()
        .isString()
        .withMessage('Invalid username'),
    check('password')
        .exists()
        .isString()
        .matches(/^\d{4,10}$/)
        .withMessage('Password must be between 4 and 10 digits')
];

export const updatePasswordValidation = [
    check('newPassword')
        .exists()
        .matches(/^\d{4,10}$/)
        .withMessage('New password must be between 4 and 10 digits')
];










