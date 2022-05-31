import { restaurantData } from "../restaurantData";

export const postAddReviewRoute = {
    path: '??????', //TODO: add path to store a review for a given restaurant
    method: '?????????', //TODO: Replace with correct action
    handler: (req, res) => {

        const id = req.params.id;
        const review = req.body;
        console.log(review);
        restaurantData[id-1].reviews.push(review);
        res.status(200).send("review recorded");
    },
};