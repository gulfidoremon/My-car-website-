export type VehicleCategory = 'all' | 'economy' | 'mpv' | 'suv' | 'premium' | 'supercar';

export interface Vehicle {
  id: string;
  name: string;
  brand: string;
  category: 'economy' | 'mpv' | 'suv' | 'premium' | 'supercar';
  transmission: 'Manual' | 'Automatic';
  seats: number;
  fuel: string;
  ac: boolean;
  luggage: number;
  pricePerDay: number;
  originalPrice?: number;
  weeklyPrice: number;
  monthlyPrice: number;
  badge?: string;
  rating: number;
  reviewsCount: number;
  images: string[];
  description: string;
  features: string[];
  condition: string;
  availability: boolean;
  year: number;
  letter?: string;
  horsePower?: string;
  acceleration?: string;
  topSpeed?: string;
  assetValue?: string;
  assetValueFormatted?: string;
}

export interface ExtraService {
  id: string;
  name: string;
  price: number;
  priceType: 'per_day' | 'fixed';
  description: string;
  iconName: string;
}

export interface Booking {
  id: string;
  vehicle: Vehicle;
  pickupLocation: string;
  returnLocation: string;
  pickupDate: string;
  returnDate: string;
  durationDays: number;
  rentalType: 'self' | 'driver';
  selectedExtras: string[];
  totalAmount: number;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  paymentMethod: string;
  status: 'confirmed' | 'pending' | 'completed' | 'cancelled';
  createdAt: string;
}

// Alias BookingData for backward compatibility
export type BookingData = Booking;

export interface FilterState {
  category: VehicleCategory;
  priceRange: [number, number];
  transmission: 'all' | 'Manual' | 'Automatic';
  seats: 'all' | '4' | '6' | '7' | '8+';
  fuel: 'all' | 'Petrol' | 'Diesel' | 'Hybrid';
  searchQuery: string;
  sortBy: 'recommended' | 'price_low' | 'price_high' | 'popular';
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  comment: string;
  rating: number;
  avatar: string;
  date: string;
  carRented: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface LocationItem {
  id: string;
  name: string;
  city: string;
  type: 'airport' | 'city' | 'terminal' | 'popular';
  isPopular?: boolean;
}
