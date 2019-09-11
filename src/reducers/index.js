import { BUY_ITEM } from "../actions";

const initState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  items: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

export const rootReducer = (state = initState, action) => {
  console.log("Root", state, action);
  switch (action.type) {
    case BUY_ITEM:
      const newState = {
        ...state,
        car: { ...state.car, features: [...state.car.features, action.payload] }
      };
      console.log("New", newState);
      return newState;
    default:
      return state;
  }
};
