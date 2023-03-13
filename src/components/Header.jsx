import React from "react";
import styles from "../styles/Header.module.scss";
import ProfileMenu from "./ProfileMenu";
import { useState } from "react";
import JoyRide from "react-joyride";

const Header = () => {
  const [showProfileMenu, setShowprofileMenu] = useState(false);

  const TOUR_STEPS = [
    {
      target: "#bell",
      content: "Click on the bell Icon to view your pending notifications.",
    },
    {
      target: "#arrow",
      content: "Click on the arrow icon to view your profile menu",
    },
  ];

  return (
    <header className={styles.header}>
      <JoyRide
        steps={TOUR_STEPS}
        continuous={true}
        styles={{
          tooltipContainer: {
            textAlign: "left",
          },
          buttonNext: {
            width: "70px",
            backgroundColor: "#ffc000",
            color: "#000",
          },
          buttonBack: {
            marginRight: 10,
            color: "#595959",
          },
        }}
      />
      <div className={styles.left}>
        <img
          src="/assets/images/icons/bell.svg"
          id="bell"
          alt="notifications"
        />
        <div className={styles.profile_wrapper}>
          <img src="/assets/images/avatar.png" alt="avatar" />
          <p className={styles.username}>Modesta Ekeh</p>
          <img
            src="/assets/images/icons/chevron.svg"
            alt="menu"
            onClick={() => setShowprofileMenu(!showProfileMenu)}
            id="arrow"
          />
          {showProfileMenu && (
            <div className={styles.profile_menu}>
              <ProfileMenu />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
