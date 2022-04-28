import "./dropdown.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function DropdownMenu({
  buttons,
  closeMenu,
  collapsed,
  position,
}) {
  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          closeMenu();
        }
      }

      document.addEventListener("mouseup", handleClickOutside);
      return () => {
        document.removeEventListener("mouseup", handleClickOutside);
      };
    }, [ref]);
  }

  let styles = {
    transformOrigin: "50% 50%",
  };

  if (position === "top-left") {
    styles = {
      transformOrigin: "0% 0%",
      left: 0,
      marginTop: ".5rem",
    };
  } else if (position === "top-right") {
    styles = {
      transformOrigin: "100% 0%",
      right: 0,
      marginTop: ".5rem",
    };
  } else if (position === "top-center") {
    styles = {
      transformOrigin: "50% 0%",
      left: "-3.5rem",
      marginTop: ".5rem",
    };
  } else if (position === "bottom-left") {
    styles = {
      transformOrigin: "0% 100%",
      left: 0,
      top: "100%",
      transform: "translate(0, calc(-100% + -2rem))",
    };
  } else if (position === "bottom-center") {
    styles = {
      transformOrigin: "50% 100%",
      left: "-3.5rem",
      top: "100%",
      transform: "translate(0, calc(-100% + -2rem))",
    };
  } else if (position === "bottom-right") {
    styles = {
      transformOrigin: "100% 0%",
      right: 0,
      top: "100%",
      transform: "translate(0, calc(-100% + -2rem))",
    };
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
            />
          );
        })}
      </div>
    </div>
  );
}

const Button = ({ text, icon, color, func }) => {
  const changeBackground = (e) => {
    !color
      ? (e.target.style.backgroundColor = "#f2f2f2")
      : (e.target.style.backgroundColor = `rgba(${color}, .1)`);
  };
  const removeBackground = (e) => {
    e.target.style.backgroundColor = "transparent";
  };

  return (
    <button
      style={{
        color: `rgba(${color}, 1)`,
      }}
      onMouseEnter={(e) => changeBackground(e)}
      onMouseLeave={(e) => removeBackground(e)}
      onClick={func}
    >
      <FontAwesomeIcon
        style={{ color: `rgba(${color}, 1)` }}
        icon={icon}
        size="lg"
      />
      {text}
    </button>
  );
};
