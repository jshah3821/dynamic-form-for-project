import React from "react";
import { bvLogo } from "../assets/bvLogo64";
import { removeKeyInObject } from "../utils/removeKeyInObject";
import "./headerStyles.css";

const HeaderElement = ({ headerProps }) => {
  function replaceRoute(url) {
    if (url.startsWith("http")) {
      window.open(url, "_blank");
    } else {
      window.location.replace(url);
    }
  }

  const styles = headerProps?.properties?.style;

  const menuItemTextStyle = {
    color: styles?.color,
    fontSize: styles?.fontSize,
    fontStyle: styles?.fontStyle,
    fontFamily: styles?.fontFamily,
    fontWeight: styles?.fontWeight,
    textAlign: styles?.textAlign,
    textDecoration: styles?.textDecoration,
    textTransform: styles?.textTransform,
  };

  const menuTitleTextStyle = {
    color: headerProps?.properties?.headerDetails?.logoStyle?.color,
    fontSize: headerProps?.properties?.headerDetails?.logoStyle?.fontSize,
    fontStyle: styles?.fontStyle,
    fontFamily: styles?.fontFamily,
    fontWeight: styles?.fontWeight,
    textAlign: styles?.textAlign,
    textDecoration: styles?.textDecoration,
    textTransform: styles?.textTransform,
  };

  return (
    <div
      className="header_styles header_container_package flex items-center justify-between"
      style={removeKeyInObject(styles, menuItemTextStyle)}
    >
      <div
        onClick={() => replaceRoute("/")}
        className="flex items-center pointer"
      >
        <img
          src={
            headerProps?.properties?.headerDetails?.imageDetails?.dataURL ||
            bvLogo
          }
          className="icon-30"
          alt="header-logo"
          style={{ objectFit: styles?.objectFit }}
        />
        <p className="camelCase icon-black ml1" style={menuTitleTextStyle}>
          {headerProps.properties.headerDetails.headerLabel || "text"}
        </p>
      </div>
      <div className="flex items-center">
        <ul className="flex items-center camelCase p0 m0 ul-styles">
          {headerProps?.properties?.menuDetails.map((item, i) => {
            return (
              <li
                onClick={() => replaceRoute(item?.link)}
                className="p2 header_link pointer"
                style={menuItemTextStyle}
                key={i}
              >
                {item?.name ?? "Add Menu Item "}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HeaderElement;
