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

function App() {
  const [menuState, setMenuState] = useState({
    menu1: true,
    menu2: true,
    menu3: true,
    menu4: true,
    menu5: true,
    menu6: true,
    menu7: true,
    menu8: true,
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
        <div className="dropdown-wrapper">
          <FontAwesomeIcon
            icon={faAppleWhole}
            size="lg"
            style={{ color: !menuState.menu1 && "var(--active)" }}
            onClick={() => openMenu("menu1")}
          />
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
                color: "219, 199, 15",
                text: "Cheese",
              },
              {
                icon: faBottleWater,
                color: "83, 165, 202",
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
        </div>
        <div className="dropdown-wrapper">
          <FontAwesomeIcon
            icon={faFolderPlus}
            size="lg"
            style={{ color: !menuState.menu3 && "var(--active)" }}
            onClick={() => openMenu("menu3")}
          />
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
        </div>
        <div className="dropdown-wrapper">
          <FontAwesomeIcon
            icon={faEllipsis}
            size="lg"
            style={{ color: !menuState.menu2 && "var(--active)" }}
            onClick={() => openMenu("menu2")}
          />

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
        </div>
      </header>
      <section>
        <h1>This is my popout component example page.</h1>
        <p>
          Try clicking on some of the icons to see the modular settings menus!
        </p>
      </section>
      <footer>
        <div className="dropdown-wrapper">
          <FontAwesomeIcon
            icon={faEllipsis}
            size="lg"
            style={{ color: !menuState.menu4 && "var(--active)" }}
            onClick={() => openMenu("menu4")}
          />

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
        </div>
        <div className="dropdown-wrapper">
          <FontAwesomeIcon
            icon={faBottleWater}
            size="lg"
            style={{ color: !menuState.menu5 && "var(--active)" }}
            onClick={() => openMenu("menu5")}
          />

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
        </div>
        <div className="dropdown-wrapper">
          <FontAwesomeIcon
            icon={faBan}
            size="lg"
            style={{ color: !menuState.menu7 && "var(--active)" }}
            onClick={() => openMenu("menu7")}
          />

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
        </div>
        <div className="dropdown-wrapper">
          <FontAwesomeIcon
            icon={faBan}
            size="lg"
            style={{ color: !menuState.menu8 && "var(--active)" }}
            onClick={() => openMenu("menu8")}
          />

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
        </div>
        <div className="dropdown-wrapper">
          <FontAwesomeIcon
            icon={faBan}
            size="lg"
            style={{ color: !menuState.menu6 && "var(--active)" }}
            onClick={() => openMenu("menu6")}
          />

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
        </div>
      </footer>
    </main>
  );
}

export default App;
