import { BarCodeScanner } from "expo-barcode-scanner";
import { useEffect, useState } from "react";

export default () => {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  return hasPermission;
};
