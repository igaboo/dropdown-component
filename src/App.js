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
  faBookmark,
  faPlus,
  faHeart,
  faHeartCrack,
  faQuestion,
  faPortrait,
  faShare,
  faSquareCaretDown,
  faSquareCaretUp,
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
    menu10: true,
    menu11: true,
    menu12: true,
    menu13: true,
    menu14: true,
    menu15: true,
    menu16: true,
  });

  const openMenu = (menu) => {
    const newMenus = {
      ...menuState,
    };

    for (var i in newMenus) newMenus[i] = true;
    newMenus[menu] = false;

    setMenuState(newMenus);
  };

  const closeMenu = (test) => {
    const newMenus = {
      ...menuState,
    };

    console.log(test);

    for (var i in newMenus) newMenus[i] = true;
    setMenuState(newMenus);
  };

  return (
    <main>
      <header>
        <DropdownWrapper
          menu="menu1"
          openMenu={openMenu}
          closeMenu={closeMenu}
          state={menuState.menu1}
          icon={menuState.menu1 ? faHeart : faHeartCrack}
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
                func: () => alert("carrot function"),
              },
              {
                icon: faCheese,
                color: "191, 168, 33",
                text: "Cheese",
                func: () => alert("cheese function"),
              },
              {
                icon: faBottleWater,
                color: "11, 59, 156",
                text: "Water",
                func: () => alert("water function"),
              },
              {
                icon: faCookie,
                color: "180, 141, 75",
                text: "Cookie",
                func: () => alert("cookie function"),
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
          icon={faSquareCaretDown}
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
            position="top-center"
            iconsOnly
          />
        </DropdownWrapper>
      </header>
      <section>
        <div className="card">
          <header>
            <p className="credit">Made with {"<3"} by Jaden</p>

            <h2>dropdown-component</h2>
            <p>
              This is an example of the{" "}
              <a href="https://github.com/igaboo/dropdown-component">
                dropdown-component.
              </a>
              <br /> It accepts the following parameters:
            </p>
            <br />
            <code>
              <p>buttons = {"[ an array of objects ]"}</p>
              <p>position = " a string "</p>
              <p>iconsOnly = {"{ true || false }"}</p>
              <p>textOnly = {"{ true || false }"}</p>
            </code>
          </header>

          <footer>
            <DropdownWrapper
              menu="menu11"
              openMenu={openMenu}
              closeMenu={closeMenu}
              state={menuState.menu11}
              icon={faEllipsis}
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
                  closeMenu("menu11");
                }}
                collapsed={menuState.menu11}
                position="bottom-left"
              />
            </DropdownWrapper>
            <DropdownWrapper
              menu="menu13"
              openMenu={openMenu}
              closeMenu={closeMenu}
              state={menuState.menu13}
              icon={faPlus}
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
                  closeMenu("menu13");
                }}
                collapsed={menuState.menu13}
                position="bottom-center"
              />
            </DropdownWrapper>
            <DropdownWrapper
              menu="menu14"
              openMenu={openMenu}
              closeMenu={closeMenu}
              state={menuState.menu14}
              icon={faHeart}
            >
              <DropdownMenu
                buttons={[
                  {
                    icon: faHeart,
                    color: "232,84,84",
                    text: "Like",
                  },
                  {
                    icon: faHeartCrack,
                    color: "114,84,232",
                    text: "Hate",
                  },
                ]}
                closeMenu={() => {
                  closeMenu("menu14");
                }}
                collapsed={menuState.menu14}
                position="bottom-center"
              />
            </DropdownWrapper>
            <DropdownWrapper
              menu="menu12"
              openMenu={openMenu}
              closeMenu={closeMenu}
              state={menuState.menu12}
              icon={faBookmark}
            >
              <DropdownMenu
                buttons={[
                  {
                    text: "Favorites",
                  },
                  {
                    text: "Notes",
                  },
                ]}
                closeMenu={() => {
                  closeMenu("menu12");
                }}
                collapsed={menuState.menu12}
                position="bottom-right"
                textOnly
              />
            </DropdownWrapper>
          </footer>
        </div>
        <div className="card">
          <header>
            <p>Example of informational</p>
            <DropdownWrapper
              menu="menu15"
              openMenu={openMenu}
              closeMenu={closeMenu}
              state={menuState.menu15}
              icon={faQuestion}
            >
              <DropdownMenu
                buttons={[
                  {
                    text: "This is an example of an information popup.",
                  },
                ]}
                closeMenu={() => {
                  closeMenu("menu15");
                }}
                collapsed={menuState.menu15}
                position="bottom-right"
                textOnly
              />
            </DropdownWrapper>
          </header>
        </div>
        <div className="card">
          <header>
            <span>
              <h4>Tim Apple</h4>
              <p>@mrapple</p>
            </span>

            <DropdownWrapper
              menu="menu16"
              openMenu={openMenu}
              closeMenu={closeMenu}
              state={menuState.menu16}
              icon={faEllipsis}
            >
              <DropdownMenu
                buttons={[
                  {
                    icon: faShare,
                    text: "Share",
                  },
                  {
                    icon: faPortrait,
                    text: "Follow",
                  },
                  {
                    icon: faBan,
                    color: "215, 51, 51",
                    text: "Block",
                  },
                ]}
                closeMenu={() => {
                  closeMenu("menu16");
                }}
                collapsed={menuState.menu16}
                position="bottom-right"
              />
            </DropdownWrapper>
          </header>
        </div>
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
          icon={faSquareCaretUp}
        >
          <DropdownMenu
            buttons={[
              {
                text: "This could even be used as a popup component.",
              },
            ]}
            closeMenu={() => {
              closeMenu("menu5");
            }}
            collapsed={menuState.menu5}
            position="bottom-center"
            textOnly
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
            iconsOnly
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
            textOnly
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
        className="btn-icon"
        onClick={() => openMenu(menu)}
      />
      {children}
    </div>
  );
};
