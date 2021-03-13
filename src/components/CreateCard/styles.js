import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    backgroundColor: "#583e9e",
    flex: 1,
  },
  statusBar: {
    backgroundColor: "#583e9e",
    flex: 0,
  },
  content: {
    backgroundColor: "#ffffff",
    flex: 1,
    padding: 20,
  },
  creditCard: {
    display: "flex",
    alignSelf: "center"
  },
  form: {
    alignSelf: "center",
    marginTop: 40
  },
  textInput: {
    marginTop: 20,
    width: 284,
  },
  message: {
    fontSize: 20,
    color: "#555555",
    lineHeight: 24
  }
});
