const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const movieSchema = new Schema(
    {
        title: {
            type: String,
            required: false,
            trim: true,
          },
        author: {
            type: Schema.Types.ObjectId, ref: 'User',
          },
        gender: {
            type: String,
            enum: ["Action", "Adventure", "Science Fiction", "Comedy", "Non-Fiction","Drama","Fantasy","Musical","Suspense","Horror"]
          },
        photo: {
            type: String,
            default: "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="
          },
        description : {
            type: String,
            required: false,
            trim: true,
          },
        moviecreator : {
            type: String,
            required: false,
            trim: true,
          },
        rating: [Number],
        comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],
    }
)

const Movie = model("Movie", movieSchema);

module.exports = Movie;