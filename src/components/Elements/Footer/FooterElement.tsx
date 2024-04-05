import React, { useState } from 'react'
import { CiFacebook, CiTwitter, CiLinkedin } from "react-icons/ci";
import "./footerStyles.css"


const FooterElement = ({ footerDetails, socialDetails, style }) => {



    function replaceRoute(url) {
        if (url.startsWith('http')) {
            window.open(url, '_blank');
        } else {
            window.location.replace(url);
        }
    }
    return (
        <footer className="footer flex justify-around left-align flex-column" style={style}>
            <div>
                {socialDetails && (
                    <ul className="social-list flex p0 m0 justify-end">
                        {socialDetails?.map((socialLink, socialIndex) => (
                            <li onClick={() => window.open(socialLink?.url)} key={socialIndex} className="li_decoration px1 pointer">
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
            <div className="flex justify-around left-align">
                {footerDetails?.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                        <h3>{section?.title}</h3>
                        <ul className="p0">
                            {section?.links?.map((link, linkIndex) => (
                                <li onClick={() => replaceRoute(link?.linkURL)} className="left-align font-13 pointer" key={linkIndex}>
                                    {link?.linkName}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className="center font-13">Copyright © 2024</div>
        </footer>
    );
}

export default FooterElement