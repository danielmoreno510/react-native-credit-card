import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 200,
    width: 320,
    backgroundColor: "#583e9e",
    borderRadius: 14,
    padding: 14,
  },
  content: {
    marginTop: 10,
  },
  firstSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  images: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  firstImage: {
    width: 30,
    height: 24,
    borderRadius: 4,
  },
  secondImage: {
    width: 24,
    height: 14,
    marginLeft: 4,
  },
  creditCard: {
    color: "#ffffff",
    fontSize: 20,
  },
  number: {
    color: "#ffffff",
    fontSize: 26,
    marginTop: 22,
  },
  secondSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  name: {
    color: "#ffffff",
    fontSize: 18,
    marginTop: 18,
  },
  validThru: {
    color: "#ffffff",
    fontSize: 12,
    marginTop: 18,
  },
  date: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
    marginTop: -6,
  },
  ccvSection: {
    width: "100%",
    height: 40,
    backgroundColor: "#000000",
  },
  ccvContent: {
    paddingHorizontal: 22,
    paddingTop: 12,
  },
  lines: {
    width: 240,
    height: 38,
    backgroundColor: "#ffffff",
    marginLeft: 38,
  },
  line: {
    width: "100%",
    height: 2,
    backgroundColor: "#cccccc",
    marginTop: 6,
  },
  ccv: {
    marginTop: -36,
    fontSize: 24,
    marginRight: 194,
  },
});
