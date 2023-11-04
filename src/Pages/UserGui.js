import React, { useState } from "react";
import ClientGui from "./ClientGui";
import AdminGui from "./AdminGui";

const UserGui = () => {
  const [role, setRole] = useState("Client");
  return (
    <>{role === "Client" ? <ClientGui></ClientGui> : <AdminGui></AdminGui>}</>
  );
};

export default UserGui;
