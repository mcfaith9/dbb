export interface ServiceItem {
  id: string;
  title: string;
  category: 'connection' | 'billing' | 'maintenance' | 'solar';
  description: string;
  badge: string;
  processingTime: string;
  iconName: string;
  highlights: string[];
}

export interface AppliancePreset {
  id: string;
  name: string;
  category: 'cooling' | 'kitchen' | 'entertainment' | 'lighting' | 'utility';
  wattage: number;
  defaultHoursPerDay: number;
  iconName: string;
}

export interface BillBreakdown {
  kwh: number;
  generation: number;
  transmission: number;
  distribution: number;
  systemLoss: number;
  taxesAndUniversal: number;
  total: number;
  lifelineDiscount: number;
  finalTotal: number;
}

export interface RequirementItem {
  id: string;
  title: string;
  issuer: string;
  description: string;
  notes?: string;
  requiredFor: ('residential' | 'commercial' | 'tenant')[];
}

export interface HotlineContact {
  id: string;
  name: string;
  agency: string;
  number: string;
  altNumber?: string;
  available: string;
  description: string;
  type: 'veco' | 'emergency' | 'cityhall' | 'fire';
}

export interface InquiryTicket {
  id: string;
  referenceNo: string;
  fullName: string;
  phone: string;
  email: string;
  barangay: string;
  serviceType: string;
  accountNumber?: string;
  notes: string;
  createdAt: string;
  status: 'Received' | 'Queued' | 'Reviewing';
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'application' | 'billing' | 'technical';
}
