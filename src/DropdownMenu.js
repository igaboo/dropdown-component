import "./dropdown.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

export default function DropdownMenu({
  buttons,
  closeMenu,
  collapsed,
  position,
  iconsOnly,
  textOnly,
}) {
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        !collapsed && closeMenu();
      }

      document.addEventListener("mouseup", handleClickOutside);
      return () => {
        document.removeEventListener("mouseup", handleClickOutside);
      };
    }, [collapsed]);
  }

  let styles = {
    transformOrigin: "50% 50%",
  };

  if (position === "top-left") {
    styles = {
      transformOrigin: "0% 0%",
      left: "-50%",
      marginTop: ".5rem",
    };
  } else if (position === "top-right") {
    styles = {
      transformOrigin: "100% 0%",
      right: "-50%",
      marginTop: ".5rem",
    };
  } else if (position === "top-center") {
    styles = {
      transformOrigin: "50% 0%",
      transform: "translate(-50%)",
      left: "50%",
      marginTop: ".5rem",
    };
  } else if (position === "bottom-left") {
    styles = {
      transformOrigin: "0% 100%",
      left: "-50%",
      top: "100%",
      transform: "translate(0, calc(-100% + -2rem))",
    };
  } else if (position === "bottom-center") {
    styles = {
      transformOrigin: "50% 100%",
      left: "50%",
      top: "100%",
      transform: "translate(-50%, calc(-100% + -2rem))",
    };
  } else if (position === "bottom-right") {
    styles = {
      transformOrigin: "100% 0%",
      right: "-50%",
      top: "100%",
      transform: "translate(0, calc(-100% + -2rem))",
    };
  }

  if (iconsOnly || textOnly) {
    styles["width"] = "auto";
    styles["alignItems"] = "center";
  } else {
    styles["width"] = "8rem";
  }

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <div className={`wrapper ${!collapsed ? "activated" : "deactivated"}`}>
      <div
        ref={wrapperRef}
        className={`dropdown ${collapsed ? "collapsed" : "expanded"}`}
        style={styles}
      >
        {buttons.map((btn) => {
          return (
            <Button
              key={buttons.indexOf(btn)}
              text={btn.text}
              icon={btn.icon}
              color={btn.color}
              func={btn.func}
              iconsOnly={iconsOnly}
              textOnly={textOnly}
            />
          );
        })}
      </div>
    </div>
  );
}

const Button = ({ text, icon, color, func, iconsOnly, textOnly }) => {
  const changeBackground = (e) => {
    !color
      ? (e.target.style.backgroundColor = "var(--hover")
      : (e.target.style.backgroundColor = `rgba(${color}, .2)`);
  };
  const removeBackground = (e) => {
    e.target.style.backgroundColor = "transparent";
  };

  return (
    <button
      style={{
        color: `rgba(${color}, 1)`,
        justifyContent: `${textOnly || iconsOnly ? "center" : "space-between"}`,
      }}
      onMouseEnter={(e) => changeBackground(e)}
      onMouseLeave={(e) => removeBackground(e)}
      onClick={func}
    >
      {!textOnly && (
        <FontAwesomeIcon
          style={{ color: `rgba(${color}, 1)` }}
          icon={icon}
          size="lg"
        />
      )}
      {!iconsOnly && text}
    </button>
  );
};
