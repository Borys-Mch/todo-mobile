import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [todos, setTodos] = useState([]);

  function startAddTodoHandler() {
    setModalVisible(true);
  }

  function endAddTodoHandler() {
    setModalVisible(false);
  }

  function addTodoHandler(enteredTodoText) {
    setTodos((currentTodos) => [
      ...currentTodos,
      { text: enteredTodoText, id: Math.random().toString() },
    ]);
    endAddTodoHandler();
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new Task"
        color="#306593"
        onPress={startAddTodoHandler}
      />
      <TodoInput
        visible={modalVisible}
        onAddTodo={addTodoHandler}
        onCancel={endAddTodoHandler}
      />
      <View style={styles.todoContainer}>
        <FlatList
          data={todos}
          renderItem={(itemData) => {
            return <TodoItem text={itemData.item.text} id={itemData.item.id} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  todoContainer: {
    flex: 5,
  },
});
