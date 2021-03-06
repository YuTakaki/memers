import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAuth } from "../../slice/authSlice";

const AuthHeaderBtn = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const auth = useSelector((state) => state.auth.auth);
  const logout = () => {
    dispatch(logoutAuth());
    history.push("/sign-in");
  };
  return (
    <div className="authButtons">
      {auth && <button onClick={logout}>log-out</button>}
    </div>
  );
};

export default AuthHeaderBtn;
