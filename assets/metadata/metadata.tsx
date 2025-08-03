// Cart Care Pro App Metadata
// This file contains all the metadata structures and types used throughout the application

export interface Cart {
  id: string;
  serialNumber: string;
  model: string;
  manufacturer: string;
  year: number;
  type: 'golf' | 'utility' | 'transport' | 'specialty';
  status: 'active' | 'maintenance' | 'retired' | 'repair';
  location: {
    latitude: number;
    longitude: number;
    facility?: string;
    zone?: string;
  };
  specifications: {
    batteryType: string;
    batteryCapacity: number;
    maxSpeed: number;
    maxLoad: number;
    dimensions: {
      length: number;
      width: number;
      height: number;
    };
  };
  maintenanceHistory: MaintenanceRecord[];
  currentDriver?: string;
  assignedTeam?: string;
  lastInspection?: Date;
  nextInspection?: Date;
  totalMileage: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Person {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: 'driver' | 'technician' | 'manager' | 'admin' | 'supervisor';
  organizationId: string;
  teamId?: string;
  licenseNumber?: string;
  licenseExpiry?: Date;
  certifications: Certification[];
  assignedCarts: string[]; // Cart IDs
  schedule: Schedule[];
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  preferences: {
    language: string;
    notifications: boolean;
    theme: 'light' | 'dark' | 'auto';
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface Organization {
  id: string;
  name: string;
  type: 'golf_course' | 'resort' | 'university' | 'corporate' | 'municipal';
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  contact: {
    primaryContact: string;
    phone: string;
    email: string;
    website?: string;
  };
  subscription: {
    plan: 'basic' | 'premium' | 'enterprise';
    startDate: Date;
    endDate: Date;
    features: string[];
  };
  settings: {
    timezone: string;
    currency: string;
    units: 'metric' | 'imperial';
    maintenanceReminders: boolean;
    autoScheduling: boolean;
  };
  teams: Team[];
  facilities: Facility[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  type: 'maintenance' | 'inspection' | 'repair' | 'cleaning' | 'battery_charge' | 'custom';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled' | 'overdue';
  assignedTo?: string; // Person ID
  assignedCart?: string; // Cart ID
  organizationId: string;
  teamId?: string;
  location?: {
    latitude: number;
    longitude: number;
    facility?: string;
  };
  estimatedDuration: number; // in minutes
  actualDuration?: number;
  scheduledDate?: Date;
  dueDate: Date;
  completedDate?: Date;
  checklist: TaskItem[];
  attachments: Attachment[];
  notes: string[];
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

export interface TaskItem {
  id: string;
  description: string;
  completed: boolean;
  completedBy?: string;
  completedAt?: Date;
  required: boolean;
}

export interface SuggestedMaintenance {
  id: string;
  cartId: string;
  type: 'preventive' | 'predictive' | 'corrective';
  category: 'battery' | 'tires' | 'brakes' | 'electrical' | 'mechanical' | 'cosmetic';
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high' | 'critical';
  estimatedCost: {
    min: number;
    max: number;
    currency: string;
  };
  estimatedDuration: number; // in minutes
  recommendedInterval: number; // in days
  lastPerformed?: Date;
  nextDueDate: Date;
  partsRequired: MaintenancePart[];
  instructions: string[];
  safetyNotes: string[];
  isRecurring: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface MaintenancePart {
  id: string;
  name: string;
  partNumber: string;
  manufacturer: string;
  quantity: number;
  estimatedCost: number;
  supplier?: string;
  inStock: boolean;
}

export interface GoldCartDealer {
  id: string;
  name: string;
  type: 'authorized_dealer' | 'service_center' | 'parts_supplier';
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  location: {
    latitude: number;
    longitude: number;
  };
  contact: {
    phone: string;
    email: string;
    website?: string;
    hours: string;
  };
  services: string[];
  brands: string[];
  rating: number;
  distance?: number; // in miles/km
  isPreferred: boolean;
  notes: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Team {
  id: string;
  name: string;
  organizationId: string;
  type: 'maintenance' | 'operations' | 'fleet_management' | 'customer_service';
  members: TeamMember[];
  supervisor?: string; // Person ID
  assignedCarts: string[]; // Cart IDs
  assignedFacilities: string[]; // Facility IDs
  schedule: TeamSchedule;
  performance: TeamPerformance;
  createdAt: Date;
  updatedAt: Date;
}

export interface TeamMember {
  personId: string;
  role: 'member' | 'lead' | 'supervisor';
  joinDate: Date;
  isActive: boolean;
}

export interface TeamSchedule {
  workDays: number[]; // 0-6 (Sunday-Saturday)
  startTime: string; // HH:MM
  endTime: string; // HH:MM
  timezone: string;
  breaks: Break[];
}

export interface Break {
  startTime: string;
  endTime: string;
  type: 'lunch' | 'coffee' | 'other';
}

export interface TeamPerformance {
  tasksCompleted: number;
  averageCompletionTime: number; // in minutes
  customerSatisfaction: number; // 1-5 scale
  efficiency: number; // percentage
  lastUpdated: Date;
}

export interface Facility {
  id: string;
  name: string;
  organizationId: string;
  type: 'golf_course' | 'maintenance_shop' | 'storage' | 'charging_station';
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  location: {
    latitude: number;
    longitude: number;
  };
  capacity: {
    carts: number;
    chargingStations: number;
    parkingSpaces: number;
  };
  equipment: string[]; // Equipment IDs
  assignedTeams: string[]; // Team IDs
  createdAt: Date;
  updatedAt: Date;
}

export interface MaintenanceRecord {
  id: string;
  cartId: string;
  type: 'scheduled' | 'emergency' | 'inspection' | 'repair';
  performedBy: string; // Person ID
  performedAt: Date;
  description: string;
  partsUsed: MaintenancePart[];
  laborHours: number;
  totalCost: number;
  notes: string;
  nextServiceDate?: Date;
  attachments: Attachment[];
}

export interface Certification {
  id: string;
  name: string;
  issuingAuthority: string;
  issueDate: Date;
  expiryDate?: Date;
  certificateNumber: string;
  status: 'active' | 'expired' | 'pending';
}

export interface Schedule {
  id: string;
  dayOfWeek: number; // 0-6
  startTime: string; // HH:MM
  endTime: string; // HH:MM
  isActive: boolean;
}

export interface Attachment {
  id: string;
  filename: string;
  originalName: string;
  mimeType: string;
  size: number; // in bytes
  url: string;
  uploadedBy: string; // Person ID
  uploadedAt: Date;
}

// Utility types for common operations
export type EntityType = 'cart' | 'person' | 'organization' | 'task' | 'maintenance' | 'dealer' | 'team';

export interface SearchFilters {
  entityType: EntityType;
  organizationId?: string;
  teamId?: string;
  status?: string;
  dateRange?: {
    start: Date;
    end: Date;
  };
  location?: {
    latitude: number;
    longitude: number;
    radius: number; // in miles/km
  };
}

export interface PaginationParams {
  page: number;
  limit: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Notification types
export interface Notification {
  id: string;
  type: 'task_assigned' | 'maintenance_due' | 'cart_issue' | 'team_update' | 'system_alert';
  title: string;
  message: string;
  recipientId: string;
  relatedEntity?: {
    type: EntityType;
    id: string;
  };
  isRead: boolean;
  createdAt: Date;
}

// All interfaces are exported individually above for use throughout the application

