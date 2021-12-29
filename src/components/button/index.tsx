import { ReactElement } from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import style from "./style";

interface Props extends TouchableOpacityProps {
  label?: string;
  icon?: ReactElement;
}

export const Button = ({ label, icon, onPress, disabled }: Props) => {
  return (
    <TouchableOpacity
      style={[style.button, disabled ? style.buttonDisabled : null]}
      onPress={onPress}
    >
      {icon}
      {label && (
        <Text
          style={[style.buttonText, icon ? style.buttonTextWithIcon : null]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};
