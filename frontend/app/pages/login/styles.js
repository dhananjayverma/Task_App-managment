import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#E5E4E2",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 33,
    fontFamily: "Montserrat-Regular",
    textAlign: "center",
    fontWeight: "600",
  },
  card: {
    borderWidth: 2,
    padding: 5,
    width: "80%",
    marginInline: "auto",
    marginTop: 10,
    borderRadius: 20,
    padding: 20,
    borderBottomWidth: 5,
    borderLeftWidth: 5,
  },
  subCard: {
    marginTop: 5,
  },
  label: {
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
  },
  input: {
    fontFamily: "Montserrat-Regular",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "black",
    marginTop: 20,
    padding: 5,
    borderRadius: 10,
  },
  buttonText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 25,
    color: "white",
    textAlign: "center",
  },
  footerText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    marginTop: 20,
    textAlign: "center",
  },
});

export default styles;
