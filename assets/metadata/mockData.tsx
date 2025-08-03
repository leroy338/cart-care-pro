// Cart Care Pro App Mock Data
// This file contains realistic mock data for all entities in the application

import {
    Attachment,
    Cart,
    Facility,
    GoldCartDealer,
    MaintenanceRecord,
    Notification,
    Organization,
    Person,
    SuggestedMaintenance,
    Task,
    Team
} from './metadata';

// Mock Organizations
export const mockOrganizations: Organization[] = [
  {
    id: 'org-001',
    name: 'Pine Valley Golf Club',
    type: 'golf_course',
    address: {
      street: '123 Pine Valley Drive',
      city: 'Pine Valley',
      state: 'NJ',
      zipCode: '08021',
      country: 'USA'
    },
    contact: {
      primaryContact: 'John Smith',
      phone: '(856) 555-0100',
      email: 'info@pinevalleygc.com',
      website: 'https://pinevalleygc.com'
    },
    subscription: {
      plan: 'premium',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      features: ['advanced_analytics', 'custom_reports', 'priority_support', 'api_access']
    },
    settings: {
      timezone: 'America/New_York',
      currency: 'USD',
      units: 'imperial',
      maintenanceReminders: true,
      autoScheduling: true
    },
    teams: [],
    facilities: [],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'org-002',
    name: 'Augusta National Golf Club',
    type: 'golf_course',
    address: {
      street: '2604 Washington Road',
      city: 'Augusta',
      state: 'GA',
      zipCode: '30904',
      country: 'USA'
    },
    contact: {
      primaryContact: 'Sarah Johnson',
      phone: '(706) 555-0200',
      email: 'fleet@augustanational.com',
      website: 'https://augustanational.com'
    },
    subscription: {
      plan: 'enterprise',
      startDate: new Date('2024-01-01'),
      endDate: new Date('2024-12-31'),
      features: ['advanced_analytics', 'custom_reports', 'priority_support', 'api_access', 'white_label', 'dedicated_support']
    },
    settings: {
      timezone: 'America/New_York',
      currency: 'USD',
      units: 'imperial',
      maintenanceReminders: true,
      autoScheduling: true
    },
    teams: [],
    facilities: [],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-20')
  }
];

// Mock Facilities
export const mockFacilities: Facility[] = [
  {
    id: 'fac-001',
    name: 'Pine Valley Main Course',
    organizationId: 'org-001',
    type: 'golf_course',
    address: {
      street: '123 Pine Valley Drive',
      city: 'Pine Valley',
      state: 'NJ',
      zipCode: '08021',
      country: 'USA'
    },
    location: {
      latitude: 39.7942,
      longitude: -74.9707
    },
    capacity: {
      carts: 50,
      chargingStations: 10,
      parkingSpaces: 100
    },
    equipment: ['cart-001', 'cart-002', 'cart-003'],
    assignedTeams: ['team-001'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'fac-002',
    name: 'Pine Valley Maintenance Shop',
    organizationId: 'org-001',
    type: 'maintenance_shop',
    address: {
      street: '125 Pine Valley Drive',
      city: 'Pine Valley',
      state: 'NJ',
      zipCode: '08021',
      country: 'USA'
    },
    location: {
      latitude: 39.7945,
      longitude: -74.9710
    },
    capacity: {
      carts: 10,
      chargingStations: 5,
      parkingSpaces: 20
    },
    equipment: [],
    assignedTeams: ['team-002'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'fac-003',
    name: 'Augusta National Course',
    organizationId: 'org-002',
    type: 'golf_course',
    address: {
      street: '2604 Washington Road',
      city: 'Augusta',
      state: 'GA',
      zipCode: '30904',
      country: 'USA'
    },
    location: {
      latitude: 33.5021,
      longitude: -82.0226
    },
    capacity: {
      carts: 80,
      chargingStations: 15,
      parkingSpaces: 150
    },
    equipment: ['cart-004', 'cart-005', 'cart-006'],
    assignedTeams: ['team-003'],
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-20')
  }
];

// Mock Teams
export const mockTeams: Team[] = [
  {
    id: 'team-001',
    name: 'Pine Valley Operations',
    organizationId: 'org-001',
    type: 'operations',
    members: [
      {
        personId: 'person-001',
        role: 'supervisor',
        joinDate: new Date('2024-01-01'),
        isActive: true
      },
      {
        personId: 'person-002',
        role: 'member',
        joinDate: new Date('2024-01-01'),
        isActive: true
      }
    ],
    supervisor: 'person-001',
    assignedCarts: ['cart-001', 'cart-002', 'cart-003'],
    assignedFacilities: ['fac-001'],
    schedule: {
      workDays: [1, 2, 3, 4, 5, 6, 0], // Monday through Sunday
      startTime: '06:00',
      endTime: '18:00',
      timezone: 'America/New_York',
      breaks: [
        {
          startTime: '12:00',
          endTime: '13:00',
          type: 'lunch'
        }
      ]
    },
    performance: {
      tasksCompleted: 45,
      averageCompletionTime: 120,
      customerSatisfaction: 4.8,
      efficiency: 92,
      lastUpdated: new Date('2024-01-15')
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'team-002',
    name: 'Pine Valley Maintenance',
    organizationId: 'org-001',
    type: 'maintenance',
    members: [
      {
        personId: 'person-003',
        role: 'supervisor',
        joinDate: new Date('2024-01-01'),
        isActive: true
      },
      {
        personId: 'person-004',
        role: 'member',
        joinDate: new Date('2024-01-01'),
        isActive: true
      }
    ],
    supervisor: 'person-003',
    assignedCarts: [],
    assignedFacilities: ['fac-002'],
    schedule: {
      workDays: [1, 2, 3, 4, 5], // Monday through Friday
      startTime: '07:00',
      endTime: '16:00',
      timezone: 'America/New_York',
      breaks: [
        {
          startTime: '12:00',
          endTime: '13:00',
          type: 'lunch'
        }
      ]
    },
    performance: {
      tasksCompleted: 28,
      averageCompletionTime: 180,
      customerSatisfaction: 4.9,
      efficiency: 88,
      lastUpdated: new Date('2024-01-15')
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'team-003',
    name: 'Augusta Operations',
    organizationId: 'org-002',
    type: 'operations',
    members: [
      {
        personId: 'person-005',
        role: 'supervisor',
        joinDate: new Date('2024-01-01'),
        isActive: true
      },
      {
        personId: 'person-006',
        role: 'member',
        joinDate: new Date('2024-01-01'),
        isActive: true
      }
    ],
    supervisor: 'person-005',
    assignedCarts: ['cart-004', 'cart-005', 'cart-006'],
    assignedFacilities: ['fac-003'],
    schedule: {
      workDays: [1, 2, 3, 4, 5, 6, 0], // Monday through Sunday
      startTime: '06:00',
      endTime: '18:00',
      timezone: 'America/New_York',
      breaks: [
        {
          startTime: '12:00',
          endTime: '13:00',
          type: 'lunch'
        }
      ]
    },
    performance: {
      tasksCompleted: 67,
      averageCompletionTime: 110,
      customerSatisfaction: 4.7,
      efficiency: 94,
      lastUpdated: new Date('2024-01-20')
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-20')
  }
];

// Mock People
export const mockPeople: Person[] = [
  {
    id: 'person-001',
    firstName: 'Michael',
    lastName: 'Johnson',
    email: 'michael.johnson@pinevalleygc.com',
    phone: '(856) 555-0101',
    role: 'supervisor',
    organizationId: 'org-001',
    teamId: 'team-001',
    licenseNumber: 'NJ-DL-123456',
    licenseExpiry: new Date('2025-06-15'),
    certifications: [
      {
        id: 'cert-001',
        name: 'Golf Cart Safety Certification',
        issuingAuthority: 'Golf Cart Safety Institute',
        issueDate: new Date('2023-01-15'),
        expiryDate: new Date('2025-01-15'),
        certificateNumber: 'GCS-2023-001',
        status: 'active'
      }
    ],
    assignedCarts: ['cart-001'],
    schedule: [
      {
        id: 'sched-001',
        dayOfWeek: 1, // Monday
        startTime: '06:00',
        endTime: '18:00',
        isActive: true
      }
    ],
    emergencyContact: {
      name: 'Sarah Johnson',
      relationship: 'Spouse',
      phone: '(856) 555-0102'
    },
    preferences: {
      language: 'en',
      notifications: true,
      theme: 'light'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'person-002',
    firstName: 'David',
    lastName: 'Williams',
    email: 'david.williams@pinevalleygc.com',
    phone: '(856) 555-0103',
    role: 'driver',
    organizationId: 'org-001',
    teamId: 'team-001',
    licenseNumber: 'NJ-DL-123457',
    licenseExpiry: new Date('2024-12-20'),
    certifications: [
      {
        id: 'cert-002',
        name: 'Golf Cart Safety Certification',
        issuingAuthority: 'Golf Cart Safety Institute',
        issueDate: new Date('2023-03-10'),
        expiryDate: new Date('2025-03-10'),
        certificateNumber: 'GCS-2023-002',
        status: 'active'
      }
    ],
    assignedCarts: ['cart-002'],
    schedule: [
      {
        id: 'sched-002',
        dayOfWeek: 2, // Tuesday
        startTime: '06:00',
        endTime: '18:00',
        isActive: true
      }
    ],
    emergencyContact: {
      name: 'Lisa Williams',
      relationship: 'Spouse',
      phone: '(856) 555-0104'
    },
    preferences: {
      language: 'en',
      notifications: true,
      theme: 'dark'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'person-003',
    firstName: 'Robert',
    lastName: 'Brown',
    email: 'robert.brown@pinevalleygc.com',
    phone: '(856) 555-0105',
    role: 'technician',
    organizationId: 'org-001',
    teamId: 'team-002',
    certifications: [
      {
        id: 'cert-003',
        name: 'Golf Cart Technician Certification',
        issuingAuthority: 'Golf Cart Technical Institute',
        issueDate: new Date('2022-08-20'),
        expiryDate: new Date('2024-08-20'),
        certificateNumber: 'GCT-2022-001',
        status: 'active'
      }
    ],
    assignedCarts: [],
    schedule: [
      {
        id: 'sched-003',
        dayOfWeek: 1, // Monday
        startTime: '07:00',
        endTime: '16:00',
        isActive: true
      }
    ],
    emergencyContact: {
      name: 'Jennifer Brown',
      relationship: 'Spouse',
      phone: '(856) 555-0106'
    },
    preferences: {
      language: 'en',
      notifications: true,
      theme: 'auto'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'person-004',
    firstName: 'Thomas',
    lastName: 'Davis',
    email: 'thomas.davis@pinevalleygc.com',
    phone: '(856) 555-0107',
    role: 'technician',
    organizationId: 'org-001',
    teamId: 'team-002',
    certifications: [
      {
        id: 'cert-004',
        name: 'Golf Cart Technician Certification',
        issuingAuthority: 'Golf Cart Technical Institute',
        issueDate: new Date('2023-01-15'),
        expiryDate: new Date('2025-01-15'),
        certificateNumber: 'GCT-2023-001',
        status: 'active'
      }
    ],
    assignedCarts: [],
    schedule: [
      {
        id: 'sched-004',
        dayOfWeek: 2, // Tuesday
        startTime: '07:00',
        endTime: '16:00',
        isActive: true
      }
    ],
    emergencyContact: {
      name: 'Amanda Davis',
      relationship: 'Spouse',
      phone: '(856) 555-0108'
    },
    preferences: {
      language: 'en',
      notifications: true,
      theme: 'light'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'person-005',
    firstName: 'James',
    lastName: 'Wilson',
    email: 'james.wilson@augustanational.com',
    phone: '(706) 555-0201',
    role: 'supervisor',
    organizationId: 'org-002',
    teamId: 'team-003',
    licenseNumber: 'GA-DL-123456',
    licenseExpiry: new Date('2025-08-10'),
    certifications: [
      {
        id: 'cert-005',
        name: 'Golf Cart Safety Certification',
        issuingAuthority: 'Golf Cart Safety Institute',
        issueDate: new Date('2023-02-20'),
        expiryDate: new Date('2025-02-20'),
        certificateNumber: 'GCS-2023-003',
        status: 'active'
      }
    ],
    assignedCarts: ['cart-004'],
    schedule: [
      {
        id: 'sched-005',
        dayOfWeek: 1, // Monday
        startTime: '06:00',
        endTime: '18:00',
        isActive: true
      }
    ],
    emergencyContact: {
      name: 'Emily Wilson',
      relationship: 'Spouse',
      phone: '(706) 555-0202'
    },
    preferences: {
      language: 'en',
      notifications: true,
      theme: 'light'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: 'person-006',
    firstName: 'Christopher',
    lastName: 'Taylor',
    email: 'christopher.taylor@augustanational.com',
    phone: '(706) 555-0203',
    role: 'driver',
    organizationId: 'org-002',
    teamId: 'team-003',
    licenseNumber: 'GA-DL-123457',
    licenseExpiry: new Date('2024-11-15'),
    certifications: [
      {
        id: 'cert-006',
        name: 'Golf Cart Safety Certification',
        issuingAuthority: 'Golf Cart Safety Institute',
        issueDate: new Date('2023-04-05'),
        expiryDate: new Date('2025-04-05'),
        certificateNumber: 'GCS-2023-004',
        status: 'active'
      }
    ],
    assignedCarts: ['cart-005'],
    schedule: [
      {
        id: 'sched-006',
        dayOfWeek: 2, // Tuesday
        startTime: '06:00',
        endTime: '18:00',
        isActive: true
      }
    ],
    emergencyContact: {
      name: 'Rachel Taylor',
      relationship: 'Spouse',
      phone: '(706) 555-0204'
    },
    preferences: {
      language: 'en',
      notifications: true,
      theme: 'dark'
    },
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-20')
  }
];

// Mock Carts
export const mockCarts: Cart[] = [
  {
    id: 'cart-001',
    serialNumber: 'GC-2024-001',
    model: 'Onward',
    manufacturer: 'Club Car',
    year: 2024,
    type: 'golf',
    status: 'active',
    location: {
      latitude: 39.7942,
      longitude: -74.9707,
      facility: 'fac-001',
      zone: 'Zone A'
    },
    specifications: {
      batteryType: 'Lithium-Ion',
      batteryCapacity: 48,
      maxSpeed: 19,
      maxLoad: 1000,
      dimensions: {
        length: 120,
        width: 48,
        height: 72
      }
    },
    maintenanceHistory: [],
    currentDriver: 'person-001',
    assignedTeam: 'team-001',
    lastInspection: new Date('2024-01-10'),
    nextInspection: new Date('2024-04-10'),
    totalMileage: 1250,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'cart-002',
    serialNumber: 'GC-2024-002',
    model: 'Onward',
    manufacturer: 'Club Car',
    year: 2024,
    type: 'golf',
    status: 'active',
    location: {
      latitude: 39.7943,
      longitude: -74.9708,
      facility: 'fac-001',
      zone: 'Zone B'
    },
    specifications: {
      batteryType: 'Lithium-Ion',
      batteryCapacity: 48,
      maxSpeed: 19,
      maxLoad: 1000,
      dimensions: {
        length: 120,
        width: 48,
        height: 72
      }
    },
    maintenanceHistory: [],
    currentDriver: 'person-002',
    assignedTeam: 'team-001',
    lastInspection: new Date('2024-01-12'),
    nextInspection: new Date('2024-04-12'),
    totalMileage: 980,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'cart-003',
    serialNumber: 'GC-2023-001',
    model: 'Club Car Tempo',
    manufacturer: 'Club Car',
    year: 2023,
    type: 'golf',
    status: 'maintenance',
    location: {
      latitude: 39.7945,
      longitude: -74.9710,
      facility: 'fac-002',
      zone: 'Maintenance'
    },
    specifications: {
      batteryType: 'Lead-Acid',
      batteryCapacity: 48,
      maxSpeed: 19,
      maxLoad: 1000,
      dimensions: {
        length: 120,
        width: 48,
        height: 72
      }
    },
    maintenanceHistory: [],
    assignedTeam: 'team-002',
    lastInspection: new Date('2024-01-08'),
    nextInspection: new Date('2024-04-08'),
    totalMileage: 2100,
    createdAt: new Date('2023-06-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'cart-004',
    serialNumber: 'GC-2024-003',
    model: 'Prescedent',
    manufacturer: 'Club Car',
    year: 2024,
    type: 'golf',
    status: 'active',
    location: {
      latitude: 33.5021,
      longitude: -82.0226,
      facility: 'fac-003',
      zone: 'Zone 1'
    },
    specifications: {
      batteryType: 'Lithium-Ion',
      batteryCapacity: 48,
      maxSpeed: 19,
      maxLoad: 1000,
      dimensions: {
        length: 120,
        width: 48,
        height: 72
      }
    },
    maintenanceHistory: [],
    currentDriver: 'person-005',
    assignedTeam: 'team-003',
    lastInspection: new Date('2024-01-15'),
    nextInspection: new Date('2024-04-15'),
    totalMileage: 850,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: 'cart-005',
    serialNumber: 'GC-2024-004',
    model: 'Onward',
    manufacturer: 'Club Car',
    year: 2024,
    type: 'golf',
    status: 'active',
    location: {
      latitude: 33.5022,
      longitude: -82.0227,
      facility: 'fac-003',
      zone: 'Zone 2'
    },
    specifications: {
      batteryType: 'Lithium-Ion',
      batteryCapacity: 48,
      maxSpeed: 19,
      maxLoad: 1000,
      dimensions: {
        length: 120,
        width: 48,
        height: 72
      }
    },
    maintenanceHistory: [],
    currentDriver: 'person-006',
    assignedTeam: 'team-003',
    lastInspection: new Date('2024-01-18'),
    nextInspection: new Date('2024-04-18'),
    totalMileage: 720,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: 'cart-006',
    serialNumber: 'GC-2023-002',
    model: 'Tempo',
    manufacturer: 'Club Car',
    year: 2023,
    type: 'golf',
    status: 'active',
    location: {
      latitude: 33.5023,
      longitude: -82.0228,
      facility: 'fac-003',
      zone: 'Zone 3'
    },
    specifications: {
      batteryType: 'Lead-Acid',
      batteryCapacity: 48,
      maxSpeed: 19,
      maxLoad: 1000,
      dimensions: {
        length: 120,
        width: 48,
        height: 72
      }
    },
    maintenanceHistory: [],
    assignedTeam: 'team-003',
    lastInspection: new Date('2024-01-20'),
    nextInspection: new Date('2024-04-20'),
    totalMileage: 1850,
    createdAt: new Date('2023-08-01'),
    updatedAt: new Date('2024-01-20')
  }
];

// Mock Tasks
export const mockTasks: Task[] = [
  {
    id: 'task-001',
    title: 'Battery Inspection - Cart GC-2024-001',
    description: 'Perform routine battery inspection and cleaning for cart GC-2024-001',
    type: 'inspection',
    priority: 'medium',
    status: 'completed',
    assignedTo: 'person-003',
    assignedCart: 'cart-001',
    organizationId: 'org-001',
    teamId: 'team-002',
    location: {
      latitude: 39.7942,
      longitude: -74.9707,
      facility: 'fac-001'
    },
    estimatedDuration: 30,
    actualDuration: 25,
    scheduledDate: new Date('2024-01-10'),
    dueDate: new Date('2024-01-10'),
    completedDate: new Date('2024-01-10'),
    checklist: [
      {
        id: 'item-001',
        description: 'Check battery voltage',
        completed: true,
        completedBy: 'person-003',
        completedAt: new Date('2024-01-10'),
        required: true
      },
      {
        id: 'item-002',
        description: 'Clean battery terminals',
        completed: true,
        completedBy: 'person-003',
        completedAt: new Date('2024-01-10'),
        required: true
      },
      {
        id: 'item-003',
        description: 'Test charging system',
        completed: true,
        completedBy: 'person-003',
        completedAt: new Date('2024-01-10'),
        required: true
      }
    ],
    attachments: [],
    notes: ['Battery in good condition', 'Terminals cleaned and tightened'],
    tags: ['battery', 'inspection', 'routine'],
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: 'task-002',
    title: 'Tire Replacement - Cart GC-2023-001',
    description: 'Replace worn tires on cart GC-2023-001',
    type: 'repair',
    priority: 'high',
    status: 'in_progress',
    assignedTo: 'person-004',
    assignedCart: 'cart-003',
    organizationId: 'org-001',
    teamId: 'team-002',
    location: {
      latitude: 39.7945,
      longitude: -74.9710,
      facility: 'fac-002'
    },
    estimatedDuration: 120,
    actualDuration: 90,
    scheduledDate: new Date('2024-01-15'),
    dueDate: new Date('2024-01-15'),
    checklist: [
      {
        id: 'item-004',
        description: 'Remove old tires',
        completed: true,
        completedBy: 'person-004',
        completedAt: new Date('2024-01-15'),
        required: true
      },
      {
        id: 'item-005',
        description: 'Install new tires',
        completed: false,
        required: true
      },
      {
        id: 'item-006',
        description: 'Test drive cart',
        completed: false,
        required: true
      }
    ],
    attachments: [],
    notes: ['Tires ordered and received', 'Old tires removed successfully'],
    tags: ['tires', 'repair', 'urgent'],
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'task-003',
    title: 'Cart Cleaning - Cart GC-2024-002',
    description: 'Deep clean cart GC-2024-002 including seats and storage compartments',
    type: 'cleaning',
    priority: 'low',
    status: 'pending',
    assignedTo: 'person-002',
    assignedCart: 'cart-002',
    organizationId: 'org-001',
    teamId: 'team-001',
    location: {
      latitude: 39.7943,
      longitude: -74.9708,
      facility: 'fac-001'
    },
    estimatedDuration: 45,
    scheduledDate: new Date('2024-01-16'),
    dueDate: new Date('2024-01-16'),
    checklist: [
      {
        id: 'item-007',
        description: 'Vacuum interior',
        completed: false,
        required: true
      },
      {
        id: 'item-008',
        description: 'Clean seats',
        completed: false,
        required: true
      },
      {
        id: 'item-009',
        description: 'Wipe down dashboard',
        completed: false,
        required: true
      }
    ],
    attachments: [],
    notes: [],
    tags: ['cleaning', 'maintenance'],
    createdAt: new Date('2024-01-14'),
    updatedAt: new Date('2024-01-14')
  }
];

// Mock Suggested Maintenance
export const mockSuggestedMaintenance: SuggestedMaintenance[] = [
  {
    id: 'maintenance-001',
    cartId: 'cart-001',
    type: 'preventive',
    category: 'battery',
    title: 'Battery Maintenance',
    description: 'Routine battery maintenance including cleaning and testing',
    priority: 'medium',
    estimatedCost: {
      min: 0,
      max: 50,
      currency: 'USD'
    },
    estimatedDuration: 30,
    recommendedInterval: 90,
    lastPerformed: new Date('2024-01-10'),
    nextDueDate: new Date('2024-04-10'),
    partsRequired: [],
    instructions: [
      'Check battery voltage',
      'Clean battery terminals',
      'Test charging system',
      'Record maintenance in log'
    ],
    safetyNotes: [
      'Wear safety gloves',
      'Ensure cart is turned off',
      'Work in well-ventilated area'
    ],
    isRecurring: true,
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-10')
  },
  {
    id: 'maintenance-002',
    cartId: 'cart-003',
    type: 'corrective',
    category: 'tires',
    title: 'Tire Replacement',
    description: 'Replace worn tires with new ones',
    priority: 'high',
    estimatedCost: {
      min: 200,
      max: 300,
      currency: 'USD'
    },
    estimatedDuration: 120,
    recommendedInterval: 365,
    lastPerformed: new Date('2023-01-15'),
    nextDueDate: new Date('2024-01-15'),
    partsRequired: [
      {
        id: 'part-001',
        name: 'Golf Cart Tire Set',
        partNumber: 'GC-TIRE-001',
        manufacturer: 'Golf Cart Tire Co',
        quantity: 4,
        estimatedCost: 250,
        supplier: 'Golf Cart Parts Supply',
        inStock: true
      }
    ],
    instructions: [
      'Remove old tires',
      'Install new tires',
      'Check tire pressure',
      'Test drive cart'
    ],
    safetyNotes: [
      'Use proper lifting equipment',
      'Ensure cart is secured',
      'Check tire pressure after installation'
    ],
    isRecurring: false,
    createdAt: new Date('2024-01-12'),
    updatedAt: new Date('2024-01-15')
  }
];

// Mock Gold Cart Dealers
export const mockGoldCartDealers: GoldCartDealer[] = [
  {
    id: 'dealer-001',
    name: 'Pine Valley Golf Cart Service',
    type: 'authorized_dealer',
    address: {
      street: '100 Golf Cart Lane',
      city: 'Pine Valley',
      state: 'NJ',
      zipCode: '08021',
      country: 'USA'
    },
    location: {
      latitude: 39.7950,
      longitude: -74.9720
    },
    contact: {
      phone: '(856) 555-0200',
      email: 'service@pinevalleygolfcarts.com',
      website: 'https://pinevalleygolfcarts.com',
      hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM'
    },
    services: ['sales', 'service', 'parts', 'warranty'],
    brands: ['E-Z-GO', 'Club Car', 'Yamaha'],
    rating: 4.8,
    distance: 2.5,
    isPreferred: true,
    notes: 'Preferred dealer for Pine Valley Golf Club',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: 'dealer-002',
    name: 'Augusta Golf Cart Center',
    type: 'service_center',
    address: {
      street: '200 Masters Drive',
      city: 'Augusta',
      state: 'GA',
      zipCode: '30904',
      country: 'USA'
    },
    location: {
      latitude: 33.5030,
      longitude: -82.0230
    },
    contact: {
      phone: '(706) 555-0300',
      email: 'service@augustagolfcarts.com',
      website: 'https://augustagolfcarts.com',
      hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-5PM'
    },
    services: ['service', 'parts', 'repair'],
    brands: ['E-Z-GO', 'Club Car', 'Yamaha', 'Star EV'],
    rating: 4.6,
    distance: 3.2,
    isPreferred: true,
    notes: 'Authorized service center for Augusta National',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-20')
  },
  {
    id: 'dealer-003',
    name: 'Golf Cart Parts Supply',
    type: 'parts_supplier',
    address: {
      street: '300 Parts Avenue',
      city: 'Atlanta',
      state: 'GA',
      zipCode: '30301',
      country: 'USA'
    },
    location: {
      latitude: 33.7490,
      longitude: -84.3880
    },
    contact: {
      phone: '(404) 555-0400',
      email: 'orders@golfcartpartssupply.com',
      website: 'https://golfcartpartssupply.com',
      hours: 'Mon-Fri: 8AM-5PM'
    },
    services: ['parts', 'shipping'],
    brands: ['E-Z-GO', 'Club Car', 'Yamaha', 'Star EV', 'Garia'],
    rating: 4.4,
    distance: 150.0,
    isPreferred: false,
    notes: 'Wholesale parts supplier',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-15')
  }
];

// Mock Maintenance Records
export const mockMaintenanceRecords: MaintenanceRecord[] = [
  {
    id: 'record-001',
    cartId: 'cart-001',
    type: 'scheduled',
    performedBy: 'person-003',
    performedAt: new Date('2024-01-10'),
    description: 'Routine battery maintenance and inspection',
    partsUsed: [],
    laborHours: 0.5,
    totalCost: 0,
    notes: 'Battery in excellent condition, terminals cleaned',
    nextServiceDate: new Date('2024-04-10'),
    attachments: []
  },
  {
    id: 'record-002',
    cartId: 'cart-003',
    type: 'repair',
    performedBy: 'person-004',
    performedAt: new Date('2024-01-15'),
    description: 'Tire replacement - all four tires',
    partsUsed: [
      {
        id: 'part-001',
        name: 'Golf Cart Tire Set',
        partNumber: 'GC-TIRE-001',
        manufacturer: 'Golf Cart Tire Co',
        quantity: 4,
        estimatedCost: 250,
        supplier: 'Golf Cart Parts Supply',
        inStock: true
      }
    ],
    laborHours: 2.0,
    totalCost: 350,
    notes: 'All tires replaced, cart tested and ready for service',
    nextServiceDate: new Date('2025-01-15'),
    attachments: []
  }
];

// Mock Attachments
export const mockAttachments: Attachment[] = [
  {
    id: 'attach-001',
    filename: 'battery_inspection_2024_01_10.jpg',
    originalName: 'battery_inspection.jpg',
    mimeType: 'image/jpeg',
    size: 2048576,
    url: '/uploads/battery_inspection_2024_01_10.jpg',
    uploadedBy: 'person-003',
    uploadedAt: new Date('2024-01-10')
  },
  {
    id: 'attach-002',
    filename: 'tire_replacement_2024_01_15.pdf',
    originalName: 'tire_replacement_report.pdf',
    mimeType: 'application/pdf',
    size: 512000,
    url: '/uploads/tire_replacement_2024_01_15.pdf',
    uploadedBy: 'person-004',
    uploadedAt: new Date('2024-01-15')
  }
];

// Mock Notifications
export const mockNotifications: Notification[] = [
  {
    id: 'notif-001',
    type: 'maintenance_due',
    title: 'Maintenance Due',
    message: 'Cart GC-2024-001 is due for battery maintenance',
    recipientId: 'person-003',
    relatedEntity: {
      type: 'cart',
      id: 'cart-001'
    },
    isRead: false,
    createdAt: new Date('2024-01-08')
  },
  {
    id: 'notif-002',
    type: 'task_assigned',
    title: 'New Task Assigned',
    message: 'You have been assigned a tire replacement task for cart GC-2023-001',
    recipientId: 'person-004',
    relatedEntity: {
      type: 'task',
      id: 'task-002'
    },
    isRead: false,
    createdAt: new Date('2024-01-12')
  },
  {
    id: 'notif-003',
    type: 'cart_issue',
    title: 'Cart Issue Detected',
    message: 'Cart GC-2023-001 has been moved to maintenance status due to tire wear',
    recipientId: 'person-001',
    relatedEntity: {
      type: 'cart',
      id: 'cart-003'
    },
    isRead: true,
    createdAt: new Date('2024-01-12')
  }
];

// Export all mock data
export const mockData = {
  organizations: mockOrganizations,
  facilities: mockFacilities,
  teams: mockTeams,
  people: mockPeople,
  carts: mockCarts,
  tasks: mockTasks,
  suggestedMaintenance: mockSuggestedMaintenance,
  goldCartDealers: mockGoldCartDealers,
  maintenanceRecords: mockMaintenanceRecords,
  attachments: mockAttachments,
  notifications: mockNotifications
}; 