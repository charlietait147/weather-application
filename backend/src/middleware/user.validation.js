import { check } from 'express-validator';

export const userRegisterValidation = [
    check('username')
        .exists()
        .isLength({ min: 4, max: 20 })
        .withMessage('Username must be between 4 and 20 characters'),
    check('password')
        .exists()
        .matches(/^\d{4,10}$/)
        .withMessage('Password must be between 4 and 10 digits')
];

export const updatePasswordValidation = [
    check('newPassword')
        .exists()
        .matches(/^\d{4,10}$/)
        .withMessage('New password must be between 4 and 10 digits')
];










