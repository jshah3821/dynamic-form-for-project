import React from "react";
import { CiFacebook, CiTwitter, CiLinkedin } from "react-icons/ci";
import "./footerStyles.css";

const FooterElement = ({ footerDetails, socialDetails, style }) => {
  function replaceRoute(url) {
    if (url.startsWith("http")) {
      window.open(url, "_blank");
    } else {
      window.location.replace(url);
    }
  }

  const footersItemTextStyle = {
    color: style?.color,
    fontSize: style?.fontSize,
    fontStyle: style?.fontStyle,
    fontFamily: style?.fontFamily,
    fontWeight: style?.fontWeight,
    textAlign: style?.textAlign,
    textDecoration: style?.textDecoration,
    textTransform: style?.textTransform,
  };
  return (
    <footer className="fe_container" style={style}>
      <div>
        {socialDetails && (
          <ul className="fe_social_container">
            {socialDetails?.map((socialLink, socialIndex) => (
              <li
                onClick={() => window.open(socialLink?.url)}
                key={socialIndex}
                className="li_decoration px1 pointer"
              >
                {socialLink.icon === "CiFacebook" ? (
                  <CiFacebook />
                ) : socialLink.icon === "CiLinkedin" ? (
                  <CiLinkedin />
                ) : socialLink.icon === "CiTwitter" ? (
                  <CiTwitter />
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="fe_content_container">
        {footerDetails?.map((section, sectionIndex) => (
          <ul key={sectionIndex}>
            <h3 style={footersItemTextStyle}>{section?.title}</h3>

            {section?.links?.map((link, linkIndex) => (
              <li
                onClick={() => replaceRoute(link?.linkURL)}
                className="pointer"
                key={linkIndex}
                style={footersItemTextStyle}
              >
                {link?.linkName}
              </li>
            ))}
          </ul>
        ))}
      </div>
      <div className="center" style={footersItemTextStyle}>
        Copyright © 2024
      </div>
    </footer>
  );
};

export default FooterElement;
