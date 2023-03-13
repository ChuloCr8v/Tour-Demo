import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/SideBar.module.scss";
import Menu from "./Menu";

const SideBar = () => {
  const [collapsedSideBar, setCollapseSideBar] = useState(false);

  return (
    <div
      className={collapsedSideBar ? styles.collapsed_sidebar : styles.side_bar}
    >
      <div className={styles.logo_wrapper}>
        <Image
          src="/assets/images/logo.png"
          height="40"
          width="70"
          alt="mtn"
          className={styles.logo}
        />
        <Image
          src="/assets/images/icons/collapseIcon.svg"
          height="40"
          width="70"
          alt="mtn"
          className={styles.collapse_icon}
          onClick={() => setCollapseSideBar(!collapsedSideBar)}
        />
      </div>
      <div className={styles.menu_wrapper}>
        <Menu collapsedSideBar={collapsedSideBar} />
      </div>
    </div>
  );
};

export default SideBar;
