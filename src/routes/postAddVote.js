import { restaurantData } from "../restaurantData";

export const postAddVoteRoute = {
    path: '??????', //TODO: add path to add a vote for a given restaurant
    method: '?????????', //TODO: Replace with correct action
    handler: (req, res) => {

        const id = req.params.id;
        restaurantData[id-1].votes = restaurantData[id-1].votes + 1;
        res.status(200).send("vote recorded");
    },
};