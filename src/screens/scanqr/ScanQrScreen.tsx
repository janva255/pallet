import React, { useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import QrLoad from "assets/qrload.gif";
import style from "./style";
import { Button } from "components";
import useCameraPermission from "hooks/useCameraPermission";

const ScanCodeHeader = () => (
  <View style={style.scanPromoContainer}>
    <Text style={style.promoText}>SCAN YOUR PROMO CODE:</Text>
    <Image source={QrLoad} resizeMode="contain" style={style.qrCodeAnimation} />
  </View>
);

export default () => {
  const hasPermission = useCameraPermission();
  const [scanned, setScanned] = useState<boolean>(false);
  const [scannedPromo, setScannedPromo] = useState<string>("#######");

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);
    setScannedPromo(data);
  };

  if (!hasPermission) {
    const warningText =
      hasPermission === null
        ? "Requesting for camera permission"
        : "No access to camera";

    return (
      <View style={style.warningContainer}>
        <Text style={style.warningText}>{warningText}</Text>
      </View>
    );
  }

  return (
    <>
      <ScanCodeHeader />
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && (
          <View style={{ marginTop: 10 }}>
            <Button
              label="Tap to Scan Again"
              onPress={() => setScanned(false)}
            />
          </View>
        )}
      </View>
      <View style={style.scannedPromoContainer}>
        <Text style={style.promoCodeText}>PROMO CODE: {scannedPromo}</Text>
      </View>
    </>
  );
};
