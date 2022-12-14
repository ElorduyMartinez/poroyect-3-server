const { Schema, model } = require("mongoose");
const seriesSchema = new Schema (
    {
        SerieName: {
            type: String,
            required: true,
            trim: true,
          },
         SerieImage: {
            type: String,
            default: "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="
          },
         SerieDescription : {
            type: String,
            required: true,
            trim: true,
          },
         SerieCreator : {
            type: String,
            required: true,
            trim: true,
          },
         SerienumberOfChapters:{
            type: Number,
            required: true,
            trim: true,
            },
         SerienumberOfSeason:{
            type: Number,
            required: true,
            trim: true,
            },
         author: {
            type: Schema.Types.ObjectId, ref: 'User',
            },

        
    }
)

const Series = model("Series", seriesSchema);

module.exports = Series;