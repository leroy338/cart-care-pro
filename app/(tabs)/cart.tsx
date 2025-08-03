import { SuggestedMaintenance, Task } from '@/assets/metadata/metadata';
import { mockCarts, mockMaintenanceRecords, mockSuggestedMaintenance, mockTasks } from '@/assets/metadata/mockData';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useTheme } from '@/contexts/ThemeContext';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ExpandableCardProps {
  title: string;
  icon: string;
  children: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  colors: any;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({ 
  title, 
  icon, 
  children, 
  isExpanded, 
  onToggle, 
  colors 
}) => (
  <View style={[styles.card, { backgroundColor: colors.background, borderColor: colors.icon }]}>
    <TouchableOpacity 
      style={styles.cardHeader} 
      onPress={onToggle}
      activeOpacity={0.7}
    >
      <View style={styles.cardHeaderLeft}>
        <IconSymbol name={icon} size={20} color={colors.tint} />
        <Text style={[styles.cardTitle, { color: colors.text }]}>{title}</Text>
      </View>
      <IconSymbol 
        name={isExpanded ? 'chevron-up' : 'chevron-down'} 
        size={20} 
        color={colors.icon} 
      />
    </TouchableOpacity>
    {isExpanded && (
      <View style={styles.cardContent}>
        {children}
      </View>
    )}
  </View>
);

export default function CartScreen() {
  const { colors } = useTheme();
  const [expandedCards, setExpandedCards] = useState<{ [key: string]: boolean }>({
    overview: true,
    specifications: false,
    maintenance: false,
    tasks: false,
    history: false
  });

  // Get the first cart for demonstration (in real app, this would be the user's assigned cart)
  const currentCart = mockCarts[0];
  const cartTasks = mockTasks.filter(task => task.assignedCart === currentCart.id);
  const cartMaintenance = mockSuggestedMaintenance.filter(maint => maint.cartId === currentCart.id);
  const cartHistory = mockMaintenanceRecords.filter(record => record.cartId === currentCart.id);

  const toggleCard = (cardKey: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [cardKey]: !prev[cardKey]
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return '#10B981';
      case 'maintenance': return '#F59E0B';
      case 'repair': return '#EF4444';
      case 'retired': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return '#EF4444';
      case 'medium': return '#F59E0B';
      case 'low': return '#10B981';
      default: return '#6B7280';
    }
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const handleTaskPress = (task: Task) => {
    Alert.alert(
      'Task Details',
      `${task.title}\n\n${task.description}\n\nStatus: ${task.status}\nPriority: ${task.priority}`,
      [{ text: 'OK' }]
    );
  };

  const handleMaintenancePress = (maintenance: SuggestedMaintenance) => {
    Alert.alert(
      'Maintenance Details',
      `${maintenance.title}\n\n${maintenance.description}\n\nType: ${maintenance.type}\nCategory: ${maintenance.category}\nNext Due: ${formatDate(maintenance.nextDueDate)}`,
      [{ text: 'OK' }]
    );
  };

  return (
    <ScrollView 
      style={[styles.container, { backgroundColor: colors.background }]}
      contentContainerStyle={styles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={[styles.headerTitle, { color: colors.text }]}>My Cart</Text>
        <Text style={[styles.headerSubtitle, { color: colors.icon }]}>
          {currentCart.serialNumber} - {currentCart.model}
        </Text>
      </View>

      {/* Cart Overview Card */}
      <ExpandableCard
        title="Cart Overview"
        icon="info-circle"
        isExpanded={expandedCards.overview}
        onToggle={() => toggleCard('overview')}
        colors={colors}
      >
        <View style={styles.overviewGrid}>
          <View style={styles.overviewItem}>
            <Text style={[styles.overviewLabel, { color: colors.icon }]}>Status</Text>
            <View style={[styles.statusBadge, { backgroundColor: getStatusColor(currentCart.status) }]}>
              <Text style={styles.statusText}>{currentCart.status.toUpperCase()}</Text>
            </View>
          </View>
          
          <View style={styles.overviewItem}>
            <Text style={[styles.overviewLabel, { color: colors.icon }]}>Manufacturer</Text>
            <Text style={[styles.overviewValue, { color: colors.text }]}>{currentCart.manufacturer}</Text>
          </View>
          
          <View style={styles.overviewItem}>
            <Text style={[styles.overviewLabel, { color: colors.icon }]}>Year</Text>
            <Text style={[styles.overviewValue, { color: colors.text }]}>{currentCart.year}</Text>
          </View>
          
          <View style={styles.overviewItem}>
            <Text style={[styles.overviewLabel, { color: colors.icon }]}>Type</Text>
            <Text style={[styles.overviewValue, { color: colors.text }]}>{currentCart.type}</Text>
          </View>
          
          <View style={styles.overviewItem}>
            <Text style={[styles.overviewLabel, { color: colors.icon }]}>Total Mileage</Text>
            <Text style={[styles.overviewValue, { color: colors.text }]}>{currentCart.totalMileage} miles</Text>
          </View>
          
          <View style={styles.overviewItem}>
            <Text style={[styles.overviewLabel, { color: colors.icon }]}>Last Inspection</Text>
            <Text style={[styles.overviewValue, { color: colors.text }]}>
              {currentCart.lastInspection ? formatDate(currentCart.lastInspection) : 'N/A'}
            </Text>
          </View>
          
          <View style={styles.overviewItem}>
            <Text style={[styles.overviewLabel, { color: colors.icon }]}>Next Inspection</Text>
            <Text style={[styles.overviewValue, { color: colors.text }]}>
              {currentCart.nextInspection ? formatDate(currentCart.nextInspection) : 'N/A'}
            </Text>
          </View>
          
          <View style={styles.overviewItem}>
            <Text style={[styles.overviewLabel, { color: colors.icon }]}>Location</Text>
            <Text style={[styles.overviewValue, { color: colors.text }]}>{currentCart.location.zone}</Text>
          </View>
        </View>
      </ExpandableCard>

      {/* Specifications Card */}
      <ExpandableCard
        title="Specifications"
        icon="settings"
        isExpanded={expandedCards.specifications}
        onToggle={() => toggleCard('specifications')}
        colors={colors}
      >
        <View style={styles.specsContainer}>
          <View style={styles.specRow}>
            <Text style={[styles.specLabel, { color: colors.icon }]}>Battery Type</Text>
            <Text style={[styles.specValue, { color: colors.text }]}>{currentCart.specifications.batteryType}</Text>
          </View>
          
          <View style={styles.specRow}>
            <Text style={[styles.specLabel, { color: colors.icon }]}>Battery Capacity</Text>
            <Text style={[styles.specValue, { color: colors.text }]}>{currentCart.specifications.batteryCapacity}V</Text>
          </View>
          
          <View style={styles.specRow}>
            <Text style={[styles.specLabel, { color: colors.icon }]}>Max Speed</Text>
            <Text style={[styles.specValue, { color: colors.text }]}>{currentCart.specifications.maxSpeed} mph</Text>
          </View>
          
          <View style={styles.specRow}>
            <Text style={[styles.specLabel, { color: colors.icon }]}>Max Load</Text>
            <Text style={[styles.specValue, { color: colors.text }]}>{currentCart.specifications.maxLoad} lbs</Text>
          </View>
          
          <View style={styles.specRow}>
            <Text style={[styles.specLabel, { color: colors.icon }]}>Dimensions</Text>
            <Text style={[styles.specValue, { color: colors.text }]}>
              {currentCart.specifications.dimensions.length}" × {currentCart.specifications.dimensions.width}" × {currentCart.specifications.dimensions.height}"
            </Text>
          </View>
        </View>
      </ExpandableCard>

      {/* Current Tasks Card */}
      <ExpandableCard
        title="Upcoming Tasks"
        icon="list-check"
        isExpanded={expandedCards.tasks}
        onToggle={() => toggleCard('tasks')}
        colors={colors}
      >
        {cartTasks.length > 0 ? (
          cartTasks.map((task) => (
            <TouchableOpacity
              key={task.id}
              style={[styles.taskItem, { borderColor: colors.icon }]}
              onPress={() => handleTaskPress(task)}
            >
              <View style={styles.taskHeader}>
                <Text style={[styles.taskTitle, { color: colors.text }]}>{task.title}</Text>
                <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(task.priority) }]}>
                  <Text style={styles.priorityText}>{task.priority}</Text>
                </View>
              </View>
              
              <Text style={[styles.taskDescription, { color: colors.icon }]} numberOfLines={2}>
                {task.description}
              </Text>
              
              <View style={styles.taskMeta}>
                <Text style={[styles.taskStatus, { color: colors.icon }]}>
                  Status: {task.status.replace('_', ' ')}
                </Text>
                <Text style={[styles.taskDue, { color: colors.icon }]}>
                  Due: {formatDate(task.dueDate)}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={[styles.emptyState, { color: colors.icon }]}>No current tasks</Text>
        )}
      </ExpandableCard>

      {/* Suggested Maintenance Card */}
      <ExpandableCard
        title="Suggested Maintenance"
        icon="wrench"
        isExpanded={expandedCards.maintenance}
        onToggle={() => toggleCard('maintenance')}
        colors={colors}
      >
        {cartMaintenance.length > 0 ? (
          cartMaintenance.map((maintenance) => (
            <TouchableOpacity
              key={maintenance.id}
              style={[styles.maintenanceItem, { borderColor: colors.icon }]}
              onPress={() => handleMaintenancePress(maintenance)}
            >
              <View style={styles.maintenanceHeader}>
                <Text style={[styles.maintenanceTitle, { color: colors.text }]}>{maintenance.title}</Text>
                <View style={[styles.categoryBadge, { backgroundColor: getPriorityColor(maintenance.priority) }]}>
                  <Text style={styles.categoryText}>{maintenance.category}</Text>
                </View>
              </View>
              
              <Text style={[styles.maintenanceDescription, { color: colors.icon }]} numberOfLines={2}>
                {maintenance.description}
              </Text>
              
              <View style={styles.maintenanceMeta}>
                <Text style={[styles.maintenanceType, { color: colors.icon }]}>
                  Type: {maintenance.type}
                </Text>
                <Text style={[styles.maintenanceDue, { color: colors.icon }]}>
                  Next Due: {formatDate(maintenance.nextDueDate)}
                </Text>
              </View>
              
              <View style={styles.costInfo}>
                <Text style={[styles.costLabel, { color: colors.icon }]}>Estimated Cost:</Text>
                <Text style={[styles.costValue, { color: colors.text }]}>
                  ${maintenance.estimatedCost.min} - ${maintenance.estimatedCost.max}
                </Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text style={[styles.emptyState, { color: colors.icon }]}>No maintenance due</Text>
        )}
      </ExpandableCard>

      {/* Maintenance History Card */}
      <ExpandableCard
        title="Maintenance History"
        icon="history"
        isExpanded={expandedCards.history}
        onToggle={() => toggleCard('history')}
        colors={colors}
      >
        {cartHistory.length > 0 ? (
          cartHistory.map((record) => (
            <View key={record.id} style={[styles.historyItem, { borderColor: colors.icon }]}>
              <View style={styles.historyHeader}>
                <Text style={[styles.historyTitle, { color: colors.text }]}>{record.description}</Text>
                <View style={[styles.typeBadge, { backgroundColor: getStatusColor(record.type) }]}>
                  <Text style={styles.typeText}>{record.type}</Text>
                </View>
              </View>
              
              <View style={styles.historyMeta}>
                <Text style={[styles.historyDate, { color: colors.icon }]}>
                  {formatDate(record.performedAt)}
                </Text>
                <Text style={[styles.historyCost, { color: colors.text }]}>
                  Cost: ${record.totalCost}
                </Text>
              </View>
              
              {record.notes && (
                <Text style={[styles.historyNotes, { color: colors.icon }]} numberOfLines={2}>
                  {record.notes}
                </Text>
              )}
            </View>
          ))
        ) : (
          <Text style={[styles.emptyState, { color: colors.icon }]}>No maintenance history</Text>
        )}
      </ExpandableCard>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  scrollContent: {
    paddingBottom: 100,
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
    marginBottom: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  cardHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  cardContent: {
    padding: 16,
    paddingTop: 0,
  },
  overviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  overviewItem: {
    width: '48%',
  },
  overviewLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginBottom: 4,
  },
  overviewValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  statusText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
  specsContainer: {
    gap: 12,
  },
  specRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  specLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  specValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  taskItem: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  priorityBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  priorityText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
  taskDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  taskMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskStatus: {
    fontSize: 12,
  },
  taskDue: {
    fontSize: 12,
  },
  maintenanceItem: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  maintenanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  maintenanceTitle: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  categoryBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  categoryText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
  maintenanceDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 8,
  },
  maintenanceMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  maintenanceType: {
    fontSize: 12,
  },
  maintenanceDue: {
    fontSize: 12,
  },
  costInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  costLabel: {
    fontSize: 12,
  },
  costValue: {
    fontSize: 14,
    fontWeight: '600',
  },
  historyItem: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  historyTitle: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
  },
  typeBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  typeText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
  },
  historyMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  historyDate: {
    fontSize: 12,
  },
  historyCost: {
    fontSize: 12,
    fontWeight: '600',
  },
  historyNotes: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  emptyState: {
    textAlign: 'center',
    fontSize: 14,
    fontStyle: 'italic',
    paddingVertical: 20,
  },
});
