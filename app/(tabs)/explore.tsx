import React, { useEffect, useState } from 'react';
import { Alert, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { useTheme } from '@/contexts/ThemeContext';

interface ServiceStore {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  website: string;
  rating: number;
  distance: string;
  services: string[];
  hours: string;
  isOpen: boolean;
}

export default function ExploreScreen() {
  const { colors } = useTheme();
  const [stores, setStores] = useState<ServiceStore[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock data for golf cart service stores
  const mockStores: ServiceStore[] = [
    {
      id: '1',
      name: 'Pine Valley Golf Cart Service',
      address: '123 Golf Course Dr, Pine Valley, NJ 08021',
      phone: '(856) 555-0101',
      email: 'service@pinevalleycarts.com',
      website: 'www.pinevalleycarts.com',
      rating: 4.8,
      distance: '2.3 miles',
      services: ['Battery Service', 'Motor Repair', 'Tire Replacement', 'Brake Service'],
      hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
      isOpen: true
    },
    {
      id: '2',
      name: 'Augusta Cart Care Center',
      address: '456 Masters Blvd, Augusta, GA 30912',
      phone: '(706) 555-0202',
      email: 'info@augustacartcare.com',
      website: 'www.augustacartcare.com',
      rating: 4.6,
      distance: '5.1 miles',
      services: ['Full Service', 'Custom Modifications', 'GPS Installation', 'Winter Storage'],
      hours: 'Mon-Sat: 7AM-7PM, Sun: 10AM-4PM',
      isOpen: true
    },
    {
      id: '3',
      name: 'Pebble Beach Cart Specialists',
      address: '789 Ocean View Way, Pebble Beach, CA 93953',
      phone: '(831) 555-0303',
      email: 'service@pebblebeachcarts.com',
      website: 'www.pebblebeachcarts.com',
      rating: 4.9,
      distance: '1.8 miles',
      services: ['Premium Service', 'Luxury Upgrades', 'Coastal Protection', 'Performance Tuning'],
      hours: 'Mon-Fri: 8AM-5PM, Sat: 9AM-3PM',
      isOpen: false
    },
    {
      id: '4',
      name: 'St. Andrews Cart Works',
      address: '321 Old Course Rd, St Andrews, KY 40324',
      phone: '(859) 555-0404',
      email: 'repair@standrewscarts.com',
      website: 'www.standrewscarts.com',
      rating: 4.7,
      distance: '3.4 miles',
      services: ['Traditional Service', 'Vintage Restoration', 'Parts Supply', 'Emergency Repair'],
      hours: 'Mon-Fri: 7AM-6PM, Sat: 8AM-5PM',
      isOpen: true
    },
    {
      id: '5',
      name: 'Sawgrass Cart Solutions',
      address: '654 TPC Blvd, Ponte Vedra Beach, FL 32082',
      phone: '(904) 555-0505',
      email: 'service@sawgrasscarts.com',
      website: 'www.sawgrasscarts.com',
      rating: 4.5,
      distance: '4.2 miles',
      services: ['Florida Weather Protection', 'Battery Optimization', 'AC Installation', 'Trailer Service'],
      hours: 'Mon-Sat: 8AM-6PM, Sun: 9AM-5PM',
      isOpen: true
    },
    {
      id: '6',
      name: 'Whistling Straits Cart Care',
      address: '987 Straits Ave, Kohler, WI 53044',
      phone: '(920) 555-0606',
      email: 'info@whistlingcarts.com',
      website: 'www.whistlingcarts.com',
      rating: 4.4,
      distance: '6.7 miles',
      services: ['Cold Weather Prep', 'Snow Plow Installation', 'Heated Seats', 'Winter Storage'],
      hours: 'Mon-Fri: 8AM-5PM, Sat: 9AM-4PM',
      isOpen: false
    },
    {
      id: '7',
      name: 'Oakmont Cart Service',
      address: '147 Oakmont Dr, Oakmont, PA 15139',
      phone: '(412) 555-0707',
      email: 'service@oakmontcarts.com',
      website: 'www.oakmontcarts.com',
      rating: 4.8,
      distance: '2.9 miles',
      services: ['Classic Restoration', 'Modern Upgrades', 'Tournament Prep', 'Rental Fleet'],
      hours: 'Mon-Fri: 7AM-6PM, Sat: 8AM-5PM',
      isOpen: true
    },
    {
      id: '8',
      name: 'Merion Cart Works',
      address: '258 Ardmore Ave, Ardmore, PA 19003',
      phone: '(610) 555-0808',
      email: 'repair@merioncarts.com',
      website: 'www.merioncarts.com',
      rating: 4.6,
      distance: '3.8 miles',
      services: ['Historic Preservation', 'Custom Paint', 'Performance Tuning', 'Parts Fabrication'],
      hours: 'Mon-Fri: 8AM-5PM, Sat: 9AM-3PM',
      isOpen: true
    },
    {
      id: '9',
      name: 'Winged Foot Cart Care',
      address: '369 Winged Foot Rd, Mamaroneck, NY 10543',
      phone: '(914) 555-0909',
      email: 'service@wingedfootcarts.com',
      website: 'www.wingedfootcarts.com',
      rating: 4.7,
      distance: '5.5 miles',
      services: ['Luxury Service', 'Premium Parts', 'Custom Interiors', 'GPS Navigation'],
      hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
      isOpen: true
    },
    {
      id: '10',
      name: 'Shinnecock Cart Service',
      address: '741 Shinnecock Hills Rd, Southampton, NY 11968',
      phone: '(631) 555-1010',
      email: 'info@shinnecockcarts.com',
      website: 'www.shinnecockcarts.com',
      rating: 4.9,
      distance: '4.8 miles',
      services: ['Exclusive Service', 'VIP Treatment', 'Tournament Support', 'Emergency Response'],
      hours: 'Mon-Sat: 7AM-7PM, Sun: 8AM-6PM',
      isOpen: true
    }
  ];

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setStores(mockStores);
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleScheduleMaintenance = (store: ServiceStore) => {
    Alert.alert(
      'Schedule Maintenance',
      `Would you like to schedule maintenance with ${store.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Call Now', 
          onPress: () => Linking.openURL(`tel:${store.phone}`)
        },
        { 
          text: 'Email', 
          onPress: () => Linking.openURL(`mailto:${store.email}`)
        }
      ]
    );
  };

  const handleCallStore = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  const handleVisitWebsite = (website: string) => {
    Linking.openURL(`https://${website}`);
  };

  const getRatingStars = (rating: number) => {
    const stars = '★'.repeat(Math.floor(rating)) + '☆'.repeat(5 - Math.floor(rating));
    return stars;
  };

  if (loading) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: colors.background }]}>
        <IconSymbol name="build" size={48} color={colors.tint} />
        <Text style={[styles.loadingText, { color: colors.text }]}>Finding nearby service stores...</Text>
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
        <Text style={[styles.headerTitle, { color: colors.text }]}>Service Stores</Text>
        <Text style={[styles.headerSubtitle, { color: colors.icon }]}>
          Find golf cart service near you
        </Text>
      </View>

      {/* Store Cards */}
      {stores.map((store) => (
        <View key={store.id} style={[styles.storeCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
          {/* Store Header */}
          <View style={styles.storeHeader}>
            <View style={styles.storeInfo}>
              <Text style={[styles.storeName, { color: colors.text }]}>{store.name}</Text>
              <View style={styles.ratingContainer}>
                <Text style={[styles.ratingStars, { color: '#FFD700' }]}>
                  {getRatingStars(store.rating)}
                </Text>
                <Text style={[styles.ratingText, { color: colors.icon }]}>
                  {store.rating} ({store.distance})
                </Text>
              </View>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: store.isOpen ? '#44aa44' : '#ff4444' }]}>
              <Text style={styles.statusText}>{store.isOpen ? 'OPEN' : 'CLOSED'}</Text>
            </View>
          </View>

          {/* Contact Information */}
          <View style={styles.contactSection}>
            <View style={styles.contactItem}>
              <IconSymbol name="location-on" size={16} color={colors.icon} />
              <Text style={[styles.contactText, { color: colors.text }]}>{store.address}</Text>
            </View>
            <View style={styles.contactItem}>
              <IconSymbol name="phone" size={16} color={colors.icon} />
              <TouchableOpacity onPress={() => handleCallStore(store.phone)}>
                <Text style={[styles.contactText, { color: colors.tint }]}>{store.phone}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contactItem}>
              <IconSymbol name="schedule" size={16} color={colors.icon} />
              <Text style={[styles.contactText, { color: colors.text }]}>{store.hours}</Text>
            </View>
          </View>

          {/* Services */}
          <View style={styles.servicesSection}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Services Offered:</Text>
            <View style={styles.servicesList}>
              {store.services.map((service, index) => (
                <View key={index} style={styles.serviceItem}>
                  <IconSymbol name="check-circle" size={14} color={colors.tint} />
                  <Text style={[styles.serviceText, { color: colors.text }]}>{service}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionButtons}>
            <TouchableOpacity 
              style={[styles.primaryButton, { backgroundColor: colors.tint }]}
              onPress={() => handleScheduleMaintenance(store)}
            >
              <IconSymbol name="schedule" size={16} color="white" />
              <Text style={styles.primaryButtonText}>Schedule Maintenance</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.secondaryButton, { borderColor: colors.tint }]}
              onPress={() => handleVisitWebsite(store.website)}
            >
              <IconSymbol name="language" size={16} color={colors.tint} />
              <Text style={[styles.secondaryButtonText, { color: colors.tint }]}>Visit Website</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
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
  storeCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  storeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  storeInfo: {
    flex: 1,
  },
  storeName: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  ratingStars: {
    fontSize: 14,
  },
  ratingText: {
    fontSize: 12,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  statusText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  contactSection: {
    marginBottom: 12,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    gap: 8,
  },
  contactText: {
    fontSize: 14,
    flex: 1,
  },
  servicesSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
  },
  servicesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  serviceText: {
    fontSize: 12,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  primaryButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    gap: 8,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  secondaryButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    gap: 8,
  },
  secondaryButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
});
