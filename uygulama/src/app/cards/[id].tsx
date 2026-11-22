import { Stack, useLocalSearchParams } from 'expo-router';
import { ScrollView, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { kartlar } from '@/data/kartlar';

export default function KartDetay() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const kart = kartlar.find((k) => String(k.id) === id);

  if (!kart) {
    return (
      <ThemedView style={styles.bos}>
        <ThemedText>Kart bulunamadı.</ThemedText>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.flex}>
      <Stack.Screen options={{ title: kart.durum }} />
      <ScrollView contentContainerStyle={styles.container}>
        <ThemedText type="title">{kart.durum}</ThemedText>
        <ThemedText>{kart.metin}</ThemedText>
        <ThemedText style={styles.kaynak}>Kaynak: {kart.kaynak}</ThemedText>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  container: { padding: 16, gap: 12 },
  bos: { flex: 1, padding: 24 },
  kaynak: { opacity: 0.6, marginTop: 8 },
});