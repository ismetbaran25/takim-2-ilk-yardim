import { Link, Stack } from 'expo-router';
import { FlatList, Pressable, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { kartlar } from '@/data/kartlar';

export default function KartListesi() {
  return (
    <>
      <Stack.Screen options={{ title: 'İlk Yardım Kartları' }} />
      <FlatList
        data={kartlar}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Link href={{ pathname: '/cards/[id]', params: { id: String(item.id) } }} asChild>
            <Pressable>
              <ThemedView style={styles.card}>
                <ThemedText type="subtitle">{item.durum}</ThemedText>
                <ThemedText numberOfLines={2}>{item.metin}</ThemedText>
              </ThemedView>
            </Pressable>
          </Link>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  list: { padding: 16, gap: 12 },
  card: { padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#8884', gap: 4 },
});