import { configureStore } from "@reduxjs/toolkit";
import PostGallery from "./gallerySlice";
import PostOurTeam from "./ourTeamSlice"
import PostReviews from "./reviewsSlice"

export default configureStore({
  reducer: {
    gallery: PostGallery,
    team: PostOurTeam ,
    reviews: PostReviews,
  },
});