import "select2/dist/css/select2.min.css";
import { useEffect, useRef } from "react";
import $ from "jquery";
import select2 from "select2";

function Select2Component({
  options,
  value,
  onChange,
  saveData,
  selectedOption,
}) {
  const selectRef = useRef(null);

  select2();
  useEffect(() => {
    if (
      selectedOption != undefined ||
      selectedOption != null ||
      selectedOption != ""
    ) {
      $(selectRef.current).val(selectedOption).trigger("change");
    }

    $(selectRef.current).select2({
      data: options,
      closeOnSelect: false,
    });
  }, [selectedOption, options]);

  useEffect(() => {
    $("#mySelect").select2();
    // Event listener for when the value changes
    $(selectRef.current).on("change", function (e) {
      onChange(e.target.value);
      saveData((a) => ({
        ...a,
        ["assign_to"]: e.target.value,
      }));
    });

    // Cleanup function to remove Select2 when component unmounts
    return () => {
      $(selectRef.current).select2("destroy");
    };
  }, [options, onChange]);

  useEffect(() => {
    // Update the value in Select2 when prop changes
    $(selectRef.current).val(value).trigger("change");
  }, [value]);

  return (
    <select id="mySelect" ref={selectRef} style={{ width: "100%" }}>
      <option value="">select Option</option>
      {options.map((opt) => (
        <option key={opt.emp_number} value={opt.emp_number}>
          {opt.emp_first_name} {opt.emp_last_name} ({opt.emp_number})
        </option>
      ))}
    </select>
  );
}

export default Select2Component;
