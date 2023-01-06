const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const movieSchema = new Schema(
    {
        MovieName: {
            type: String,
            required: true,
            trim: true,
          },
        author: {
            type: Schema.Types.ObjectId, ref: 'User',
          },
          MovieGender: {
            type: String,
            enum: ["Action", "Adventure", "Science Fiction", "Comedy", "Non-Fiction","Drama","Fantasy","Musical","Suspense","Horror"]
          },
        MovieImage: {
            type: String,
            default: "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="
          },
          MovieDescription : {
            type: String,
            required: true,
            trim: true,
          },
        Moviecreator : {
            type: String,
            required: true,
            trim: true,
          },
        
    }
)

const Movie = model("Movie", movieSchema);

module.exports = Movie;