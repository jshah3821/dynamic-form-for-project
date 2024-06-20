import React, { useState } from "react";
import { bvLogo } from "../assets/bvLogo64";
import { removeKeyInObject } from "../utils/removeKeyInObject";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { hexToRGBA } from "../utils/hexToRGBA";
import "./headerStyles.css";

const HeaderElement = ({ headerProps }) => {
  const [open, setOpen] = useState(false);
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

  const navIconClickHandle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div style={{ position: "relative" }}>
      <div
        className="he_container"
        style={removeKeyInObject(styles, menuItemTextStyle)}
      >
        <div onClick={() => replaceRoute("/")} className="he_title_container">
          <img
            src={
              headerProps?.properties?.headerDetails?.imageDetails?.dataURL ||
              bvLogo
            }
            className="he_logo_img"
            alt="header-logo"
            style={{ objectFit: styles?.objectFit }}
          />
          <p className="he_title_text" style={menuTitleTextStyle}>
            {headerProps.properties.headerDetails.headerLabel || "text"}
          </p>
        </div>
        <div className="he_navlist_container">
          <ul className="he_nav_list">
            {headerProps?.properties?.menuDetails.map((item, i) => {
              return (
                <li
                  onClick={() => replaceRoute(item?.link)}
                  className="he_nav_listitem"
                  style={menuItemTextStyle}
                  key={i}
                >
                  {item?.name ?? "Add Menu Item "}
                </li>
              );
            })}
          </ul>
        </div>
        <div className="he_navicon_container">
          {open ? (
            <RxCross2 className="he_nav_icon" onClick={navIconClickHandle} />
          ) : (
            <FaBars className="he_nav_icon" onClick={navIconClickHandle} />
          )}
        </div>
      </div>
      {open ? (
        <ul
          className="he_mobile_nav_list"
          style={{
            backgroundColor: hexToRGBA(styles?.backgroundColor, 0.6),
          }}
        >
          {headerProps?.properties?.menuDetails.map((item, i) => {
            return (
              <li
                onClick={() => replaceRoute(item?.link)}
                className="he_mobile_nav_listitem"
                style={menuItemTextStyle}
                key={i}
              >
                {item?.name ?? "Add Menu Item "}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
};

export default HeaderElement;
