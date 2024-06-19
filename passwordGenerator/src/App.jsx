import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numallowed, setNumallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
  const [pass, setPass] = useState("");

  //useref hook-take reference and perform manipulation
  const passwordRef = useRef(null);

  const passgen = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numallowed) str += "0123456789";
    if (charallowed) str += "@#$%^&**()!";
    let generatedPass = "";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length); //generate a random password
      generatedPass += str.charAt(char);
    }
    setPass(generatedPass);
  }, [length, numallowed, charallowed, setPass]);

  const CopyPassToClipboard = useCallback(() => {
    passwordRef.current?.select();//show the user pass is copied
    //passwordRef.current?.setSelectionRange(0,9);//range of values to be selected
    window.navigator.clipboard.writeText(pass)
  }, [pass]);

  useEffect(() => {
    passgen();
  }, [length, numallowed, charallowed, setPass]);
  return (
    <>
      <br />
      <br />
      <div className="w-full max-w-xl mx-auto p-4 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl text-center text-white mb-4 font-semibold">
          Password Generator
        </h1>
        <div className="flex rounded-lg overflow-hidden bg-gray-700 mb-4">
          <input
            type="text"
            value={pass}
            className="w-full py-2 px-3 bg-gray-700 text-white placeholder-gray-400 outline-none"
            placeholder="Generated Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={CopyPassToClipboard}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md ml-2 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
          >
            Copy
          </button>
        </div>

        <div className="flex gap-x-9">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="text-gray-300">Length: {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numallowed}
              id="numberinput"
              onChange={() => {
                setNumallowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberinput" className="text-gray-300">
              Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charallowed}
              id="charinput"
              onChange={() => {
                setCharallowed((prev) => !prev);
              }}
            />
            <label htmlFor="charinput" className="text-gray-300 inline">
              Special Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
