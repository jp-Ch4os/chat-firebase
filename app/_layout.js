import { Slot, useRouter, useSegments } from "expo-router";
import React, { useEffect } from "react";
import { AuthContextPriovider, userAuth } from "../context/authContext";
import "../global.css";

const MainLayout = () => {
  const { isAuthenticaded } = userAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (typeof isAuthenticaded == "undefined") return;
    const inApp = segments[0] == "(app)";
    if (isAuthenticaded && !inApp) {
      router.replace("home");
    } else if (isAuthenticaded == false) {
      router.replace("signIn");
    }
  }, [isAuthenticaded]);
  return <Slot />;
};

export default function RootLayout() {
  return (
    <AuthContextPriovider>
      <MainLayout />
    </AuthContextPriovider>
  );
}
