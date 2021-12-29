import { Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Button } from "components";
import style from "./style";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { changeNameAction } from "store/actions/user/userActions";

export default () => {
  const dispatch = useDispatch();
  const [editing, setEditing] = useState<boolean>(false);
  const [newName, setNewName] = useState<string>("");

  const saveName = () => {
    dispatch(changeNameAction({ newName }));
    setEditing(false);
  };

  return (
    <>
      {!editing && (
        <View style={style.startEditButtonContainer}>
          <Button
            onPress={() => setEditing(true)}
            icon={<Ionicons name="pencil" color="#fff" size={20} />}
            label="Edit name"
          />
        </View>
      )}
      {editing && (
        <View style={style.nameInputContainer}>
          <Text style={style.nameInputLabel}>Fill user name:</Text>
          <TextInput
            onChangeText={(text) => setNewName(text)}
            style={style.nameInput}
            maxLength={30}
          />
          <Button
            onPress={saveName}
            label="Save"
            disabled={newName.length === 0}
          />
        </View>
      )}
    </>
  );
};
