import React from "react";
import "./headerStyles.css";
import { bvLogo } from "../assets/bvLogo64";

const HeaderElement = ({ headerProps }) => {
  function replaceRoute(url) {
    if (url.startsWith("http")) {
      window.open(url, "_blank");
    } else {
      window.location.replace(url);
    }
  }

  const styles = headerProps?.properties?.style;
  return (
    <div
      className="header_styles header_container_package flex items-center justify-between p05 width-100"
      style={styles}
    >
      <div
        onClick={() => replaceRoute("/")}
        className="flex items-center pointer"
        style={headerProps?.properties?.logoStyle}
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
        <p
          className="camelCase icon-black ml1"
          style={headerProps?.properties?.headerDetails?.logoStyleProp}
        >
          {headerProps.properties.headerDetails.text || "text"}
        </p>
      </div>
      <div className="flex items-center">
        <ul className="flex items-center camelCase p0 m0 ul-styles">
          {headerProps?.properties?.menuDetails.map((item, i) => {
            return (
              <li
                onClick={() => replaceRoute(item?.link)}
                className="p2 header_link pointer"
                style={{ fontSize: styles?.fontSize, color: styles?.color }}
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
