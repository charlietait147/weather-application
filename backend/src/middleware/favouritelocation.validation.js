import { check } from 'express-validator';

export const addFavouriteLocationValidation = [
    check('location')
        .exists()
        .isString()
        .withMessage('Location should be a string')
];


