import InspirationsContainerActionType from "./inspiration.types";

//für mehr InspirationsContainer können hier mehrfach state gesetzt werden

const INITIAL_STATE = {
  expand1: false,
  expand2: false,
  expand3: false,
  //sind da um daten zu filtern
  luxushäuser: { preis: 1000000, bezugsart: "kaufen", haustyp: "haus" },
  wohnungen: { preis: 1000000, bezugsart: "kaufen", haustyp: "wohnung" },
  klassiker: { preis: 300, bezugsart: "mieten", haustyp: "wohnung" }
};

const inspirationsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case InspirationsContainerActionType.TOGGLE_EXPAND1:
      return {
        ...state,
        expand1: true
      };
    case InspirationsContainerActionType.TOGGLE_EXPAND2:
      return {
        ...state,
        expand2: true
      };
    case InspirationsContainerActionType.TOGGLE_EXPAND3:
      return {
        ...state,
        expand3: true
      };
    default:
      return state;
  }
};

export default inspirationsReducer;
