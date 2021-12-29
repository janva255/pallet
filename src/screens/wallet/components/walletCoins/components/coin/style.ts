import { StyleSheet } from "react-native";

export default StyleSheet.create({
  coinContainer: { flexDirection: "row" },
  coinNameContainer: {
    flex: 1,
    backgroundColor: "#f6f4fc",
    marginTop: 10,
    justifyContent: "center",
    paddingLeft: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  coinInvestedContainer: {
    flex: 2,
    backgroundColor: "#0a0b21",
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginTop: 10,
    borderRadius: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
  coinNameText: { fontFamily: "Bold", color: "#000", fontSize: 16 },
  coinValueText: { fontFamily: "Bold", color: "#fff", fontSize: 16 },
});
