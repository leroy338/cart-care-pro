import { IconSymbol } from '@/components/ui/IconSymbol';
import { useTheme } from '@/contexts/ThemeContext';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface TopBarProps {
  onMenuPress?: () => void;
  onThemeToggle?: () => void;
  isDark?: boolean;
}

export function TopBar({ onMenuPress, onThemeToggle, isDark }: TopBarProps) {
  const { colors } = useTheme();
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { backgroundColor: colors.background, paddingTop: insets.top }]}>
      <View style={styles.leftSection}>
        <IconSymbol name="directions-car" size={24} color={colors.tint} />
        <Text style={[styles.title, { color: colors.text }]}>Cart Care Pro</Text>
      </View>
      
      <View style={styles.rightSection}>
        <TouchableOpacity 
          style={styles.themeButton} 
          onPress={onThemeToggle}
          accessibilityLabel={isDark ? "Switch to light mode" : "Switch to dark mode"}
          accessibilityRole="button"
        >
          <IconSymbol 
            name={isDark ? "light-mode" : "dark-mode"} 
            size={24} 
            color={colors.icon} 
          />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={onMenuPress}
          accessibilityLabel="Menu"
          accessibilityRole="button"
        >
          <IconSymbol name="menu" size={24} color={colors.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  themeButton: {
    padding: 8,
  },
  menuButton: {
    padding: 8,
  },
});
