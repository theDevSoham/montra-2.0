import { Stack } from "expo-router";
import { RecoilRoot } from "recoil";

const RootLayout = () => {
  return (
    <RecoilRoot>
      <Stack>
        <Stack.Screen name="index" />
        <Stack.Screen name="about" />
      </Stack>
    </RecoilRoot>
  );
};

export default RootLayout;
