const { Schema, model } = require("mongoose");
const podcastSchema = new Schema (
    {
        PodcastName: {
            type: String,
            required: true,
            trim: true,
          },
        PodcastImage: {
            type: String,
            default: "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="
          },
        PodcastDescription : {
            type: String,
            required: true,
            trim: true,
          },
        PodcastnumberOfChapters:{
            type: Number,
            required: true,
            trim: true,
            },
        PodcastaverageDuration: {
            type: Number,
            required: true,
            trim: true,
            },
        Podcastauthors : {
            type: String,
            required: true,
            trim: true,
            },
        author: {
            type: Schema.Types.ObjectId, ref: 'User',
            },
        

    }
)

const Podcast = model("Podcast", podcastSchema);

module.exports = Podcast;