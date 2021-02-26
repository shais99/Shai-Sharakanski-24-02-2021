import React, { useState, useEffect } from "react";

export const UserMsg = ({ msg }) => {
  const [currMsg, setCurrMsg] = useState("");

  useEffect(() => {
    setCurrMsg(msg);
    const msgTimeout = setTimeout(() => {
      setCurrMsg("");
    }, 3500);
    return () => {
      clearTimeout(msgTimeout);
    };
  }, [msg]);

  return <>{currMsg && <div className="user-msg">{currMsg}</div>}</>;
};
