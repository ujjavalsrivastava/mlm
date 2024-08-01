import { useEffect, useState } from "react";
import Select from "react-select";

const CustomSelect = ({ options, defaultValue, name, setSelectedOption }) => {
  const [defaultVal, setDefaultVal] = useState(defaultValue);
  useEffect(() => {
    setDefaultVal(defaultValue);
  }, [defaultValue]);

  return (
    <>
      {defaultVal && (
        <Select
          defaultValue={defaultVal}
          isClearable={false}
          isSearchable
          name={name}
          placeholder={`Select ${name}`}
          options={options}
          onChange={(e) => {
            setSelectedOption(e.value);
          }}
        />
      )}
    </>
  );
};

export default CustomSelect;
