import {crudMiddleware} from "redux-easy2-crud";
import buyOneGetOneFree from "../middlewares/BuyOneGetOneFree";
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "../reducers";

export default function configureStore() {
  const enhancer = compose(
    applyMiddleware(crudMiddleware, buyOneGetOneFree)
  );

  let store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    enhancer
  );
  return store;
};
