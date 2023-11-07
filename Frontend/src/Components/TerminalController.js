import React, { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import RepositoryApi from "../APIs/P2pAPI/RepositoryApi";
import ServerServiceApi from "../APIs/ServerAPI/ServerServiceApi";

const TerminalController = (props = {}) => {
  const [data, setData] = useState([
    "Reply from 172.16.0.1 bytes = 42 times=42s TTL m= 64",
    "Reply from 172.16.0.1 bytes = 32 times=24s TTL = 44",
    "Reply from 172.16.0.1 bytes = 42 times=42s TTL m= 64",
  ]);

  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Welcome to the File Sharing Application</TerminalOutput>,
  ]);

  const handleClear = () => {
    setTerminalLineData([
      <TerminalOutput>
        {"Welcome to the File Sharing Application!"}
      </TerminalOutput>,
    ]);
  };

  const handleInput = async (terminalInput) => {
    const inputTokens = terminalInput.split(" ");
    if (inputTokens[0] === "myRepository") {
      try {
        const response = await RepositoryApi.getList();
        const files = response.data.files;
        setTerminalLineData((prevData) => [
          ...prevData,
          <TerminalOutput>{"$ myRepository"}</TerminalOutput>,
          <TerminalOutput>
            {"---------------------------------"}
          </TerminalOutput>,
          ...files.map((file, index) => (
            <TerminalOutput key={index}>{file}</TerminalOutput>
          )),
        ]);
      } catch (error) {
        console.error(error);
      }
    } else if (inputTokens[0] === "communityFile") {
      try {
        const response = await ServerServiceApi.getListFile();
        const files = response.data.currentFiles;
        setTerminalLineData((prevData) => [
          ...prevData,
          <TerminalOutput>{"$ myRepository"}</TerminalOutput>,
          <TerminalOutput>
            {"---------------------------------"}
          </TerminalOutput>,
          ...files.map((fileItem, index) => (
            <TerminalOutput key={index * 100}>{fileItem.file}</TerminalOutput>
          )),
        ]);
      } catch (error) {
        console.error(error);
      }
    } else if (inputTokens[0] === "fetch") {
      console.log(inputTokens[0]);

      try {
        // const response = await RepositoryApi.fetchFile();
        // console.log(response);
        setTerminalLineData((prevData) => [
          ...prevData,
          <TerminalOutput>{`$ fetch ${inputTokens[1]}`}</TerminalOutput>,
          <TerminalOutput>
            {"---------------------------------"}
          </TerminalOutput>,
        ]);
      } catch (error) {
        console.error(error);
      }
    } else if (terminalInput === "clear") {
      handleClear();
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
