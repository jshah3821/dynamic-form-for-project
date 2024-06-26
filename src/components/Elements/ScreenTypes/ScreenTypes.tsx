import React from "react";
import { CgLaptop } from "react-icons/cg";
import { HiOutlineDeviceTablet } from "react-icons/hi2";
import { VscDeviceMobile } from "react-icons/vsc";
import "./ScreenTypes.css";
import Tooltip from "../CustomTooltip/Tooltip";

export default function ScreenTypes({ resposiveIconClickHandle }) {
  return (
    <div className="preview_responsive_container">
      <Tooltip position="bottom" text={"Desktop"} className="tooltip-position">
        <CgLaptop
          className="prev_resp_icon"
          onClick={resposiveIconClickHandle.bind(this, "prev_desktop")}
        />
      </Tooltip>

      <Tooltip position="bottom" text={"Tablet"} className="tooltip-position">
        <HiOutlineDeviceTablet
          className="prev_resp_icon"
          onClick={resposiveIconClickHandle.bind(this, "prev_tablet")}
        />
      </Tooltip>

      <Tooltip
        position="bottom"
        text={"Mobile Landscape"}
        className="tooltip-position"
      >
        <VscDeviceMobile
          className="prev_resp_icon prev_ls_icon"
          onClick={resposiveIconClickHandle.bind(this, "prev_ls_mobile")}
        />
      </Tooltip>

      <Tooltip
        position="bottom"
        text={"Mobile Portrait"}
        className="tooltip-position"
      >
        <VscDeviceMobile
          className="prev_resp_icon"
          onClick={resposiveIconClickHandle.bind(this, "prev_pt_mobile")}
        />
      </Tooltip>
    </div>
  );
}
