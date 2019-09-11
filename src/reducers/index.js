import { BUY_ITEM } from "../actions";
import { REM_ITEM } from "../actions";

const initState = {
  additionalPrice: 0,
  car: {
    price: 1000, //26395,
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
  //   console.log("Root", state, action);
  switch (action.type) {
    case BUY_ITEM:
      let newFeat = [];
      let app = 0;
      if (state.car.features.indexOf(action.payload) > -1) {
        newFeat = state.car.features;
      } else {
        newFeat = [...state.car.features, action.payload];
        app = action.payload.price;
      }

      return {
        ...state,
        additionalPrice: app + state.additionalPrice,
        car: {
          ...state.car,
          features: newFeat
        }
      };
    case REM_ITEM:
      const newRemFeat = state.car.features.filter(item => {
        if (String(item.id) !== String(action.payload.id)) {
          return item;
        }
      });

      //   console.log("New", newFeat);
      return {
        ...state,
        additionalPrice: state.additionalPrice - action.payload.price,
        car: { ...state.car, features: newRemFeat }
      };
    default:
      return state;
  }
};
