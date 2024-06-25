import React from "react";
import { CgLaptop } from "react-icons/cg";
import { HiOutlineDeviceTablet } from "react-icons/hi2";
import { VscDeviceMobile } from "react-icons/vsc";
import "./ScreenTypes.css";
import { useGetTheme } from "../ScreenContext";
export default function ScreenTypes() {
  const { resposiveIconClickHandle } = useGetTheme();
  return (
    <div className="preview_responsive_container">
      <CgLaptop
        className="prev_resp_icon"
        onClick={resposiveIconClickHandle.bind(this, "prev_desktop")}
      />
      <HiOutlineDeviceTablet
        className="prev_resp_icon"
        onClick={resposiveIconClickHandle.bind(this, "prev_tablet")}
      />
      <VscDeviceMobile
        className="prev_resp_icon prev_ls_icon"
        onClick={resposiveIconClickHandle.bind(this, "prev_ls_mobile")}
      />
      <VscDeviceMobile
        className="prev_resp_icon"
        onClick={resposiveIconClickHandle.bind(this, "prev_pt_mobile")}
      />
    </div>
  );
}
