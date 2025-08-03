import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { useTheme } from '@/contexts/ThemeContext';

interface MaintenanceTask {
  id: string;
  title: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
  description: string;
}

interface GolfScore {
  id: string;
  club: string;
  date: string;
  score: number;
  par: number;
}

interface NewsArticle {
  id: string;
  title: string;
  source: string;
  date: string;
  summary: string;
}

interface FriendScore {
  id: string;
  name: string;
  club: string;
  score: number;
  date: string;
}

interface DataState {
  maintenance: MaintenanceTask[];
  scores: GolfScore[];
  news: NewsArticle[];
  friends: FriendScore[];
  loading: boolean;
}

// Mock data functions - simulate API calls
const fetchMaintenanceData = (): Promise<MaintenanceTask[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          title: 'Battery Check & Charge',
          dueDate: '2024-01-15',
          priority: 'high',
          description: 'Check battery levels and ensure proper charging'
        },
        {
          id: '2',
          title: 'Tire Pressure Check',
          dueDate: '2024-01-20',
          priority: 'medium',
          description: 'Inspect and adjust tire pressure to recommended levels'
        },
        {
          id: '3',
          title: 'Brake System Inspection',
          dueDate: '2024-01-25',
          priority: 'high',
          description: 'Check brake pads and brake fluid levels'
        },
        {
          id: '4',
          title: 'Motor Lubrication',
          dueDate: '2024-02-01',
          priority: 'low',
          description: 'Apply lubrication to motor components'
        }
      ]);
    }, 100);
  });
};

const fetchScoresData = (): Promise<GolfScore[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: '1', club: 'Pine Valley Golf Club', date: '2024-01-10', score: 78, par: 72 },
        { id: '2', club: 'Augusta National', date: '2024-01-15', score: 82, par: 72 },
        { id: '3', club: 'Pebble Beach', date: '2024-01-20', score: 75, par: 72 },
        { id: '4', club: 'St. Andrews', date: '2024-01-25', score: 80, par: 72 }
      ]);
    }, 150);
  });
};

const fetchNewsData = (): Promise<NewsArticle[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: '1',
          title: 'New Golf Cart Technology Revolutionizes Course Management',
          source: 'Golf Digest',
          date: '2024-01-20',
          summary: 'Advanced GPS and maintenance tracking systems are changing how courses manage their fleet.'
        },
        {
          id: '2',
          title: 'Sustainable Golf Cart Batteries Reduce Environmental Impact',
          source: 'Golf Week',
          date: '2024-01-18',
          summary: 'New lithium-ion batteries provide longer life and better performance for golf courses.'
        },
        {
          id: '3',
          title: 'Winter Golf Cart Maintenance Tips',
          source: 'Golf Maintenance Pro',
          date: '2024-01-15',
          summary: 'Essential maintenance procedures to keep your golf cart in top condition during winter months.'
        }
      ]);
    }, 200);
  });
};

const fetchFriendsData = (): Promise<FriendScore[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: '1', name: 'Mike Johnson', club: 'Pine Valley', score: 72, date: '2024-01-22' },
        { id: '2', name: 'Sarah Williams', club: 'Augusta National', score: 75, date: '2024-01-21' },
        { id: '3', name: 'Tom Davis', club: 'Pebble Beach', score: 78, date: '2024-01-20' },
        { id: '4', name: 'Lisa Chen', club: 'St. Andrews', score: 80, date: '2024-01-19' }
      ]);
    }, 100);
  });
};

// Memoized components for better performance
const MaintenanceItem = React.memo(({ task, colors, getPriorityColor }: {
  task: MaintenanceTask;
  colors: any;
  getPriorityColor: (priority: string) => string;
}) => (
  <View style={styles.maintenanceItem}>
    <View style={styles.maintenanceHeader}>
      <Text style={[styles.maintenanceTitle, { color: colors.text }]}>{task.title}</Text>
      <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(task.priority) }]}>
        <Text style={styles.priorityText}>{task.priority}</Text>
      </View>
    </View>
    <Text style={[styles.maintenanceDescription, { color: colors.icon }]}>{task.description}</Text>
    <Text style={[styles.maintenanceDate, { color: colors.tint }]}>Due: {task.dueDate}</Text>
  </View>
));

const ScoreItem = React.memo(({ score, colors, getScoreColor }: {
  score: GolfScore;
  colors: any;
  getScoreColor: (score: number, par: number) => string;
}) => (
  <View style={styles.scoreItem}>
    <View style={styles.scoreHeader}>
      <Text style={[styles.clubName, { color: colors.text }]}>{score.club}</Text>
      <Text style={[styles.scoreText, { color: getScoreColor(score.score, score.par) }]}>
        {score.score} ({score.score > score.par ? '+' : ''}{score.score - score.par})
      </Text>
    </View>
    <Text style={[styles.scoreDate, { color: colors.icon }]}>{score.date}</Text>
  </View>
));

const NewsItem = React.memo(({ article, colors }: {
  article: NewsArticle;
  colors: any;
}) => (
  <TouchableOpacity style={styles.newsItem}>
    <Text style={[styles.newsTitle, { color: colors.text }]}>{article.title}</Text>
    <Text style={[styles.newsSource, { color: colors.tint }]}>{article.source}</Text>
    <Text style={[styles.newsSummary, { color: colors.icon }]} numberOfLines={2}>
      {article.summary}
    </Text>
    <Text style={[styles.newsDate, { color: colors.icon }]}>{article.date}</Text>
  </TouchableOpacity>
));

const FriendItem = React.memo(({ friend, colors, getScoreColor }: {
  friend: FriendScore;
  colors: any;
  getScoreColor: (score: number, par: number) => string;
}) => (
  <View style={styles.friendItem}>
    <View style={styles.friendHeader}>
      <Text style={[styles.friendName, { color: colors.text }]}>{friend.name}</Text>
      <Text style={[styles.friendScore, { color: getScoreColor(friend.score, 72) }]}>
        {friend.score}
      </Text>
    </View>
    <View style={styles.friendDetails}>
      <Text style={[styles.friendClub, { color: colors.icon }]}>{friend.club}</Text>
      <Text style={[styles.friendDate, { color: colors.icon }]}>{friend.date}</Text>
    </View>
  </View>
));

export default function HomeScreen() {
  const { colors } = useTheme();
  const [data, setData] = useState<DataState>({
    maintenance: [],
    scores: [],
    news: [],
    friends: [],
    loading: true
  });

  // Load data asynchronously
  useEffect(() => {
    const loadData = async () => {
      try {
        const [maintenance, scores, news, friends] = await Promise.all([
          fetchMaintenanceData(),
          fetchScoresData(),
          fetchNewsData(),
          fetchFriendsData()
        ]);

        setData({
          maintenance,
          scores,
          news,
          friends,
          loading: false
        });
      } catch (error) {
        console.error('Error loading data:', error);
        setData(prev => ({ ...prev, loading: false }));
      }
    };

    loadData();
  }, []);

  // Memoized utility functions
  const getPriorityColor = useCallback((priority: string) => {
    switch (priority) {
      case 'high': return '#ff4444';
      case 'medium': return '#ffaa00';
      case 'low': return '#44aa44';
      default: return colors.text;
    }
  }, [colors.text]);

  const getScoreColor = useCallback((score: number, par: number) => {
    const diff = score - par;
    if (diff <= 0) return '#44aa44';
    if (diff <= 5) return '#ffaa00';
    return '#ff4444';
  }, []);

  // Loading state
  if (data.loading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: colors.background }]}>
        <ActivityIndicator size="large" color={colors.tint} />
        <Text style={[styles.loadingText, { color: colors.text }]}>Loading...</Text>
      </View>
    );
  }

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>Home</Text>
        <Text style={[styles.headerSubtitle, { color: colors.icon }]}>
          Welcome to Cart Care Pro
        </Text>
      </View>

      {/* Upcoming Maintenance Card */}
      <View style={[styles.card, { backgroundColor: colors.background, borderColor: colors.icon }]}>
        <View style={styles.cardHeader}>
          <IconSymbol name="directions-car" size={24} color={colors.tint} />
          <Text style={[styles.cardTitle, { color: colors.text }]}>Upcoming Maintenance</Text>
        </View>
        {data.maintenance.map((task) => (
          <MaintenanceItem 
            key={task.id} 
            task={task} 
            colors={colors} 
            getPriorityColor={getPriorityColor}
          />
        ))}
      </View>

      {/* This Month's Scores Card */}
      <View style={[styles.card, { backgroundColor: colors.background, borderColor: colors.icon }]}>
        <View style={styles.cardHeader}>
          <IconSymbol name="sports-golf" size={24} color={colors.tint} />
          <Text style={[styles.cardTitle, { color: colors.text }]}>This Month's Scores</Text>
        </View>
        {data.scores.map((score) => (
          <ScoreItem 
            key={score.id} 
            score={score} 
            colors={colors} 
            getScoreColor={getScoreColor}
          />
        ))}
      </View>

      {/* Recent News Card */}
      <View style={[styles.card, { backgroundColor: colors.background, borderColor: colors.icon }]}>
        <View style={styles.cardHeader}>
          <IconSymbol name="article" size={24} color={colors.tint} />
          <Text style={[styles.cardTitle, { color: colors.text }]}>Recent News</Text>
        </View>
        {data.news.map((article) => (
          <NewsItem 
            key={article.id} 
            article={article} 
            colors={colors}
          />
        ))}
      </View>

      {/* Friends High Scores Card */}
      <View style={[styles.card, { backgroundColor: colors.background, borderColor: colors.icon }]}>
        <View style={styles.cardHeader}>
          <IconSymbol name="people" size={24} color={colors.tint} />
          <Text style={[styles.cardTitle, { color: colors.text }]}>Friends High Scores</Text>
        </View>
        {data.friends.map((friend) => (
          <FriendItem 
            key={friend.id} 
            friend={friend} 
            colors={colors} 
            getScoreColor={getScoreColor}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollContent: {
    paddingBottom: 100, // Add padding to account for tab bar
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 16,
    fontSize: 16,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
  },
  card: {
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  maintenanceItem: {
    marginBottom: 16,
    paddingBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  maintenanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  maintenanceTitle: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
  },
  priorityText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  maintenanceDescription: {
    fontSize: 14,
    marginBottom: 4,
  },
  maintenanceDate: {
    fontSize: 12,
    fontWeight: '500',
  },
  scoreItem: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  scoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  clubName: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  scoreText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  scoreDate: {
    fontSize: 12,
  },
  newsItem: {
    marginBottom: 16,
    paddingBottom: 16,
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  newsSource: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 4,
  },
  newsSummary: {
    fontSize: 14,
    marginBottom: 4,
    lineHeight: 20,
  },
  newsDate: {
    fontSize: 12,
  },
  friendItem: {
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  friendHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  friendName: {
    fontSize: 16,
    fontWeight: '500',
  },
  friendScore: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  friendDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  friendClub: {
    fontSize: 12,
  },
  friendDate: {
    fontSize: 12,
  },
});
