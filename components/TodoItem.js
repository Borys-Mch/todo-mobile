import { StyleSheet, View, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

function TodoItem(props) {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{props.text}</Text>
      <Pressable
        android_ripple={{ color: "#283e5f" }}
        onPress={props.onDeleteItem.bind(this, props.id)}>
        <Icon
          name="ios-trash-outline"
          color="#ff9090"
          size={25}
          style={[styles.delete]}></Icon>
      </Pressable>
    </View>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#306593",
  },
  todoText: {
    color: "white",
    padding: 8,
  },
  delete: {
    padding: 4,
  },
});
