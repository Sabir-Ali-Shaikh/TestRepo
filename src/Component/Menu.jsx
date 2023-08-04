import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Menu = ({ setEditPop, setEditable, data, delPop, setDelPop }) => {
    console.log(data);
  const [menu, setMenu] = useState(false);
  const refDotMenu = useRef(null);

  const handleClickOutside = (e) => {
    if (refDotMenu.current && !refDotMenu.current.contains(e.target)) {
      setMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, "true");
  }, []);

  return (
    <div  >


      <div
      >
        <button
          
          onClick={() => {
            setEditPop((editPop) => !editPop);
            setEditable(data);
          }}
        >
          Edit
        </button>
          <button
            onClick={() => {
              setDelPop(!delPop);
              setEditable(data);
            }}
          >
            Delete 
          </button>
      </div>
    </div>
  );
};

export default Menu;
