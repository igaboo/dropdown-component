import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

import {
  faPlusCircle,
  faFilter,
  faStar,
  faTrash,
  faBan,
  faEllipsis,
  faFolderPlus,
  faAppleWhole,
  faCarrot,
  faCheese,
  faBottleWater,
  faCookie,
  faPenToSquare,
  faRotateRight,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
  const [menuState, setMenuState] = useState({
    menu1: true,
    menu2: true,
    menu3: true,
    menu4: true,
    menu5: true,
    menu6: true,
    menu7: true,
    menu8: true,
    menu9: true,
  });

  const openMenu = (menu) => {
    setMenuState({ ...menuState, [menu]: false });
  };

  const closeMenu = (menu) => {
    setMenuState({ ...menuState, [menu]: true });
  };

  return (
    <main>
      <header>
        <DropdownWrapper
          menu="menu1"
          openMenu={openMenu}
          closeMenu={closeMenu}
          state={menuState.menu1}
          icon={faAppleWhole}
        >
          <DropdownMenu
            buttons={[
              {
                icon: faAppleWhole,
                color: "215, 51, 51",
                text: "Apple",
                func: () => alert("apple function"),
              },
              {
                icon: faCarrot,
                color: "223, 132, 48",
                text: "Carrot",
              },
              {
                icon: faCheese,
                color: "191, 168, 33",
                text: "Cheese",
              },
              {
                icon: faBottleWater,
                color: "11, 59, 156",
                text: "Water",
              },
              {
                icon: faCookie,
                color: "180, 141, 75",
                text: "Cookie",
              },
            ]}
            closeMenu={() => closeMenu("menu1")}
            collapsed={menuState.menu1}
            position="top-left"
          />
        </DropdownWrapper>
        <DropdownWrapper
          menu="menu3"
          openMenu={openMenu}
          closeMenu={closeMenu}
          state={menuState.menu3}
          icon={faFolderPlus}
        >
          <DropdownMenu
            buttons={[
              {
                icon: faPlusCircle,
                text: "Create",
              },
              {
                icon: faPenToSquare,
                text: "Edit",
              },
              {
                icon: faRotateLeft,
                text: "Undo",
              },
              {
                icon: faRotateRight,
                text: "Redo",
              },
              {
                icon: faTrash,
                color: "215, 51, 51",
                text: "Delete",
              },
            ]}
            closeMenu={() => closeMenu("menu3")}
            collapsed={menuState.menu3}
            position="top-center"
          />
        </DropdownWrapper>
        <DropdownWrapper
          menu="menu2"
          openMenu={openMenu}
          closeMenu={closeMenu}
          state={menuState.menu2}
          icon={faStar}
        >
          <DropdownMenu
            buttons={[
              {
                icon: faFilter,
                text: "Filter",
              },
              {
                icon: faTrash,
                text: "Delete",
              },
              {
                icon: faBan,
                text: "Stop",
              },
            ]}
            closeMenu={() => {
              closeMenu("menu2");
            }}
            collapsed={menuState.menu2}
            position="top-right"
          />
        </DropdownWrapper>
      </header>
      <section>
        <h1>This is my popout component example page.</h1>
        <p>
          Try clicking on some of the icons to see the modular settings menus!
        </p>
      </section>
      <footer>
        <DropdownWrapper
          menu="menu4"
          openMenu={openMenu}
          closeMenu={closeMenu}
          state={menuState.menu4}
          icon={faEllipsis}
        >
          <DropdownMenu
            buttons={[
              {
                icon: faBan,
                text: "Stop",
              },
              {
                icon: faBan,
                text: "Stop",
              },
              {
                icon: faBan,
                text: "Stop",
              },
              {
                icon: faBan,
                text: "Stop",
              },
              {
                icon: faBan,
                text: "Stop",
              },
              {
                icon: faBan,
                text: "Stop",
              },
              {
                icon: faBan,
                text: "Stop",
              },
              {
                icon: faBan,
                text: "Stop",
              },
              {
                icon: faBan,
                text: "Stop",
              },
            ]}
            closeMenu={() => {
              closeMenu("menu4");
            }}
            collapsed={menuState.menu4}
            position="bottom-left"
          />
        </DropdownWrapper>
        <DropdownWrapper
          menu="menu5"
          openMenu={openMenu}
          closeMenu={closeMenu}
          state={menuState.menu5}
          icon={faBottleWater}
        >
          <DropdownMenu
            buttons={[
              {
                icon: faBottleWater,
                text: "Water",
              },
            ]}
            closeMenu={() => {
              closeMenu("menu5");
            }}
            collapsed={menuState.menu5}
            position="bottom-center"
          />
        </DropdownWrapper>
        <DropdownWrapper
          menu="menu7"
          openMenu={openMenu}
          closeMenu={closeMenu}
          state={menuState.menu7}
          icon={faBan}
        >
          <DropdownMenu
            buttons={[
              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },
              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },

              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },
              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },
              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },
              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },
              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },
              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },
              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },
              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },
              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },
              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },
              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },
              {
                icon: faBan,
                color: "215, 151, 51",
                text: "Stop",
              },
              {
                icon: faBan,
                color: "215, 151, 51",
                text: "Stop",
              },
              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },
            ]}
            closeMenu={() => {
              closeMenu("menu7");
            }}
            collapsed={menuState.menu7}
            position="bottom-center"
          />
        </DropdownWrapper>
        <DropdownWrapper
          menu="menu9"
          openMenu={openMenu}
          closeMenu={closeMenu}
          state={menuState.menu9}
          icon={faCheese}
        >
          <DropdownMenu
            buttons={[
              {
                icon: faCarrot,
                color: "215, 51, 51",
                text: "Carrot!",
              },
            ]}
            closeMenu={() => {
              closeMenu("menu9");
            }}
            collapsed={menuState.menu9}
            position="bottom-center"
          />
        </DropdownWrapper>
        <DropdownWrapper
          menu="menu8"
          openMenu={openMenu}
          closeMenu={closeMenu}
          state={menuState.menu8}
          icon={faPenToSquare}
        >
          <DropdownMenu
            buttons={[
              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },
              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },
              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },
              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },
            ]}
            closeMenu={() => {
              closeMenu("menu8");
            }}
            collapsed={menuState.menu8}
            position="bottom-center"
          />
        </DropdownWrapper>
        <DropdownWrapper
          menu="menu6"
          openMenu={openMenu}
          closeMenu={closeMenu}
          state={menuState.menu6}
          icon={faCookie}
        >
          <DropdownMenu
            buttons={[
              {
                icon: faBan,
                color: "215, 51, 51",
                text: "Stop",
              },
            ]}
            closeMenu={() => {
              closeMenu("menu6");
            }}
            collapsed={menuState.menu6}
            position="bottom-right"
          />
        </DropdownWrapper>
      </footer>
    </main>
  );
}

const DropdownWrapper = ({ state, menu, icon, openMenu, children }) => {
  return (
    <div className="dropdown-wrapper">
      <FontAwesomeIcon
        icon={icon}
        size="lg"
        style={{
          color: !state && "var(--active)",
        }}
        onClick={() => openMenu(menu)}
      />
      {children}
    </div>
  );
};
