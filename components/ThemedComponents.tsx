import { useTheme } from '@/contexts/ThemeContext';
import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';

interface ThemedViewProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export function ThemedView({ children, style }: ThemedViewProps) {
  const { colors } = useTheme();
  return (
    <View style={[{ backgroundColor: colors.background }, style]}>
      {children}
    </View>
  );
}

interface ThemedTextProps {
  children: React.ReactNode;
  style?: TextStyle;
  type?: 'title' | 'subtitle' | 'body' | 'caption';
}

export function ThemedText({ children, style, type = 'body' }: ThemedTextProps) {
  const { colors } = useTheme();
  
  const textStyles = {
    title: { fontSize: 24, fontWeight: 'bold' as const },
    subtitle: { fontSize: 18, fontWeight: '600' as const },
    body: { fontSize: 16 },
    caption: { fontSize: 14, opacity: 0.7 },
  };

  return (
    <Text style={[{ color: colors.text, ...textStyles[type] }, style]}>
      {children}
    </Text>
  );
} 