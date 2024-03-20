import { check } from 'express-validator';

export const addFavouriteLocationValidation = [
    check('location')
        .exists()
        .isString()
];


