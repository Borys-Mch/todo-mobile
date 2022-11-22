import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

function TodoInput() {
  const [enteredTodoText, setEnteredTodoText] = useState("");

  function todoInputHandler(enteredText) {
    setEnteredTodoText(enteredText);
  }

  function addTodoHandler() {}

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Write your task"
        onChangeText={todoInputHandler}
        value={enteredTodoText}
      />
      <Button title="Create" onPress={addTodoHandler} />
    </View>
  );
}

export default TodoInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "75%",
    marginRight: 8,
    padding: 8,
  },
});
