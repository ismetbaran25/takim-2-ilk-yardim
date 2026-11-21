// Ana sayfa (kılavuz Adım 10.6 başlangıç kodu).
// Diğer ekranlara giden bağlantılar ekranlar yazıldıkça buraya eklenecek.
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function Ana() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle">Kampüs Sağlık Asistanı</ThemedText>
      <ThemedText>Kampüste ilk yardım kartları ve sağlık birimi bilgisi.</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, gap: 12 },
});
