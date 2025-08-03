import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { IconSymbol } from '@/components/ui/IconSymbol';
import { useTheme } from '@/contexts/ThemeContext';

interface ClubMember {
  id: string;
  name: string;
  role: 'member' | 'admin' | 'moderator';
  avatar?: string;
  joinDate: string;
  lastActive: string;
  status: 'online' | 'offline' | 'away';
}

interface ClubGroup {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  category: 'social' | 'competitive' | 'maintenance' | 'events';
  isPrivate: boolean;
}

interface ClubInfo {
  id: string;
  name: string;
  description: string;
  location: string;
  founded: string;
  memberCount: number;
  logo?: string;
  website: string;
  phone: string;
  email: string;
  address: string;
  amenities: string[];
  rules: string[];
}

export default function MyClubScreen() {
  const { colors } = useTheme();
  const [activeTab, setActiveTab] = useState<'info' | 'members' | 'groups'>('info');
  const [members, setMembers] = useState<ClubMember[]>([]);
  const [groups, setGroups] = useState<ClubGroup[]>([]);
  const [clubInfo, setClubInfo] = useState<ClubInfo | null>(null);

  // Mock club data
  const mockClubInfo: ClubInfo = {
    id: '1',
    name: 'Pine Valley Golf Club',
    description: 'A prestigious private golf club known for its challenging course and exclusive membership. Founded in 1918, Pine Valley offers world-class golfing experience with pristine fairways and championship-level facilities.',
    location: 'Pine Valley, New Jersey',
    founded: '1918',
    memberCount: 284,
    website: 'www.pinevalley.com',
    phone: '(856) 783-3000',
    email: 'info@pinevalley.com',
    address: 'Pine Valley, NJ 08021',
    amenities: [
      '18-Hole Championship Course',
      'Pro Shop',
      'Practice Range',
      'Clubhouse Restaurant',
      'Locker Rooms',
      'Golf Cart Fleet',
      'Tennis Courts',
      'Swimming Pool'
    ],
    rules: [
      'Proper golf attire required',
      'No mobile phones on course',
      'Respect pace of play',
      'Repair ball marks and divots',
      'Keep carts on paths',
      'No outside food or beverages'
    ]
  };

  const mockMembers: ClubMember[] = [
    {
      id: '1',
      name: 'John Smith',
      role: 'admin',
      joinDate: '2015-03-15',
      lastActive: '2024-01-20',
      status: 'online'
    },
    {
      id: '2',
      name: 'Sarah Johnson',
      role: 'moderator',
      joinDate: '2018-07-22',
      lastActive: '2024-01-19',
      status: 'online'
    },
    {
      id: '3',
      name: 'Mike Davis',
      role: 'member',
      joinDate: '2020-11-08',
      lastActive: '2024-01-18',
      status: 'away'
    },
    {
      id: '4',
      name: 'Lisa Chen',
      role: 'member',
      joinDate: '2019-05-12',
      lastActive: '2024-01-17',
      status: 'offline'
    },
    {
      id: '5',
      name: 'Tom Wilson',
      role: 'member',
      joinDate: '2021-02-28',
      lastActive: '2024-01-20',
      status: 'online'
    },
    {
      id: '6',
      name: 'Emily Brown',
      role: 'member',
      joinDate: '2022-09-14',
      lastActive: '2024-01-16',
      status: 'offline'
    },
    {
      id: '7',
      name: 'David Miller',
      role: 'moderator',
      joinDate: '2017-12-03',
      lastActive: '2024-01-20',
      status: 'online'
    },
    {
      id: '8',
      name: 'Jennifer Lee',
      role: 'member',
      joinDate: '2023-01-25',
      lastActive: '2024-01-15',
      status: 'away'
    }
  ];

  const mockGroups: ClubGroup[] = [
    {
      id: '1',
      name: 'Weekend Warriors',
      description: 'Group for weekend golf enthusiasts who play regularly on Saturdays and Sundays',
      memberCount: 45,
      category: 'social',
      isPrivate: false
    },
    {
      id: '2',
      name: 'Tournament Players',
      description: 'Competitive players who participate in club tournaments and championships',
      memberCount: 32,
      category: 'competitive',
      isPrivate: false
    },
    {
      id: '3',
      name: 'Cart Maintenance Crew',
      description: 'Members who help maintain and service the golf cart fleet',
      memberCount: 12,
      category: 'maintenance',
      isPrivate: true
    },
    {
      id: '4',
      name: 'Social Events Committee',
      description: 'Organizes club social events, parties, and member gatherings',
      memberCount: 18,
      category: 'events',
      isPrivate: false
    },
    {
      id: '5',
      name: 'Junior Golf Program',
      description: 'Mentoring program for young golfers and junior members',
      memberCount: 25,
      category: 'social',
      isPrivate: false
    },
    {
      id: '6',
      name: 'Course Maintenance',
      description: 'Volunteer group that helps with course upkeep and improvements',
      memberCount: 15,
      category: 'maintenance',
      isPrivate: true
    }
  ];

  useEffect(() => {
    // Load data
    setClubInfo(mockClubInfo);
    setMembers(mockMembers);
    setGroups(mockGroups);
  }, []);

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'admin': return '#ff4444';
      case 'moderator': return '#ffaa00';
      case 'member': return '#44aa44';
      default: return colors.text;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return '#44aa44';
      case 'away': return '#ffaa00';
      case 'offline': return '#999999';
      default: return colors.icon;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'social': return '#4ecdc4';
      case 'competitive': return '#ff6b6b';
      case 'maintenance': return '#45b7d1';
      case 'events': return '#96ceb4';
      default: return colors.icon;
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'social': return 'people';
      case 'competitive': return 'emoji-events';
      case 'maintenance': return 'build';
      case 'events': return 'event';
      default: return 'group';
    }
  };

  const handleJoinGroup = (group: ClubGroup) => {
    Alert.alert(
      'Join Group',
      `Would you like to join "${group.name}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Join Group', onPress: () => console.log('Joined group:', group.name) }
      ]
    );
  };

  const handleContactMember = (member: ClubMember) => {
    Alert.alert(
      'Contact Member',
      `How would you like to contact ${member.name}?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Send Message', onPress: () => console.log('Send message to:', member.name) },
        { text: 'View Profile', onPress: () => console.log('View profile:', member.name) }
      ]
    );
  };

  if (!clubInfo) {
    return (
      <View style={[styles.loadingContainer, { backgroundColor: colors.background }]}>
        <IconSymbol name="golf-course" size={48} color={colors.tint} />
        <Text style={[styles.loadingText, { color: colors.text }]}>Loading club information...</Text>
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
        <Text style={[styles.headerTitle, { color: colors.text }]}>My Club</Text>
        <Text style={[styles.headerSubtitle, { color: colors.icon }]}>
          {clubInfo.name}
        </Text>
      </View>

      {/* Tab Navigation */}
      <View style={styles.tabContainer}>
        {[
          { key: 'info', label: 'Club Info', icon: 'info' },
          { key: 'members', label: 'Members', icon: 'people' },
          { key: 'groups', label: 'Groups', icon: 'group' }
        ].map((tab) => (
          <TouchableOpacity
            key={tab.key}
            style={[
              styles.tabButton,
              { 
                backgroundColor: activeTab === tab.key ? colors.tint : 'transparent',
                borderColor: colors.tint
              }
            ]}
            onPress={() => setActiveTab(tab.key as any)}
          >
            <IconSymbol 
              name={tab.icon} 
              size={16} 
              color={activeTab === tab.key ? 'white' : colors.tint} 
            />
            <Text style={[
              styles.tabButtonText,
              { color: activeTab === tab.key ? 'white' : colors.tint }
            ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Club Info Tab */}
      {activeTab === 'info' && (
        <View>
          {/* Club Card */}
          <View style={[styles.clubCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
            <View style={styles.clubHeader}>
              <View style={styles.clubLogo}>
                <IconSymbol name="golf-course" size={40} color={colors.tint} />
              </View>
              <View style={styles.clubInfo}>
                <Text style={[styles.clubName, { color: colors.text }]}>{clubInfo.name}</Text>
                <Text style={[styles.clubLocation, { color: colors.icon }]}>{clubInfo.location}</Text>
                <Text style={[styles.clubFounded, { color: colors.icon }]}>Founded {clubInfo.founded}</Text>
              </View>
            </View>
            
            <Text style={[styles.clubDescription, { color: colors.text }]}>
              {clubInfo.description}
            </Text>

            <View style={styles.clubStats}>
              <View style={styles.statItem}>
                <IconSymbol name="people" size={20} color={colors.tint} />
                <Text style={[styles.statText, { color: colors.text }]}>{clubInfo.memberCount} Members</Text>
              </View>
              <View style={styles.statItem}>
                <IconSymbol name="phone" size={20} color={colors.tint} />
                <Text style={[styles.statText, { color: colors.text }]}>{clubInfo.phone}</Text>
              </View>
            </View>
          </View>

          {/* Contact Information */}
          <View style={[styles.sectionCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Contact Information</Text>
            <View style={styles.contactItem}>
              <IconSymbol name="location-on" size={16} color={colors.icon} />
              <Text style={[styles.contactText, { color: colors.text }]}>{clubInfo.address}</Text>
            </View>
            <View style={styles.contactItem}>
              <IconSymbol name="email" size={16} color={colors.icon} />
              <Text style={[styles.contactText, { color: colors.tint }]}>{clubInfo.email}</Text>
            </View>
            <View style={styles.contactItem}>
              <IconSymbol name="language" size={16} color={colors.icon} />
              <Text style={[styles.contactText, { color: colors.tint }]}>{clubInfo.website}</Text>
            </View>
          </View>

          {/* Amenities */}
          <View style={[styles.sectionCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Amenities</Text>
            <View style={styles.amenitiesList}>
              {clubInfo.amenities.map((amenity, index) => (
                <View key={index} style={styles.amenityItem}>
                  <IconSymbol name="check-circle" size={14} color={colors.tint} />
                  <Text style={[styles.amenityText, { color: colors.text }]}>{amenity}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Club Rules */}
          <View style={[styles.sectionCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
            <Text style={[styles.sectionTitle, { color: colors.text }]}>Club Rules</Text>
            <View style={styles.rulesList}>
              {clubInfo.rules.map((rule, index) => (
                <View key={index} style={styles.ruleItem}>
                  <Text style={[styles.ruleNumber, { color: colors.tint }]}>{index + 1}.</Text>
                  <Text style={[styles.ruleText, { color: colors.text }]}>{rule}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      )}

      {/* Members Tab */}
      {activeTab === 'members' && (
        <View>
          <Text style={[styles.tabHeader, { color: colors.text }]}>
            {members.length} Club Members
          </Text>
          {members.map((member) => (
            <TouchableOpacity
              key={member.id}
              style={[styles.memberCard, { backgroundColor: colors.background, borderColor: colors.icon }]}
              onPress={() => handleContactMember(member)}
            >
              <View style={styles.memberHeader}>
                <View style={styles.memberAvatar}>
                  <Text style={[styles.avatarText, { color: colors.background }]}>
                    {member.name.charAt(0)}
                  </Text>
                </View>
                <View style={styles.memberInfo}>
                  <Text style={[styles.memberName, { color: colors.text }]}>{member.name}</Text>
                  <Text style={[styles.memberJoinDate, { color: colors.icon }]}>
                    Member since {member.joinDate}
                  </Text>
                </View>
                <View style={styles.memberStatus}>
                  <View style={[styles.statusDot, { backgroundColor: getStatusColor(member.status) }]} />
                  <View style={[styles.roleBadge, { backgroundColor: getRoleColor(member.role) }]}>
                    <Text style={styles.roleText}>{member.role}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}

      {/* Groups Tab */}
      {activeTab === 'groups' && (
        <View>
          <Text style={[styles.tabHeader, { color: colors.text }]}>
            {groups.length} Groups Available
          </Text>
          {groups.map((group) => (
            <View key={group.id} style={[styles.groupCard, { backgroundColor: colors.background, borderColor: colors.icon }]}>
              <View style={styles.groupHeader}>
                <View style={styles.groupIcon}>
                  <IconSymbol name={getCategoryIcon(group.category)} size={24} color={colors.tint} />
                </View>
                <View style={styles.groupInfo}>
                  <Text style={[styles.groupName, { color: colors.text }]}>{group.name}</Text>
                  <Text style={[styles.groupDescription, { color: colors.icon }]}>{group.description}</Text>
                </View>
                <View style={styles.groupPrivacy}>
                  {group.isPrivate && (
                    <IconSymbol name="lock" size={16} color={colors.icon} />
                  )}
                </View>
              </View>
              
              <View style={styles.groupMeta}>
                <View style={styles.groupStats}>
                  <Text style={[styles.groupMemberCount, { color: colors.text }]}>
                    {group.memberCount} members
                  </Text>
                  <View style={[styles.categoryBadge, { backgroundColor: getCategoryColor(group.category) }]}>
                    <Text style={styles.categoryText}>{group.category}</Text>
                  </View>
                </View>
                
                <TouchableOpacity 
                  style={[styles.joinButton, { backgroundColor: colors.tint }]}
                  onPress={() => handleJoinGroup(group)}
                >
                  <Text style={styles.joinButtonText}>Join Group</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      )}
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
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    gap: 8,
  },
  tabButton: {
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
  tabButtonText: {
    fontSize: 14,
    fontWeight: '600',
  },
  tabHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
  },
  clubCard: {
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
  clubHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  clubLogo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  clubInfo: {
    flex: 1,
  },
  clubName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  clubLocation: {
    fontSize: 14,
    marginBottom: 2,
  },
  clubFounded: {
    fontSize: 12,
  },
  clubDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 12,
  },
  clubStats: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statText: {
    fontSize: 14,
    fontWeight: '500',
  },
  sectionCard: {
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8,
  },
  contactText: {
    fontSize: 14,
    flex: 1,
  },
  amenitiesList: {
    gap: 8,
  },
  amenityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  amenityText: {
    fontSize: 14,
  },
  rulesList: {
    gap: 8,
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  ruleNumber: {
    fontSize: 14,
    fontWeight: '600',
    minWidth: 20,
  },
  ruleText: {
    fontSize: 14,
    flex: 1,
    lineHeight: 20,
  },
  memberCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  memberHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0a7ea4',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  avatarText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  memberInfo: {
    flex: 1,
  },
  memberName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  memberJoinDate: {
    fontSize: 12,
  },
  memberStatus: {
    alignItems: 'flex-end',
    gap: 4,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  roleBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  roleText: {
    color: 'white',
    fontSize: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  groupCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  groupIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  groupDescription: {
    fontSize: 14,
    lineHeight: 18,
  },
  groupPrivacy: {
    marginLeft: 8,
  },
  groupMeta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groupStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  groupMemberCount: {
    fontSize: 12,
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
    textTransform: 'uppercase',
  },
  joinButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  joinButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});
