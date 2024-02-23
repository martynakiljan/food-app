/** @format */
import { useState, useEffect } from "react";

const LoginPanel = () => {
  const [ip, setIp] = useState();

  useEffect(() => {
    getIp();
  }, []);

  const getIp = async () => {
    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();
    setIp(data.ip);
  };

  return (
    <>
      <h1>User</h1>
      <p>Your IP is {ip}.</p>
    </>
  );
};

export default LoginPanel;
