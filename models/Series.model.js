const { Schema, model } = require("mongoose");
const seriesSchema = new Schema (
    {
        title: {
            type: String,
            required: false,
            trim: true,
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
         seriecreator : {
            type: String,
            required: false,
            trim: true,
          },
         numberofchapters:{
            type: Number,
            required: false,
            trim: true,
            },
         numberofseason:{
            type: Number,
            required: false,
            trim: true,
            },
         author: {
            type: Schema.Types.ObjectId, ref: 'User',
            },

        rating: [Number],
         comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}],

    }
)

const Series = model("Series", seriesSchema);

module.exports = Series;