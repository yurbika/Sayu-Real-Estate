import img from "../assets/startseiten_hintergrund.jpg";

const theme = {
  colors: {
    lightWhite: "#FFF7DE",
    brown: "#CCA96A",
    lightPurple: "#A69FFF",
    lightPurpleOpacity: "rgba(166, 159, 255, 0.8)",
    darkPurple: "#681899",
    purple: "#A66ACC",
    black: "#4c4e50",
    transBlack: "rgba(76, 78, 80, 0.25)",
    transDarkerBlack: "rgba(76, 78, 80, 0.75)",
    hslaBlack: "hsla(0, 0%, 0%, 0.3)",
    hslaDarkerBlack: "hsla(0, 0%, 0%, 0.5)"
  },

  img: `${img}`,

  suchMinWidth: "min-width: 60vw;",
  suchMaxWidth: "max-width: 65vw;",

  transitionHeight: "transition: height 0.45s ease-in"
};

export default theme;
