export const SelectDestination = (destination) => {
  return {
    type: "SELECT_DESTINATION",
    payload: destination,
  };
};

export const SelectCrew = (crew) => {
  return {
    type: "SELECT_CREW",
    payload: crew,
  };
};

