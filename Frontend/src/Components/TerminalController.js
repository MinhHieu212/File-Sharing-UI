import React, { useState } from "react";
import Terminal, { ColorMode, TerminalOutput } from "react-terminal-ui";
import RepositoryApi from "../APIs/P2pAPI/RepositoryApi";
import ServerServiceApi from "../APIs/ServerAPI/ServerServiceApi";
import axios from "axios";

const TerminalController = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Welcome to the File Sharing Application</TerminalOutput>,
  ]);

  const hostName = localStorage.getItem("hostname");
  const updateHostRepoToServer = async () => {
    try {
      const newListFile = await RepositoryApi.getList();
      const fileInfo = {
        hostname: hostName,
        file: newListFile.data.files,
      };
      // call api thong bao den server
      await ServerServiceApi.uploadFileInfo(fileInfo);
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
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
            <TerminalOutput key={index}>
              <p className="w-[400px] flex justify-between">
                <span className="text-blue-400">{file}</span>
              </p>
            </TerminalOutput>
          )),
          <TerminalOutput></TerminalOutput>,
        ]);
      } catch (error) {
        console.error(error);
      }
    } else if (inputTokens[0] === "communityFile") {
      try {
        const response = await ServerServiceApi.getListFile();
        const files = response.data.currentFiles;
        console.log(files);
        setTerminalLineData((prevData) => [
          ...prevData,
          <TerminalOutput>{"$ communityFile"}</TerminalOutput>,
          <TerminalOutput>
            {"---------------------------------"}
          </TerminalOutput>,
          ...files.map((fileItem, index) => (
            <TerminalOutput key={index}>
              <p className="w-[400px] flex justify-between">
                <span className="text-blue-400"> {fileItem.file}</span>
                <span> {fileItem.localIp}</span>
              </p>
            </TerminalOutput>
          )),
          <TerminalOutput></TerminalOutput>,
        ]);
      } catch (error) {
        console.error(error);
      }
    } else if (inputTokens[0] === "publish") {
      if (inputTokens.length < 3) {
        setTerminalLineData((prevData) => [
          ...prevData,
          <TerminalOutput>{"Command Error"}</TerminalOutput>,
        ]);
      } else {
        try {
          const response = await RepositoryApi.publishFile({
            lname: inputTokens[1],
            fname: inputTokens[2],
          });
          console.log("publish Response", response);

          // gưi thong bao den main server
          updateHostRepoToServer();
          // cho thong bao upload thanh cong

          setTerminalLineData((prevData) => [
            ...prevData,
            <TerminalOutput>{`$ publish ${inputTokens[1]} ${inputTokens[2]}`}</TerminalOutput>,
            <TerminalOutput>
              {"---------------------------------"}
            </TerminalOutput>,
            <TerminalOutput>
              <span className="text-[yellow]">Upload file success</span>
            </TerminalOutput>,
          ]);
        } catch (error) {
          console.error(error);
        }
      }
    } else if (inputTokens[0] === "delete") {
      //  check filename trong repo cua client

      console.log("Hello delete");
      try {
        const data = {
          fileName: inputTokens[1],
        };
        console.log("Delete", inputTokens[1]);
        const response = await axios.post(
          "http://localhost:8080/fileInRepo",
          data
        );
        if (response.status === 200) {
          console.log("File deleted successfully");
        }
        console.log("delete esponse", response);

        updateHostRepoToServer();

        setTerminalLineData((prevData) => [
          ...prevData,
          <TerminalOutput>{`$ delete ${inputTokens[1]}`}</TerminalOutput>,
          <TerminalOutput>
            {"---------------------------------"}
          </TerminalOutput>,
          <TerminalOutput>
            <span className="text-[yellow]">Delete file success</span>
          </TerminalOutput>,
        ]);
      } catch (error) {
        console.error(error);
      }
    } else if (inputTokens[0] === "fetch") {
      let localIP = -1;
      let nodeId = -1;
      try {
        const response = await ServerServiceApi.getListFile();
        const files = response.data.currentFiles;

        for (let i = 0; i < files.length; i++) {
          const fileItem = files[i];
          if (fileItem.file === inputTokens[1]) {
            localIP = fileItem.localIp;
            nodeId = fileItem.nodeId;
            break;
          }
        }
      } catch (error) {
        console.error(error);
      }

      if (localIP === -1) {
        setTerminalLineData((prevData) => [
          ...prevData,
          <TerminalOutput>{`$ fetch ${inputTokens[1]}`}</TerminalOutput>,
          <TerminalOutput>
            {"---------------------------------"}
          </TerminalOutput>,
          <TerminalOutput>
            <span className="text-[yellow]">{"FileName not found!"} </span>
          </TerminalOutput>,
        ]);
      } else {
        const fetchParams = {
          clientIp: localIP,
          nodeId: nodeId,
          clientPort: 3000,
          fileName: inputTokens[1],
        };

        try {
          const response = await RepositoryApi.fetchFile(fetchParams);
          console.log(response);

          setTerminalLineData((prevData) => [
            ...prevData,
            <TerminalOutput>{`$ fetch ${inputTokens[1]}`}</TerminalOutput>,
            <TerminalOutput>
              {"---------------------------------"}
            </TerminalOutput>,
            <TerminalOutput>
              <span className="text-[yellow]">{"Fetch file success"} </span>
            </TerminalOutput>,
          ]);
        } catch (error) {
          console.error(error);
        }
      }
    } else if (terminalInput === "myDisk") {
      try {
        const response = await RepositoryApi.getListonDisk();
        const files = response.data.files;
        setTerminalLineData((prevData) => [
          ...prevData,
          <TerminalOutput>{"$ myDisk"}</TerminalOutput>,
          <TerminalOutput>
            {"---------------------------------"}
          </TerminalOutput>,
          ...files.map((file, index) => (
            <TerminalOutput key={index}>
              <p className="w-[400px] flex justify-between  text-blue-400">
                {file}
              </p>
            </TerminalOutput>
          )),
          <TerminalOutput></TerminalOutput>,
        ]);
      } catch (error) {
        console.error(error);
      }
    } else if (terminalInput === "clear") {
      setTerminalLineData([
        <TerminalOutput>
          {"Welcome to the File Sharing Application!"}
        </TerminalOutput>,
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
