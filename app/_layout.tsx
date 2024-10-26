// import { Stack } from "expo-router";

// export default function RootLayout() {
//   return (
//     <Stack>
//       <Stack.Screen name="index"
//        options={{
//         title: 'Sign in',
//         headerShown: false,
//       }} 
//       />
//        <Stack.Screen name="signup"
//        options={{
//         title: 'Sign up',
//         headerShown: false,
//       }} 
//       />
//     </Stack>
//   );
// }













import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'Sign in',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup/index"
        options={{
          title: 'Sign up',
          headerShown: false,
        }}
      />
       <Stack.Screen
        name="login/index"
        options={{
          title: 'Sign up',
          headerShown: false,
        }}
      />
    </Stack>
  );
}
