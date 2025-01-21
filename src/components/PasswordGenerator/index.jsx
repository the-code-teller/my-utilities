import React, { useEffect, useRef, useState } from "react";
import Button from "../commons/Button";
import usePasswordGenerator from "./usePasswordGenerator";
import { InputBox, InputCheckbox, InputRange } from "../commons/inputs";

const PasswordGenerator = () => {
  const [showCopied, setShowCopied] = useState(false);

  const {
    password,
    length,
    setLength,
    generatePassword,
    inclusions,
    handleInclusionChange,
  } = usePasswordGenerator();

  const inputRef = useRef(null);

  const handleCopy = () => {
    inputRef.current.select(); // Select the text
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // Use modern clipboard API if available
      navigator.clipboard
        .writeText(password)
        .then(() => {
          setShowCopied(true);
          setTimeout(() => {
            setShowCopied(false);
            const input = inputRef.current;
            input.setSelectionRange(password.length, password.length); // Clear selection
          }, 2000);
        })
        .catch((err) => {
          console.error("Clipboard API failed:", err);
        });
    } else {
      // Fallback to document.execCommand for unsupported browsers
      try {
        document.execCommand("copy");
        setShowCopied(true);
        setTimeout(() => {
          setShowCopied(false);
          const input = inputRef.current;
          input.setSelectionRange(password.length, password.length); // Clear selection
        }, 2000);
      } catch (err) {
        console.error("Fallback copy failed:", err);
      }
    }
  };

  useEffect(() => {
    generatePassword();
  }, [length, inclusions, generatePassword]);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-500">
      <div className=" md:w-1/2 sm:rounded-lg p-4 sm:mt-4 bg-white">
        <div className="flex mb-4">
          <InputBox
            type="text"
            value={password}
            className="rounded-l-lg"
            readOnly
            ref={inputRef}
          />
          <Button
            type="button"
            onClick={handleCopy}
            className="rounded-r-lg bg-blue-500 border-blue-500 w-24"
            value={showCopied ? "Copied!" : "Copy"}
          />
        </div>
        <div className="items-center gap-4">
          <InputRange
            label={`Length: ${length}`}
            min={4}
            max={20}
            value={length}
            onChange={setLength}
            className="text-orange-300"
          />
          <div className="flex gap-4">
            {Object.keys(inclusions).map((key) => (
              <InputCheckbox
                key={key}
                name={key}
                label={key}
                checked={inclusions[key].include}
                onChange={handleInclusionChange}
                className="text-orange-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
