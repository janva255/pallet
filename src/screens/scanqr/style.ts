import { StyleSheet } from "react-native";

export default StyleSheet.create({
  warningText: { fontFamily: "Regular", fontSize: 20 },
  warningContainer: { paddingHorizontal: 20 },
  promoText: {
    fontFamily: "Bold",
    fontSize: 20,
    width: 80,
    alignSelf: "center",
    marginRight: 20,
  },
  promoCodeText: { fontFamily: "Light", fontSize: 20 },
  scanPromoContainer: {
    paddingHorizontal: 20,
    marginBottom: 0,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#f5f7fb",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  scannedPromoContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: "center",
    backgroundColor: "#f5f7fb",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    marginBottom: 20,
  },
  qrCodeAnimation: {
    width: 200,
    height: 150,
    alignSelf: "center",
    alignItems: "center",
  },
});
