import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    flexDirection: "row",
    backgroundColor: "#4d6bf9",
    borderRadius: 15,
    padding: 15,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonDisabled: {
    backgroundColor: "#cfd7fa",
  },
  buttonText: {
    fontFamily: "Bold",
    color: "#fff",
    fontSize: 16,
  },
  buttonTextWithIcon: {
    marginLeft: 10,
  },
});
