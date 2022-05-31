import { restaurantData } from "../restaurantData";

export const getRestaurantRoute = {
    path: '/api/restaurant/:id',
  //  method: '?????????', //TODO: Replace with correct action
    handler: (req, res) => {
        const id=0; //TODO: Pull id from the request 
        res.status(200).send(restaurantData[id-1]);
    },
};