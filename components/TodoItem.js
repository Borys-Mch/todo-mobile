import { StyleSheet, View, Text } from "react-native";

function TodoItem(props) {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{props.text}</Text>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#306593",
  },
  todoText: {
    color: "white",
    padding: 8,
  },
});
