import React from "react";

const ImmoPreview = ({ immo }) => {
  let haustyp = "";
  if (!!immo["haus"]) haustyp = "haus";
  else if (!!immo["wohnung"]) haustyp = "wohnung";
  else return null;
  return (
    <div className="container">
      <div className="bild-preview-container">
        <img
          src={
            immo[haustyp]["bilder"]["titelbild"] +
            "&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max"
          }
          alt={haustyp}
        />
      </div>
      <div className="beschreibung"></div>
    </div>
  );
};
