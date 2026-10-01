import { StyleSheet, Text, View } from 'react-native';

export default function Header({ title, name, roll }) {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.studentRow}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>{name}</Text>
      </View>
      <View style={styles.studentRow}>
        <Text style={styles.label}>Roll No</Text>
        <Text style={styles.value}>{roll}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#3730a3',
    borderRadius: 18,
    padding: 20,
    marginBottom: 16,
  },
  title: {
    color: '#ffffff',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 12,
  },
  studentRow: {
    flexDirection: 'row',
    marginTop: 2,
  },
  label: {
    width: 70,
    color: '#c7d2fe',
    fontSize: 14,
  },
  value: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
  },
});
