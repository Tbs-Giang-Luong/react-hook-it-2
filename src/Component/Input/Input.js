import { useState } from "react";

const languages = ["HTML", "CSS", "JS", "REACT"];
const Input = () => {
  const [name, setName] = useState("");
  const [check, setCheck] = useState("HTML");
  const [checkbox, setCheckbox] = useState([]);

    const handleChangeName = (e) => {
      setName(e.target.value);
    };
  console.log(checkbox);
  const handleChangeRadio = (item) => {
    setCheck(item);
    console.log(check);
  };

  const handleChangeCheckbox = (item) => {
    setCheckbox((prev) => {
      let isChecked = checkbox?.includes(item);
      if (isChecked) {
        return checkbox.filter((check) => check !== item);
      } else {
        return [...prev, item];
      }
    });
  };

  return (
    <div className="main-input">
      <label>Name</label>
      <input value={name} type="input" onChange={(e) => handleChangeName(e)} />
      {languages &&
        languages.length > 0 &&
        languages.map((item, index) => {
          return (
            <div key={index}>
              <input
                type="radio"
                checked={check === item}
                value={item}
                onChange={() => {
                  handleChangeRadio(item);
                }}
              />
              <>{item}</>
            </div>
          );
        })}

      {languages &&
        languages.length > 0 &&
        languages.map((item, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                checked={checkbox.includes(item)}
                onChange={() => {
                  handleChangeCheckbox(item);
                }}
              />
              {item}
            </div>
          );
        })}
    </div>
  );
};

export default Input;
