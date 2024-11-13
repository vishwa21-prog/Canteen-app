import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import "expo-dev-client";
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import HomeScreen from "./screens/HomeScreen";
import AuthScreen from "./screens/AuthScreen";
import { NavigationContainer } from "@react-navigation/native";
import Reservation from "./components/Reservation"; // Import the Reservation component

GoogleSignin.configure({
  webClientId:
    "434414823719-g280rvg2e00n231un11g49p373gbhvl4.apps.googleusercontent.com",
});

export default function App() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  useEffect(() => {
    const updateUserData = async (user) => {
      if (!user) return;

      try {
        // Reference to the user document in Firestore
        const userDocRef = firestore().collection("users").doc(user.uid);

        // Check if the user document already exists
        const userDoc = await userDocRef.get();

        if (!userDoc.exists) {
          // Ensure all properties have default values
          const userData = {
            name: user.displayName || "",
            email: user.email || "",
            photoURL: user.photoURL || "",
            orderHistory: [], // Initialize order history as an empty array
            favourites: [], // Initialize favourites as an empty array
            cart: [], // Initialize cart as an empty array
            lastLogin: firestore.FieldValue.serverTimestamp(),
          };

          // Add the new user document to Firestore
          await userDocRef.set(userData, { merge: true });
          console.log("User data saved to Firestore");
        } else {
          // Update the lastLogin field if the document exists
          await userDocRef.update({
            lastLogin: firestore.FieldValue.serverTimestamp(),
          });
          console.log("User lastLogin updated in Firestore");
        }
      } catch (error) {
        console.error("Error updating user data in Firestore:", error);
      }
    };

    updateUserData(user);
  }, [user]);

  const handleSignOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await auth().signOut();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  if (initializing) return null;

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      {user ? (
        <>
          <HomeScreen user={user} onSignOut={handleSignOut} />
          <Reservation user={user} />
        </>
      ) : (
        <AuthScreen />
      )}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
