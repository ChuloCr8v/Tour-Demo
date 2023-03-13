import Image from "next/image";
import React from "react";
import styles from "../styles/Menu.module.scss";
import JoyRide from "react-joyride";

const Menu = (props) => {
  const menuData = [
    {
      text: "Performance Reports",
      iconActive: "/assets/images/icons/performanceReportActive.png",
      icon: "/assets/images/icons/performanceReport.png",
      id: "one",
    },
    {
      text: "Project Status",
      iconActive: "/assets/images/icons/projectStatusActive.png",
      icon: "/assets/images/icons/projectStatus.png",
      id: "two",
    },
    {
      text: "Incident Management",
      iconActive: "/assets/images/icons/incidentManagementActive.png",
      icon: "/assets/images/icons/incidentManagement.png",
      id: "three",
    },
    {
      text: "Customer Lists",
      iconActive: "/assets/images/icons/customerListsActive.svg",
      icon: "/assets/images/icons/customerLists.svg",
      id: "four",
    },
  ];

  const TOUR_STEPS = [
    {
      target: "#one",
      content: "Click on this item to view your perfomance reports",
    },
    {
      target: "#two",
      content: "Click on this item to view project status",
    },
    {
      target: "#three",
      content: "Click on this to view incident management",
    },
    {
      target: "#four",
      content: "Click on this to view your customer lists",
    },
  ];

  return (
    <nav className={styles.nav}>
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
      <ol
        className={
          props.collapsedSideBar
            ? styles.collapsed_menu_items
            : styles.menu_items
        }
      >
        {menuData.map((menuItem, index) => (
          <li className={styles.menu_item} id={menuItem.id} key={index}>
            <div className={styles.menu_icon_wrapper}>
              <Image
                src={menuItem.iconActive}
                width="20"
                height="20"
                alt={menuItem.text}
                className={styles.icon_active}
              />
              <Image
                src={menuItem.icon}
                width="20"
                height="20"
                alt={menuItem.text}
                className={styles.icon_inactive}
              />
            </div>
            <p
              className={
                props.collapsedSideBar
                  ? styles.collapsed_menu_text
                  : styles.menu_text
              }
            >
              {menuItem.text}
            </p>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Menu;
