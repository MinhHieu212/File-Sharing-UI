import React, { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";

const TerminalController = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Welcome to the File Sharing UI Demo!</TerminalOutput>,
  ]);

  // const fetchDataFromBackend = async () => {
  //   try {
  //     // Gửi yêu cầu đến API của máy chủ BE
  //     const response = await fetch("https://your-backend-api-url/data"); // Thay thế URL của API thật

  //     if (response.ok) {
  //       const data = await response.json();
  //       // Thêm dữ liệu từ BE vào danh sách terminalLineData
  //       setTerminalLineData((prevData) => [
  //         ...prevData,
  //         ...data.map((line, index) => (
  //           <TerminalOutput key={index}>{line}</TerminalOutput>
  //         )),
  //       ]);
  //     } else {
  //       console.error("Failed to fetch data from the backend.");
  //     }
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  // useEffect(() => {
  //   // Gọi hàm fetchDataFromBackend khi thành phần được tải
  //   fetchDataFromBackend();
  // }, []);

  const handleInput = (terminalInput) => {
    // Xử lý dữ liệu đầu vào từ prompt ở đây
    console.log(`New terminal input received: '${terminalInput}'`);

    // Thêm dữ liệu đầu vào từ prompt vào danh sách terminalLineData
    setTerminalLineData((prevData) => [
      ...prevData,
      <TerminalOutput>{terminalInput}</TerminalOutput>,
    ]);
  };

  return (
    <div className="container h-full rounded-lg overflow-hidden">
      <Terminal
        name="Client Terminal"
        colorMode={ColorMode.Dark}
        onInput={handleInput}
        height="687px"
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
};

export default TerminalController;
