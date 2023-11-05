import React, { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";

const TerminalController = (props = {}) => {
  const [data, setData] = useState([
    "Reply from 172.16.0.1 bytes = 42 times=42s TTL m= 64",
    "Reply from 172.16.0.1 bytes = 32 times=24s TTL = 44",
    "Reply from 172.16.0.1 bytes = 42 times=42s TTL m= 64",
  ]);

  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Welcome to the File Sharing Application</TerminalOutput>,
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

  // Note:
  // terminalLineData nhận vào một mạng dữ liêu, mỗi dòng trong mảng sẽ là một TerminalOutput

  const handleClear = () => {
    setTerminalLineData([
      <TerminalOutput>
        {"Welcome to the File Sharing Application!"}
      </TerminalOutput>,
    ]);
  };

  const handleInput = (terminalInput) => {
    console.log(`New terminal input received: '${terminalInput}'`);

    // Thêm dữ liệu đầu vào từ prompt vào danh sách terminalLineData
    if (terminalInput === "clear") {
      handleClear();
    } else if (terminalInput === "ping") {
      setTerminalLineData((prevData) => [
        ...prevData,
        ...data.map((line, index) => (
          <TerminalOutput key={index}>{line}</TerminalOutput>
        )),
      ]);
    } else {
      setTerminalLineData((prevData) => [
        ...prevData,
        <TerminalOutput>{terminalInput}</TerminalOutput>,
      ]);
    }
  };

  return (
    <div className="container h-full rounded-lg overflow-hidden">
      <Terminal
        name="User Terminal"
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
