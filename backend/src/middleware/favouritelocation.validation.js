import { check } from 'express-validator';

export const newFavouriteLocationValidation = [
    check('location')
        .exists()
        .isString()
];


