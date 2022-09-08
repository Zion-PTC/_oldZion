import React, { SelectHTMLAttributes, useEffect, useState } from "react";
import monaco from "./monaco.module.css";
import Editor, { loader } from "@monaco-editor/react";
import { OnChange } from "@monaco-editor/react";
import { CodeEditor } from "@zionstate/ui";

type selectChangeEvent = React.ChangeEvent<HTMLSelectElement>;

const Options = (props: { theme: any }): JSX.Element => {
  let optionsList: [string, string][] = [];
  for (let key in props.theme) {
    optionsList.push([key, props.theme[key]]);
  }

  const element = (value: string, children: string) => (
    <option key={value} value={value}>
      {children}
    </option>
  );
  return <>{optionsList.map((option) => element(option[0], option[1]))}</>;
};

const themes: { [key: string]: string } = {
  active4d: "Active4D",
  "all-hallows-eve": "All Hallows Eve",
  amy: "Amy",
  "birds-of-paradise": "Birds of Paradise",
  blackboard: "Blackboard",
  "brilliance-black": "Brilliance Black",
  "brilliance-dull": "Brilliance Dull",
  "chrome-devtools": "Chrome DevTools",
  "clouds-midnight": "Clouds Midnight",
  clouds: "Clouds",
  cobalt: "Cobalt",
  dawn: "Dawn",
  dreamweaver: "Dreamweaver",
  eiffel: "Eiffel",
  "espresso-libre": "Espresso Libre",
  github: "GitHub",
  idle: "IDLE",
  katzenmilch: "Katzenmilch",
  "kuroir-theme": "Kuroir Theme",
  lazy: "LAZY",
  "magicwb--amiga-": "MagicWB (Amiga)",
  "merbivore-soft": "Merbivore Soft",
  merbivore: "Merbivore",
  "monokai-bright": "Monokai Bright",
  monokai: "Monokai",
  "night-owl": "Night Owl",
  "oceanic-next": "Oceanic Next",
  "pastels-on-dark": "Pastels on Dark",
  "slush-and-poppies": "Slush and Poppies",
  "solarized-dark": "Solarized-dark",
  "solarized-light": "Solarized-light",
  spacecadet: "SpaceCadet",
  sunburst: "Sunburst",
  "textmate--mac-classic-": "Textmate (Mac Classic)",
  "tomorrow-night-blue": "Tomorrow-Night-Blue",
  "tomorrow-night-bright": "Tomorrow-Night-Bright",
  "tomorrow-night-eighties": "Tomorrow-Night-Eighties",
  "tomorrow-night": "Tomorrow-Night",
  tomorrow: "Tomorrow",
  twilight: "Twilight",
  "upstream-sunburst": "Upstream Sunburst",
  "vibrant-ink": "Vibrant Ink",
  "xcode-default": "Xcode_default",
  zenburnesque: "Zenburnesque",
  iplastic: "iPlastic",
  idlefingers: "idleFingers",
  krtheme: "krTheme",
  monoindustrial: "monoindustrial",
};

async function importTheme(theme: string) {
  const monaco = await loader.init();
  const dati = await import(`monaco-themes/themes/${themes[theme]}.json`);
  monaco.editor.defineTheme(theme, dati);
}

const CodeEditorWindow = () => {
  const [value, setValue] = useState("console.log('hello')");
  const [codeChanges, setCodechanges] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [theme, setTheme] = useState("");

  const handleRun = () => {
    setValue(codeChanges);
  };

  const handleLoad = () => {
    alert("not yet implemented");
  };

  const handleSave = () => {
    alert("not yet implemented");
  };

  const handleNote = () => {
    alert("not yet implemented");
  };

  const handleRef = () => {
    alert("not yet implemented");
  };

  const handlePublic = () => {
    alert("not yet implemented");
  };

  const handleSelect1 = (e: selectChangeEvent) => {
    setLanguage(e.target.value);
  };

  const handleSelect2 = async (e: selectChangeEvent) => {
    let target = e.target.value;
    await importTheme(target);
    if (target === "Night Owl") target = "night-owl";
    setTheme(target);
  };

  const handleEditorChange: OnChange = (value?: string) => {
    if (!value) return;
    setCodechanges(value);
    // onChange("code", value);
  };

  function newConsoleLog() {
    var oldLog = console.log;
    var oldError = console.error;
    var logger = document.getElementById("console");
    console.log = function (message) {
      if (typeof message == "object") {
        if (!logger) return;
        logger.innerHTML +=
          (JSON && JSON.stringify ? JSON.stringify(message) : message) + "\n";
      } else {
        if (!logger) return;
        logger.innerHTML += "<p>$ " + message + "</p>";
      }
      oldLog(message);
    };
    console.error = function (message) {
      if (typeof message == "object") {
        if (!logger) return;
        logger.innerHTML +=
          (JSON && JSON.stringify ? JSON.stringify(message) : message) + "\n";
      } else {
        if (!logger) return;
        logger.innerHTML += "<p>$ " + message + "</p>";
      }
      oldError(message);
    };
  }

  let srcDoc = `
    <html>
      <head>
        <link rel="stylesheet" href='https://fonts.googleapis.com/css2?family=Roboto+Mono'>
      </head>
      <body id="console"/>
      <style>
        body {
          border: none;
          margin: 0;
          padding: 0;
          font-family: 'Roboto Mono';
        }
        p {
          border: none;
          margin: 0;
          padding: 0;
        }
      </style>
      <script>
        ${newConsoleLog.toString()}\n
        newConsoleLog()
        ${value}
      </script>
    </html>
  `;

  return (
    <div className={`${monaco.editorContainer}`}>
      <div className={`${monaco.selection}`}>
        <label>language</label>
        <select onChange={handleSelect1}>
          <option value="javascript">javascript</option>
          <option value="typescript">typescript</option>
        </select>
        <label>theme</label>
        <select onChange={handleSelect2}>
          <Options theme={themes}></Options>
        </select>
        <button onClick={handleRun}>run</button>
        <input
          type="file"
          id="file"
          name="fileloader"
          accept=".ts"
          onChange={handleLoad}
        />
        <button onClick={handleSave}>save</button>
        <button onClick={handleNote}>note</button>
        <button onClick={handleRef}>add reference</button>
        <label>public</label>
        <input type="checkbox" onChange={handlePublic}></input>
      </div>
      <div className={`${monaco.editor}`}>
        <CodeEditor
          width={`100%`}
          height="85vh"
          language={language}
          setCodechanges={setCodechanges}
          theme={theme}
          value={value}
        ></CodeEditor>
      </div>
      <iframe
        srcDoc={srcDoc}
        title="output"
        sandbox="allow-scripts"
        frameBorder={0}
        width="100%"
        height="100%"
        className={`${monaco.console}`}
      ></iframe>
    </div>
  );
};
export default CodeEditorWindow;
