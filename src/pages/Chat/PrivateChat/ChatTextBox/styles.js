const styles = (theme) => ({
  sendBtn: {
    color: "black",
    cursor: "pointer",
    "&:hover": {
      color: "gray",
    },
  },

  chatTextBoxContainer: {
    position: "absolute",
    bottom: "15px",
    left: "315px",
    boxSizing: "border-box",
    overflow: "auto",
    width: "calc(100% - 300px - 50px)",
    justifyContent: "center",
    alignItems: "center",
  },

  chatTextBox: {
    width: "calc(100% - 25px)",
    border: "none",
    outline: "none",
    borderRadius: "10px",
  },
});

export default styles;
