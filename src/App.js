import { useState } from "react";
import Dropdown from "./react-dropdown";

import {
  faPlusCircle,
  faFilter,
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

  const closeMenu = () => {
    const newMenus = {
      ...menuState,
    };

    for (var i in newMenus) newMenus[i] = true;
    setMenuState(newMenus);
  };

  return (
    <main>
      <header>
        <Dropdown
          menu="menu1"
          openMenu={openMenu}
          state={menuState.menu1}
          icon={menuState.menu1 ? faHeart : faHeartCrack}
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
        ></Dropdown>
        <Dropdown
          menu="menu3"
          openMenu={openMenu}
          state={menuState.menu3}
          icon={faFolderPlus}
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
        ></Dropdown>
        <Dropdown
          menu="menu2"
          openMenu={openMenu}
          state={menuState.menu2}
          icon={faSquareCaretDown}
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
        ></Dropdown>
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
            <Dropdown
              menu="menu11"
              openMenu={openMenu}
              state={menuState.menu11}
              icon={faEllipsis}
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
            ></Dropdown>
            <Dropdown
              menu="menu13"
              openMenu={openMenu}
              state={menuState.menu13}
              icon={faPlus}
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
            ></Dropdown>
            <Dropdown
              menu="menu14"
              openMenu={openMenu}
              state={menuState.menu14}
              icon={faHeart}
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
            ></Dropdown>
            <Dropdown
              menu="menu12"
              openMenu={openMenu}
              state={menuState.menu12}
              icon={faBookmark}
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
            ></Dropdown>
          </footer>
        </div>
        <div className="card">
          <header>
            <p>Example of informational</p>
            <Dropdown
              menu="menu15"
              openMenu={openMenu}
              state={menuState.menu15}
              icon={faQuestion}
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
            ></Dropdown>
          </header>
        </div>
        <div className="card">
          <header>
            <span>
              <h4>Tim Apple</h4>
              <p>@mrapple</p>
            </span>

            <Dropdown
              menu="menu16"
              openMenu={openMenu}
              state={menuState.menu16}
              icon={faEllipsis}
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
            ></Dropdown>
          </header>
        </div>
      </section>
      <footer>
        <Dropdown
          menu="menu4"
          openMenu={openMenu}
          closeMenu={() => {
            closeMenu("menu4");
          }}
          collapsed={menuState.menu4}
          position="bottom-left"
          state={menuState.menu4}
          icon={faEllipsis}
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
        ></Dropdown>
        <Dropdown
          menu="menu5"
          openMenu={openMenu}
          state={menuState.menu5}
          icon={faSquareCaretUp}
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
        ></Dropdown>
        <Dropdown
          menu="menu7"
          openMenu={openMenu}
          state={menuState.menu7}
          icon={faBan}
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
        ></Dropdown>
        <Dropdown
          menu="menu9"
          openMenu={openMenu}
          state={menuState.menu9}
          icon={faCheese}
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
        ></Dropdown>
        <Dropdown
          menu="menu8"
          openMenu={openMenu}
          state={menuState.menu8}
          icon={faPenToSquare}
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
        ></Dropdown>
        <Dropdown
          menu="menu6"
          openMenu={openMenu}
          state={menuState.menu6}
          icon={faCookie}
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
        ></Dropdown>
      </footer>
    </main>
  );
}
