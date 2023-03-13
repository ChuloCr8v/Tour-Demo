import React from "react";
import styles from "@/styles/ProfileMenu.module.scss";

const ProfileMenu = () => {
  const menuItems = [
    {
      title: "Change Password",
      icon: "/assets/images/icons/changePassword.png",
    },
    {
      title: "Logout",
      icon: "/assets/images/icons/logout.png",
    },
  ];

  return (
    <ol className={styles.profile_menu}>
      {menuItems.map((menuItem) => (
        <li key={menuItem.title} className={styles.menu_item} id="one">
          <img
            src={menuItem.icon}
            alt={menuItem.title}
            width="23px"
            height="20px"
          />
          <p className={styles.changePasswordText}>{menuItem.title}</p>
        </li>
      ))}
    </ol>
  );
};

export default ProfileMenu;
