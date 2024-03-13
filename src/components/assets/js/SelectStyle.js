export const customStyles = {
  control: (provided, state) => ({
    ...provided,
    background: "#fff",
    borderColor: "rgb(107, 137, 169, 0.8)",
    "&:hover": {
      borderColor: "rgb(107, 137, 169, 0.8)",
    },
    minHeight: "32px",
    height: "32px",
    width: "100%",
    fontSize: "12px",
    boxShadow: state.isFocused ? null : null,
  }),

  valueContainer: (provided, state) => ({
    ...provided,
    height: "32px",
    padding: "0 6px",
  }),
  input: (provided, state) => ({
    ...provided,
    margin: "0px",
    width : "15vh",
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "32px",
  }),
  option: (styles, state) => ({
    ...styles,
    color: state.isSelected ? "#FFF" : styles.color,
    transition: "0.4s",
    height: "30px",
    fontSize: "12px",
    zIndex : '0',
    padding: "2px 10px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.125)",
    "&:hover": {
      color: "#000",
      backgroundColor: "#CFE2FF",
    },
  }),
};
