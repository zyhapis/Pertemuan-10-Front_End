import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import id from "date-fns/locale/id";
import styles from "../../AddMovie/AddMovie.module.css"

const DateInput = ({ date, setDate }) => {
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  registerLocale("id", id);
  setDefaultLocale("id");

  return (
    <div>
      <DatePicker
        id="date"
        selected={date}
        onChange={handleDateChange}
        dateFormat="dd MMMM yyyy"
        locale="id"
        autoComplete="off"
        className={styles.custom__datepicker}
      />
    </div>
  );
};

export default DateInput;
