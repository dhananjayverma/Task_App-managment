import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  title: {
    fontFamily: "Montserrat-Regular",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "600",
  },
  description: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    textAlign: "center",
    color: "gray",
  },
});

export default styles;
