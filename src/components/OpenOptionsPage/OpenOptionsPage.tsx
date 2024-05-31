import React from "react";

const OpenOptionsPage: React.FC = () => {
  const openOptionsPage = () => {
    chrome.runtime.openOptionsPage();
  };
  return <button onClick={openOptionsPage}>Gerenciar regras</button>;
};

export default OpenOptionsPage;
