import mongoose from "mongoose";

const favouriteLocationSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
});

const FavouriteLocation = mongoose.model('FavouriteLocation', favouriteLocationSchema);

export default FavouriteLocation;
