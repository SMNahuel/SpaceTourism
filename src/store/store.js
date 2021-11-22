const initialStore = {
  destination: {
    name: "Moon",
    images: {
      png: "../../../asset/space-tourism-website-main/starter-code/assets/destination/image-moon.png",
      webp: "./assets/destination/image-moon.webp",
    },
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  }
};

function reducer(state = initialStore, action) {
  switch (action.type) {
    case "SELECT_DESTINATION":
      return {
        ...state,
        destination: action.payload,
      };
    default:
      return { ...state };
  }
}

export default reducer;
