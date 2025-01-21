import React, { useEffect, useRef, useState } from "react";
import { camelcaseToTitleConverter } from "../../utils";
import Button from "../commons/Button";
import { InputBox, InputCheckbox, InputRange } from "../commons/inputs";
import Modal from "../commons/Modal";
import usePasswordGenerator from "./usePasswordGenerator";

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
    <Modal
      isOpen={true}
      onClose={() => {}}
      title="Password Generator"
      className="text-2xl font-semibold text-blue-500 border-b border-blue-500"
    >
      <div className="flex mb-4">
        <InputBox
          type="text"
          value={password}
          className="border border-gray-300 p-2 w-full rounded-l-lg text-gray-500"
          readOnly
          ref={inputRef}
        />
        <Button
          type="button"
          onClick={handleCopy}
          className="rounded-r-lg bg-blue-500 border-blue-500 text-white w-24"
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
          className="text-blue-500"
        />
        <div className="flex flex-col sm:flex-row sm:gap-4">
          {Object.keys(inclusions).map((key) => {
            return (
              <InputCheckbox
                key={key}
                name={key}
                label={camelcaseToTitleConverter(key)}
                checked={inclusions[key].include}
                onChange={handleInclusionChange}
                className="text-blue-500"
              />
            );
          })}
        </div>
      </div>
    </Modal>
  );
};

export default PasswordGenerator;
