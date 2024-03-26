import { StoreState, Action} from "../../utils/types";
import { GET_FOOD, GET_PAIS, SIGNIN_USER_EMAIL, SIGNUP_USER_EMAIL } from "../actions/ActionsTypes";

const initialState: StoreState = {
  platos: [],
  filtros: [],
  pais: "Todos",
  tipo: "Todos",
  user: null
};

const Reducer = (
  state: StoreState = initialState,
  action: Action
): StoreState => {
  switch (action.type) {
    case GET_FOOD:
      console.log("hpña");
      return {
        ...state,
        platos: action.payload,
        filtros: action.payload,
      };
    case GET_PAIS:
      console.log(action.payload);
      let final = state.platos;
      if (
        action.payload === "Todos" ||
        action.payload === "Argentina" ||
        action.payload === "Colombia" ||
        action.payload === "Mexico" ||
        action.payload === "Ecuador"
      ) {
        state.pais = action.payload;
      }
      if (
        action.payload === "Todos" ||
        action.payload === "plato fuerte" ||
        action.payload === "postre" ||
        action.payload === "plato vegano"
      ) {
        state.tipo = action.payload;
      }
      if (action.payload === "Todos") {
      } else if (state.pais === "Argentina") {
        final = final.filter((character) => character.origen === "Argentina");
      } else if (state.pais === "Mexico") {
        final = final.filter((character) => character.origen === "Mexico");
      } else if (state.pais === "Colombia") {
        final = final.filter((character) => character.origen === "Colombia");
      } else if (state.pais === "Ecuador") {
        final = final.filter((character) => character.origen === "Ecuador");
      }
      if (state.tipo === "Todos") {
      } else if (state.tipo === "plato fuerte") {
        final = final.filter((character) => character.tipo === "plato fuerte");
      } else if (state.tipo === "postre") {
        final = final.filter((character) => character.tipo === "postre");
      } else if (state.tipo === "plato vegano") {
        final = final.filter((character) => character.tipo === "plato vegano");
      }
      return {
        ...state,
        filtros: final,
      };
    case SIGNUP_USER_EMAIL:
      return {
        ...state,
        user: action.payload,
      };
    // case SIGNIN_USER_EMAIL:
    //   return {
    //     ...state,
    //     user: action.payload,
    //   }
    default:
      return state;
  }
};

export default Reducer;
