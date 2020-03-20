import img from "../assets/home_background.jpg";

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
    hslaDarkerBlack: "hsla(0, 0%, 0%, 0.5)",
    hslaLightBlack: "hsla(0,0%,0%,0.1)"
  },

  img: `${img}`,

  unsplash: {
    normalResolution:
      "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=450&h=450&fit=crop"
  }
};

export default theme;
