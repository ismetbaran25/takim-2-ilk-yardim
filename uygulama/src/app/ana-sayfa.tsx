import { Link } from 'expo-router';
import { Alert, Pressable, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function AnaSayfa() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title" style={styles.title}>
        Kampüs Sağlık Asistanı
      </ThemedText>

      <Link href="/cards" asChild>
        <Pressable style={styles.button}>
          <ThemedText style={styles.buttonText}>İlk Yardım Kartları</ThemedText>
        </Pressable>
      </Link>

      <Pressable
        style={styles.button}
        onPress={() => Alert.alert('Soru Sor', 'Bu ekran yakında eklenecek.')}
      >
        <ThemedText style={styles.buttonText}>Soru Sor</ThemedText>
      </Pressable>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24, gap: 16 },
  title: { textAlign: 'center', marginBottom: 16 },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 10,
    minWidth: 240,
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontWeight: '600' },
});