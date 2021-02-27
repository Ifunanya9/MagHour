const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(95% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black",
  },
  listItem: {
    cursor: "pointer",
  },
  newChatBtn: {
    borderRadius: "100%",
    width: "60px",
    height: "60px",
    position: "absolute",
    bottom: "0",
    right: "50%",
    transform: "translate(50%, -20%)",
  },
  unreadMessage: {
    color: "red",
    position: "absolute",
    top: "0",
    right: "5px",
  },
});

export default styles;
