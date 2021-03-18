import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/appContext";
import { useHistory } from "react-router-dom";

export default function UserButton(props) {
  const { setName } = useContext(AppContext);
  const history = useHistory();
  const setHistory = (name) => {
    setName(name);
    history.push({
      pathname: `/account/${name}`,
      state: { account: name },
    });
  };

  return (
    <button className="user" onClick={() => setHistory(props.children)}>
      {props.children}
    </button>
  );
}
