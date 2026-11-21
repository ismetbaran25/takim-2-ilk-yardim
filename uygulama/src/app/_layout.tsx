// Tüm sayfaların ortak çerçevesi.
// Stack: her sayfa üstte başlık ve "geri" düğmesiyle açılır.
// src/app içine eklenen her dosya (ör. kartlar.tsx) kendiliğinden bir sayfa olur.
// Sayfa başlığını değiştirmek için aşağıya <Stack.Screen name="..." options={{ title: '...' }} /> ekleyin.
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Kampüs Sağlık Asistanı' }} />
      </Stack>
    </ThemeProvider>
  );
}
