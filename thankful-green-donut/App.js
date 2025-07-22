import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Icons for UI

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    // Fetch initial tasks
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error(error));
  }, []);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = () => {
    if (!newTask.trim()) {
      Alert.alert("Error", "Task cannot be empty!");
      return;
    }

    const newTodo = {
      id: todos.length + 1,
      title: newTask,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setNewTask(""); // Clear input field
  };

  const toggleCompletion = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const completedCount = todos.filter((todo) => todo.completed).length;
  const notCompletedCount = todos.length - completedCount;

  return (
    <View style={styles.container}>
      {/* Header Section with Counters and Add Button */}
      <View style={styles.headerRow}>
        <View style={styles.counterBox}>
          <Text style={styles.counterText}>Completed</Text>
          <Text style={styles.counterNumber}>{completedCount}</Text>
        </View>
        <View style={styles.counterBox}>
          <Text style={styles.counterText}>Not Completed</Text>
          <Text style={styles.counterNumber}>{notCompletedCount}</Text>
        </View>
      </View>

      {/* Input & Add Task Section */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter new task..."
          value={newTask}
          onChangeText={setNewTask}
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <FontAwesome name="plus" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Todo List */}
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.todoItem,
              { backgroundColor: item.completed ? "green" : "red" },
            ]}
          >
            <Text style={styles.todoText}>
              {item.id}. {item.title}
            </Text>
            <View style={styles.iconContainer}>
              {/* Toggle Completion Button */}
              <TouchableOpacity onPress={() => toggleCompletion(item.id)}>
                <FontAwesome
                  name={item.completed ? "check-circle" : "circle-o"}
                  size={22}
                  color="white"
                  style={styles.icon}
                />
              </TouchableOpacity>

              {/* Delete Button */}
              <TouchableOpacity onPress={() => deleteTodo(item.id)}>
                <FontAwesome name="trash" size={22} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f4f4f4" },

  /* Header Styling */
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "center",
  },
  counterBox: {
    backgroundColor: "#ddd",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    width: "45%",
  },
  counterText: { fontSize: 14, fontWeight: "bold" },
  counterNumber: { fontSize: 18, fontWeight: "bold", color: "#333" },

  /* Input & Add Button Styling */
  inputContainer: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  addButton: {
    backgroundColor: "blue",
    padding: 7,
    borderRadius: 10,
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  /* Todo Styling */
  todoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
  },
  todoText: { fontSize: 16, color: "#fff", flex: 1 },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
  },
});

export default TodoList;
