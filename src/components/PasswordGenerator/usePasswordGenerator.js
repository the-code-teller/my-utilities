import { useCallback, useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(4);
  const [inclusions, setInclusions] = useState({
    numbers: {
      sampleSpace: "0123456789",
      include: true,
    },
    characters: {
      sampleSpace: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
      include: true,
    },
    specialCharacters: {
      sampleSpace: "!@#$%^&*()_+",
      include: true,
    },
  });

  const handleInclusionChange = useCallback(
    (e) => {
      const { name, checked } = e.target;
      setInclusions((prev) => ({
        ...prev,
        [name]: {
          ...prev[name],
          include: checked,
        },
      }));
    },
    [setInclusions]
  );

  const generatePassword = useCallback(() => {
    let pass = "";
    let sampleSpace = "";
    for (let key in inclusions) {
      if (inclusions[key].include) {
        sampleSpace += inclusions[key].sampleSpace;
      }
    }

    if (sampleSpace === "") {
      setPassword("");
      return;
    }
    for (let i = 0; i < length; i++) {
      pass += sampleSpace.charAt(
        Math.floor(Math.random() * sampleSpace.length)
      );
    }
    setPassword(pass);
  }, [length, inclusions, setPassword]);

  return {
    password,
    length,
    setLength,
    inclusions,
    handleInclusionChange,
    generatePassword,
  };
};

export default usePasswordGenerator;
