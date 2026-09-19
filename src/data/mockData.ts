import { Vehicle, ExtraService, Testimonial, FAQItem, LocationItem } from '../types';
import lamborghiniImage from '../assets/images/lamborghini_supercar_1789796120399.jpg';
import astonMartinImage from '../assets/images/aston_martin_db11_1789796619568.jpg';
import jaguarImage from '../assets/images/jaguar_ftype_car_1789796636344.jpg';

export const LAMBORGHINI_HERO_IMAGE = lamborghiniImage;
export const ASTON_MARTIN_IMAGE = astonMartinImage;
export const JAGUAR_IMAGE = jaguarImage;

export const VEHICLES: Vehicle[] = [
  // A - Aston Martin
  {
    id: 'aston-martin-db11',
    name: 'Aston Martin DB11 V8 Coupe',
    brand: 'Aston Martin',
    letter: 'A',
    category: 'supercar',
    transmission: 'Automatic',
    seats: 4,
    fuel: 'Twin-Turbo Petrol',
    ac: true,
    luggage: 2,
    pricePerDay: 425000,
    originalPrice: 480000,
    weeklyPrice: 2680000,
    monthlyPrice: 9500000,
    assetValue: '₹3.80 Crore',
    assetValueFormatted: '3.80 Cr',
    badge: 'SUPER EXOTIC',
    rating: 5.0,
    reviewsCount: 88,
    year: 2024,
    horsePower: '528 HP',
    acceleration: '0-100 in 4.0s',
    topSpeed: '309 km/h',
    condition: 'Concours Showroom Spec, Handcrafted British Grand Tourer',
    images: [
      astonMartinImage,
      'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Iconic British craftsmanship meets intoxicating twin-turbo V8 dynamics. Flawless aerodynamics, leather-wrapped cabin, and majestic grand touring presence.',
    features: [
      '4.0L Twin-Turbocharged V8 by AMG',
      'Curvaceous Aeroblade™ Aerodynamics',
      'Full Strathmore Hand-Stitched Leather Interior',
      'Bang & Olufsen BeoSound 13-Speaker Hi-Fi Audio',
      'Adaptive Damping System with GT/Sport/Sport+ Modes'
    ],
    availability: true
  },

  // B - Bentley Continental GT
  {
    id: 'bentley-continental-gt',
    name: 'Bentley Continental GT V8',
    brand: 'Bentley',
    letter: 'B',
    category: 'premium',
    transmission: 'Automatic',
    seats: 4,
    fuel: 'Twin-Turbo Petrol',
    ac: true,
    luggage: 3,
    pricePerDay: 390000,
    originalPrice: 440000,
    weeklyPrice: 2450000,
    monthlyPrice: 8800000,
    assetValue: '₹4.10 Crore',
    assetValueFormatted: '4.10 Cr',
    badge: 'ULTRA LUXURY',
    rating: 5.0,
    reviewsCount: 114,
    year: 2024,
    horsePower: '542 HP',
    acceleration: '0-100 in 3.9s',
    topSpeed: '318 km/h',
    condition: 'Pristine Mulliner Bespoke Specification',
    images: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'The definitive luxury grand tourer. Exquisite Diamond-in-Diamond quilting, handcrafted walnut veneers, and silky twin-turbocharged acceleration.',
    features: [
      'Bentley Rotating Dashboard Display (3-Sided)',
      'Active All-Wheel Drive & 48V Dynamic Ride System',
      'Naim for Bentley 2,200-Watt Audiophile Sound',
      'Diamond Knurled Aluminum & Hand-Selected Leather',
      'Soft-Close Doors & Heated/Ventilated Massage Chairs'
    ],
    availability: true
  },

  // B - BMW M4 Competition
  {
    id: 'bmw-m4-competition',
    name: 'BMW M4 Competition Coupé',
    brand: 'BMW',
    letter: 'B',
    category: 'supercar',
    transmission: 'Automatic',
    seats: 4,
    fuel: 'Turbo Petrol',
    ac: true,
    luggage: 2,
    pricePerDay: 235000,
    originalPrice: 275000,
    weeklyPrice: 1480000,
    monthlyPrice: 5200000,
    assetValue: '₹1.53 Crore',
    assetValueFormatted: '1.53 Cr',
    badge: 'PERFORMANCE',
    rating: 4.9,
    reviewsCount: 172,
    year: 2024,
    horsePower: '510 HP',
    acceleration: '0-100 in 3.5s',
    topSpeed: '290 km/h',
    condition: 'M Performance Package with Carbon Ceramic Brakes',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Precision German track engineering ready for open highways. Featuring BMW M xDrive, carbon bucket seats, and spine-tingling inline-6 twin-turbo roar.',
    features: [
      '3.0L M TwinPower Turbo Inline-6 (510 PS)',
      'Carbon Fiber Roof & M Carbon Aerodynamics',
      'Harman Kardon Surround Sound System',
      'M Head-Up Display with Shift Lights',
      'M Drive Professional with Track Drift Analyzer'
    ],
    availability: true
  },

  // C - Chevrolet Corvette C8
  {
    id: 'corvette-c8',
    name: 'Chevrolet Corvette C8 Stingray',
    brand: 'Chevrolet',
    letter: 'C',
    category: 'supercar',
    transmission: 'Automatic',
    seats: 2,
    fuel: 'V8 Petrol',
    ac: true,
    luggage: 2,
    pricePerDay: 215000,
    originalPrice: 250000,
    weeklyPrice: 1350000,
    monthlyPrice: 4800000,
    assetValue: '₹1.80 Crore',
    assetValueFormatted: '1.80 Cr',
    badge: 'MID-ENGINE',
    rating: 4.9,
    reviewsCount: 145,
    year: 2024,
    horsePower: '495 HP',
    acceleration: '0-100 in 2.9s',
    topSpeed: '312 km/h',
    condition: 'Z51 Performance Pack, Removable Targa Top',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Mid-engine exotic proportions with raw naturally-aspirated V8 adrenaline. Removable hardtop roof lets you soak in open-air highway drives.',
    features: [
      '6.2L LT2 Small Block Naturally Aspirated V8',
      '8-Speed Dual-Clutch Transmission with Paddle Shifters',
      'Magnetic Selective Ride Control 4.0',
      'Bose Performance Series 14-Speaker Audio',
      'Front Lift Adjustable Height with GPS Memory'
    ],
    availability: true
  },

  // D - Dodge Challenger SRT
  {
    id: 'dodge-challenger-srt',
    name: 'Dodge Challenger SRT Hellcat',
    brand: 'Dodge',
    letter: 'D',
    category: 'supercar',
    transmission: 'Automatic',
    seats: 4,
    fuel: 'Supercharged V8',
    ac: true,
    luggage: 3,
    pricePerDay: 195000,
    originalPrice: 230000,
    weeklyPrice: 1220000,
    monthlyPrice: 4300000,
    assetValue: '₹1.25 Crore',
    assetValueFormatted: '1.25 Cr',
    badge: 'MUSCLE BEAST',
    rating: 4.8,
    reviewsCount: 120,
    year: 2024,
    horsePower: '717 HP',
    acceleration: '0-100 in 3.6s',
    topSpeed: '320 km/h',
    condition: 'Widebody Package with Brembo 6-Piston Calipers',
    images: [
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Legendary American muscle supercharged to 717 horsepower. Thunderous exhaust rumble, widebody road stance, and unforgettable straight-line acceleration.',
    features: [
      '6.2L Supercharged HEMI V8 (717 HP & 890 Nm)',
      'Bilstein Adaptive Damping Suspension',
      'SRT Drive Modes & Launch Control with Line Lock',
      'Laguna Leather High-Bolster Performance Seats',
      'Air-Catcher Headlamps Directing Cool Air to Supercharger'
    ],
    availability: true
  },

  // F - Ferrari F8 Tributo
  {
    id: 'ferrari-f8-tributo',
    name: 'Ferrari F8 Tributo V8',
    brand: 'Ferrari',
    letter: 'F',
    category: 'supercar',
    transmission: 'Automatic',
    seats: 2,
    fuel: 'Twin-Turbo Petrol',
    ac: true,
    luggage: 1,
    pricePerDay: 520000,
    originalPrice: 580000,
    weeklyPrice: 3280000,
    monthlyPrice: 11800000,
    assetValue: '₹4.02 Crore',
    assetValueFormatted: '4.02 Cr',
    badge: 'PRANCING HORSE',
    rating: 5.0,
    reviewsCount: 95,
    year: 2024,
    horsePower: '720 HP',
    acceleration: '0-100 in 2.9s',
    topSpeed: '340 km/h',
    condition: 'Maranello Factory Spec, Rosso Corsa with Carbon Elements',
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'An homage to the most powerful V8 engine in Ferrari history. Instant throttle response, Formula 1 aerodynamic S-Duct, and spine-chilling Italian exhaust symphony.',
    features: [
      '3.9L Twin-Turbo 90° V8 (720 PS & 770 Nm)',
      'Ferrari Dynamic Enhancer Plus (FDE+)',
      'Carbon-Ceramic Braking Architecture',
      'S-Duct Front Downforce Channeling',
      'Passenger 7-inch Interactive Touchscreen'
    ],
    availability: true
  },

  // G - Mercedes-AMG G63 (G-Wagon)
  {
    id: 'mercedes-amg-g63',
    name: 'Mercedes-AMG G 63 (G-Wagon)',
    brand: 'Mercedes-Benz',
    letter: 'G',
    category: 'suv',
    transmission: 'Automatic',
    seats: 5,
    fuel: 'Twin-Turbo Petrol',
    ac: true,
    luggage: 4,
    pricePerDay: 340000,
    originalPrice: 385000,
    weeklyPrice: 2150000,
    monthlyPrice: 7700000,
    assetValue: '₹3.30 Crore',
    assetValueFormatted: '3.30 Cr',
    badge: 'VIP ICON',
    rating: 5.0,
    reviewsCount: 220,
    year: 2024,
    horsePower: '585 HP',
    acceleration: '0-100 in 4.5s',
    topSpeed: '240 km/h',
    condition: 'Exclusive Manufaktur Obsidian Black Edition',
    images: [
      'https://images.unsplash.com/photo-1520031441872-265e4ff70366?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'The undisputed monarch of luxury SUVs. Unmistakable boxy silhouette, side-exit AMG sport exhausts that roar, and triple differential lock dominance.',
    features: [
      'Handcrafted AMG 4.0L V8 Biturbo (585 HP & 850 Nm)',
      'AMG Performance Side Exhaust with Dual Chrome Tips',
      'Burmester Surround Sound System (15 Speakers)',
      '3 Distinct Differential Locks (Front, Center, Rear)',
      'Nappa Leather Massage Seats with Dynamic Bolsters'
    ],
    availability: true
  },

  // H - Hyundai Creta
  {
    id: 'hyundai-creta',
    name: 'Hyundai Creta SX (O) Turbo',
    brand: 'Hyundai',
    letter: 'H',
    category: 'suv',
    transmission: 'Automatic',
    seats: 5,
    fuel: 'Petrol',
    ac: true,
    luggage: 3,
    pricePerDay: 2800,
    originalPrice: 3200,
    weeklyPrice: 17500,
    monthlyPrice: 62000,
    assetValue: '₹20.15 Lakh',
    assetValueFormatted: '20.15 Lakh',
    badge: 'POPULAR',
    rating: 4.8,
    reviewsCount: 345,
    year: 2024,
    condition: 'Mint Condition, Fully Sanitized',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'India’s most loved compact luxury SUV. Features a voice-enabled panoramic sunroof, Level-2 ADAS safety, and silky-smooth DCT automatic transmission.',
    features: [
      '1.5L Turbo GDi Petrol Engine with 7-Speed DCT',
      'Voice-Enabled Smart Panoramic Sunroof',
      'Level 2 ADAS (Collision Warning, Lane Keep, Smart Cruise)',
      'Bose Premium 8-Speaker Sound Architecture',
      'Dual 10.25-inch Connected Infotainment Displays',
      'High Ground Clearance (190 mm) for Indian Road Conditions'
    ],
    availability: true
  },

  // I - Innova Crysta
  {
    id: 'innova-crysta',
    name: 'Innova Crysta 2.4 VX (Toyota)',
    brand: 'Toyota',
    letter: 'I',
    category: 'mpv',
    transmission: 'Automatic',
    seats: 7,
    fuel: 'Diesel',
    ac: true,
    luggage: 4,
    pricePerDay: 3600,
    originalPrice: 4200,
    weeklyPrice: 23000,
    monthlyPrice: 82000,
    assetValue: '₹26.50 Lakh',
    assetValueFormatted: '26.50 Lakh',
    badge: 'TOP CHOICE',
    rating: 5.0,
    reviewsCount: 528,
    year: 2024,
    condition: 'Executive Class Condition, Toyota Genuine Care',
    images: [
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'The undisputed king of road trips and business travel across India. Unmatched ride comfort, robust 2.4L GD turbo-diesel engine, and ultra-plush captain seats.',
    features: [
      '2.4L D-4D Turbo Diesel Engine with High Torque',
      'Ultra-Comfortable Captain Seats with Retractable Armrests',
      'Ambient LED Cabin Illumination & Eco/Power Drive Modes',
      'Automatic Dual-Zone Climate Control AC',
      'Wireless Fast Charging & Multiple Fast USB Ports',
      'Vehicle Stability Control (VSC) & Hill Start Assist'
    ],
    availability: true
  },

  // J - Jaguar F-Type
  {
    id: 'jaguar-f-type',
    name: 'Jaguar F-Type R-Dynamic',
    brand: 'Jaguar',
    letter: 'J',
    category: 'supercar',
    transmission: 'Automatic',
    seats: 2,
    fuel: 'Supercharged Petrol',
    ac: true,
    luggage: 2,
    pricePerDay: 245000,
    originalPrice: 285000,
    weeklyPrice: 1540000,
    monthlyPrice: 5500000,
    assetValue: '₹1.56 Crore',
    assetValueFormatted: '1.56 Cr',
    badge: 'BRITISH CHARM',
    rating: 4.9,
    reviewsCount: 130,
    year: 2024,
    horsePower: '450 HP',
    acceleration: '0-100 in 4.4s',
    topSpeed: '285 km/h',
    condition: 'R-Dynamic Black Exterior Pack with Switchable Active Exhaust',
    images: [
      jaguarImage,
      'https://images.unsplash.com/photo-1541348263662-e0c8de4259ba?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Pure automotive drama. Seductive proportions, supercharged V8 snarl, and an opulent cockpit featuring Windsor leather and Meridian acoustic sound.',
    features: [
      '5.0L Supercharged V8 (450 PS)',
      'Switchable Active Sport Exhaust System',
      'Meridian™ 380W High-End Sound System',
      '12.3-inch Interactive Driver Digital Display',
      'Torque Vectoring by Braking & Electronic Active Differential'
    ],
    availability: true
  },

  // K - Kia EV6 GT-Line
  {
    id: 'kia-ev6-gt',
    name: 'Kia EV6 GT-Line AWD',
    brand: 'Kia',
    letter: 'K',
    category: 'premium',
    transmission: 'Automatic',
    seats: 5,
    fuel: '100% Electric (528 km Range)',
    ac: true,
    luggage: 3,
    pricePerDay: 68000,
    originalPrice: 78000,
    weeklyPrice: 425000,
    monthlyPrice: 1500000,
    assetValue: '₹65.90 Lakh',
    assetValueFormatted: '65.90 Lakh',
    badge: 'FUTURISTIC EV',
    rating: 4.9,
    reviewsCount: 160,
    year: 2024,
    horsePower: '325 HP',
    acceleration: '0-100 in 5.2s',
    topSpeed: '192 km/h',
    condition: 'Ultra-Fast 800V Architecture, Zero Emissions',
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Electric innovation defined. Lightning-fast 800V multi-charging, futuristic crossover styling, dual curved displays, and whisper-quiet AWD acceleration.',
    features: [
      '77.4 kWh Battery Pack (528 km certified range)',
      'Dual Motor All-Wheel Drive with 605 Nm instant torque',
      'Augmented Reality Head-Up Display',
      'Meridian 14-Speaker Sound System',
      'Vehicle-to-Load (V2L) External Power Capability'
    ],
    availability: true
  },

  // L - LAMBORGHINI HURACÁN EVO (REQUESTED LAMBORGHINI IMAGE)
  {
    id: 'lamborghini-huracan',
    name: 'Lamborghini Huracán EVO V10',
    brand: 'Lamborghini',
    letter: 'L',
    category: 'supercar',
    transmission: 'Automatic',
    seats: 2,
    fuel: 'V10 Naturally Aspirated',
    ac: true,
    luggage: 1,
    pricePerDay: 485000,
    originalPrice: 550000,
    weeklyPrice: 3050000,
    monthlyPrice: 10900000,
    assetValue: '₹4.99 Crore',
    assetValueFormatted: '4.99 Cr',
    badge: 'FLAGSHIP SUPERCAR',
    rating: 5.0,
    reviewsCount: 298,
    year: 2024,
    horsePower: '640 HP',
    acceleration: '0-100 in 2.9s',
    topSpeed: '325 km/h',
    condition: 'Collector-Grade Showroom Mint, Giallo Inti Yellow',
    images: [
      lamborghiniImage,
      'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'The epitome of pure emotional Italian performance. Powered by the legendary naturally aspirated 5.2L V10 screaming to 8,500 RPM, flanked by Lamborghini Dinamica Veicolo Integrata (LDVI) predictive control.',
    features: [
      '5.2L Naturally Aspirated V10 Engine (640 HP & 600 Nm)',
      '0 to 100 km/h in 2.9 seconds with All-Wheel Steering',
      'LDVI Central Processing Unit with Predictive Driving Logic',
      'Carbon Ceramic Brakes with Monobloc 6-Piston Calipers',
      '8.4-inch HMI Capacitive Multi-Touchscreen with Telemetry',
      'Magneto-Rheological Active Suspension System'
    ],
    availability: true
  },

  // M - Mercedes-Benz S-Class S 450
  {
    id: 'mercedes-s-class',
    name: 'Mercedes-Benz S-Class S 450 4MATIC',
    brand: 'Mercedes-Benz',
    letter: 'M',
    category: 'premium',
    transmission: 'Automatic',
    seats: 4,
    fuel: 'Turbo Petrol / Mild Hybrid',
    ac: true,
    luggage: 4,
    pricePerDay: 185000,
    originalPrice: 215000,
    weeklyPrice: 1160000,
    monthlyPrice: 4100000,
    assetValue: '₹1.86 Crore',
    assetValueFormatted: '1.86 Cr',
    badge: 'EXECUTIVE VIP',
    rating: 5.0,
    reviewsCount: 240,
    year: 2024,
    condition: 'Chauffeur Driven Presidential Lounge',
    images: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'The undisputed benchmark of executive luxury automobiles worldwide. Chauffeur lounge reclining rear chairs with hot-stone massage and active ambient lighting.',
    features: [
      'Executive Rear Lounge with Calf Rests and Hot Stone Massage',
      'Burmester® 3D High-End Surround Sound (31 Speakers)',
      'AIRMATIC Air Suspension with Active Dampers',
      'OLED 12.8-inch Central Console with MBUX Interior Assist',
      'Digital Light Headlamps with 1.3 Million Micro-Mirrors'
    ],
    availability: true
  },

  // M - Mahindra Scorpio-N
  {
    id: 'mahindra-scorpio',
    name: 'Mahindra Scorpio-N Z8L 4x4',
    brand: 'Mahindra',
    letter: 'M',
    category: 'suv',
    transmission: 'Automatic',
    seats: 7,
    fuel: 'Diesel',
    ac: true,
    luggage: 4,
    pricePerDay: 3400,
    originalPrice: 3900,
    weeklyPrice: 21500,
    monthlyPrice: 75000,
    assetValue: '₹24.50 Lakh',
    assetValueFormatted: '24.50 Lakh',
    badge: 'RUGGED SUV',
    rating: 4.9,
    reviewsCount: 260,
    year: 2024,
    condition: 'Tough & Built for Indian Terrains',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Known as the "Big Daddy of SUVs" in India. High-power mHawk diesel engine with 4XPLOR terrain modes (Snow, Mud, Sand, Normal) and commanding visibility.',
    features: [
      '2.2L mHawk CRDe Turbo Diesel Engine (175 PS & 400 Nm)',
      'Electric Sunroof & Wireless Phone Charging Pad',
      'Sony 3D Immersive 12-Speaker Sound Architecture',
      '4XPLOR Intelligent Multi-Terrain All-Wheel Drive',
      'Dual-Zone Automatic AC & Driver Fatigue Detection'
    ],
    availability: true
  },

  // M - Maruti Suzuki Ertiga
  {
    id: 'maruti-ertiga',
    name: 'Maruti Suzuki Ertiga Smart Hybrid',
    brand: 'Maruti Suzuki',
    letter: 'M',
    category: 'mpv',
    transmission: 'Manual',
    seats: 7,
    fuel: 'Petrol / Hybrid',
    ac: true,
    luggage: 3,
    pricePerDay: 2200,
    originalPrice: 2600,
    weeklyPrice: 14000,
    monthlyPrice: 48000,
    assetValue: '₹13.03 Lakh',
    assetValueFormatted: '13.03 Lakh',
    badge: 'BEST SELLER',
    rating: 4.9,
    reviewsCount: 412,
    year: 2024,
    condition: 'Showroom Condition (Authorized Maruti Service)',
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'India’s favorite comfortable 7-seater family MPV. Exceptional fuel efficiency with Smart Hybrid technology, spacious cabin, and effortless highway cruising.',
    features: [
      '1.5L K15C Smart Hybrid Engine (20.5 km/l)',
      'Dual Roof-mounted Automatic AC Blowers',
      '7-inch SmartPlay Pro Touchscreen with Apple CarPlay & Android Auto',
      'Rear Parking Sensors with High-Definition Camera',
      'ISOFIX Child Seat Anchors & Quad Airbags'
    ],
    availability: true
  },

  // N - Nissan GT-R Nismo
  {
    id: 'nissan-gtr-nismo',
    name: 'Nissan GT-R Nismo Edition',
    brand: 'Nissan',
    letter: 'N',
    category: 'supercar',
    transmission: 'Automatic',
    seats: 4,
    fuel: 'Twin-Turbo Petrol',
    ac: true,
    luggage: 2,
    pricePerDay: 280000,
    originalPrice: 320000,
    weeklyPrice: 1750000,
    monthlyPrice: 6200000,
    assetValue: '₹2.12 Crore',
    assetValueFormatted: '2.12 Cr',
    badge: 'GODZILLA',
    rating: 5.0,
    reviewsCount: 154,
    year: 2024,
    horsePower: '600 HP',
    acceleration: '0-100 in 2.8s',
    topSpeed: '330 km/h',
    condition: 'Handbuilt VR38DETT Engine by Master Takumi Craftsmen',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'The legendary "Godzilla". Dual-clutch AWD rocket ship delivering ferocious grip and launch control acceleration that rivals the world’s quickest supercars.',
    features: [
      'Handcrafted 3.8L Twin-Turbocharged V6 (600 HP)',
      'ATTESA E-TS All-Wheel Drive with Mechanical LSD',
      'Brembo Carbon Ceramic Braking System',
      'Carbon Fiber Aero Bodywork & GT3-Derived Turbochargers',
      'Recaro Carbon-Backed Leather Bucket Seats'
    ],
    availability: true
  },

  // P - Porsche 911 Carrera GTS
  {
    id: 'porsche-911-carrera',
    name: 'Porsche 911 Carrera GTS',
    brand: 'Porsche',
    letter: 'P',
    category: 'supercar',
    transmission: 'Automatic',
    seats: 4,
    fuel: 'Twin-Turbo Flat-6',
    ac: true,
    luggage: 2,
    pricePerDay: 320000,
    originalPrice: 360000,
    weeklyPrice: 2000000,
    monthlyPrice: 7200000,
    assetValue: '₹2.75 Crore',
    assetValueFormatted: '2.75 Cr',
    badge: 'PRECISION',
    rating: 5.0,
    reviewsCount: 215,
    year: 2024,
    horsePower: '480 HP',
    acceleration: '0-100 in 3.3s',
    topSpeed: '311 km/h',
    condition: 'Chalk White, Sport Chrono Package with PASM Suspension',
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'The timeless benchmark of sports car engineering. Rear-engine balance, telepathic PDK dual-clutch transmission, and intoxicating flat-six acoustic howl.',
    features: [
      '3.0L Twin-Turbo Boxer-6 Engine (480 PS)',
      '8-Speed Porsche Doppelkupplung (PDK) Transmission',
      'Sport Chrono Package with Mode Switch on Steering',
      'PASM Sport Suspension (-10mm ride height)',
      'BOSE Surround Sound Architecture with 12 Speakers'
    ],
    availability: true
  },

  // R - Rolls-Royce Ghost
  {
    id: 'rolls-royce-ghost',
    name: 'Rolls-Royce Ghost Extended Wheelbase',
    brand: 'Rolls-Royce',
    letter: 'R',
    category: 'premium',
    transmission: 'Automatic',
    seats: 4,
    fuel: 'Twin-Turbo V12',
    ac: true,
    luggage: 4,
    pricePerDay: 580000,
    originalPrice: 650000,
    weeklyPrice: 3650000,
    monthlyPrice: 13200000,
    assetValue: '₹7.95 Crore',
    assetValueFormatted: '7.95 Cr',
    badge: 'PINNACLE LUXURY',
    rating: 5.0,
    reviewsCount: 75,
    year: 2024,
    horsePower: '563 HP',
    condition: 'Starlight Headliner with Shooting Star Feature',
    images: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'The sanctuary of absolute tranquility. Effortless magic carpet ride, illuminated Pantheon grille, whisper-quiet 6.75L V12, and hand-woven fiber-optic starlight ceiling.',
    features: [
      '6.75L Twin-Turbocharged V12 Engine with Planar Suspension',
      'Handcrafted Starlight Headliner with 1,340 Fiber Optic Lights',
      'Bespoke 1,300W 18-Channel Rolls-Royce Audio System',
      'Power-Assisted Effortless Doors with Built-in Umbrellas',
      'Champagne Cooler with Crystal Flutes in Rear Armrest'
    ],
    availability: true
  },

  // R - Range Rover SV Autobiography
  {
    id: 'range-rover-sv',
    name: 'Range Rover SV Autobiography 4x4',
    brand: 'Land Rover',
    letter: 'R',
    category: 'suv',
    transmission: 'Automatic',
    seats: 5,
    fuel: 'Twin-Turbo V8',
    ac: true,
    luggage: 5,
    pricePerDay: 295000,
    originalPrice: 340000,
    weeklyPrice: 1850000,
    monthlyPrice: 6600000,
    assetValue: '₹4.40 Crore',
    assetValueFormatted: '4.40 Cr',
    badge: 'ROYAL SUV',
    rating: 5.0,
    reviewsCount: 188,
    year: 2024,
    horsePower: '530 HP',
    condition: 'Special Vehicle Operations Bespoke Dual-Tone',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Peerless British luxury with sovereign off-road authority. Electronic Air Suspension with Dynamic Response Pro glides across any terrain in sublime silence.',
    features: [
      '4.4L Twin-Turbocharged V8 (530 HP & 750 Nm)',
      'Executive Class Comfort-Plus Rear Seats',
      'Meridian™ Signature 1,600W Sound System (35 Speakers)',
      'All-Wheel Steering for Maneuverability & Wading Depth of 900mm',
      'Active Noise Cancellation in Headrests'
    ],
    availability: true
  },

  // S - Skoda Superb L&K
  {
    id: 'skoda-superb',
    name: 'Skoda Superb Laurin & Klement',
    brand: 'Skoda',
    letter: 'S',
    category: 'premium',
    transmission: 'Automatic',
    seats: 5,
    fuel: 'Turbo Petrol',
    ac: true,
    luggage: 4,
    pricePerDay: 28000,
    originalPrice: 32000,
    weeklyPrice: 175000,
    monthlyPrice: 620000,
    assetValue: '₹54.00 Lakh',
    assetValueFormatted: '54.00 Lakh',
    badge: 'EXECUTIVE SEDAN',
    rating: 4.9,
    reviewsCount: 190,
    year: 2024,
    condition: 'Flagship European Sedan with Massive Legroom',
    images: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'European refinement with limousine-class rear legroom. 2.0L TSI punch, Canton 12-speaker audio, and signature Simply Clever convenience features.',
    features: [
      '2.0L TSI Turbocharged Engine with 7-Speed DSG',
      'Canton 610W 12-Speaker Sound Architecture',
      'Panoramic Sunroof & Virtual Cockpit Digital Display',
      'Boss Button (Rear Passenger adjusts front seat electronically)',
      'Three-Zone Climatronic Air Conditioning'
    ],
    availability: true
  },

  // S - Maruti Suzuki Dzire
  {
    id: 'maruti-dzire',
    name: 'Maruti Suzuki Dzire ZXi+',
    brand: 'Maruti Suzuki',
    letter: 'S',
    category: 'economy',
    transmission: 'Automatic',
    seats: 5,
    fuel: 'Petrol',
    ac: true,
    luggage: 2,
    pricePerDay: 1600,
    originalPrice: 1900,
    weeklyPrice: 10500,
    monthlyPrice: 36000,
    assetValue: '₹10.14 Lakh',
    assetValueFormatted: '10.14 Lakh',
    badge: 'BUDGET PICK',
    rating: 4.8,
    reviewsCount: 280,
    year: 2024,
    condition: 'Agile City Driver, Outstanding Mileage',
    images: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'India’s premier compact sedan. Phenomenal fuel efficiency (22+ km/l), smooth automatic transmission, and easy maneuverability in bustling city traffic.',
    features: [
      'Advanced 1.2L DualJet Dual VVT Petrol Engine',
      'Automatic Climate Control & Rear AC Vents',
      'Touchscreen Infotainment with Wireless Android Auto / Apple CarPlay',
      'Push Button Start/Stop with Smart Keyless Entry',
      'Electronic Stability Program (ESP) & Hill Hold Assist'
    ],
    availability: true
  },

  // T - Toyota Fortuner GR-S
  {
    id: 'fortuner-gr',
    name: 'Toyota Fortuner 4x4 GR-S',
    brand: 'Toyota',
    letter: 'T',
    category: 'suv',
    transmission: 'Automatic',
    seats: 7,
    fuel: 'Diesel',
    ac: true,
    luggage: 5,
    pricePerDay: 6800,
    originalPrice: 7800,
    weeklyPrice: 44000,
    monthlyPrice: 155000,
    assetValue: '₹51.44 Lakh',
    assetValueFormatted: '51.44 Lakh',
    badge: 'PREMIUM 4X4',
    rating: 4.9,
    reviewsCount: 310,
    year: 2024,
    condition: 'VIP Status, Full Ceramic Shield Coated',
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Commanding road presence and true go-anywhere 4x4 capability. Ideal for VIP delegations, weddings, hill station retreats, and long interstate highway journeys.',
    features: [
      '2.8L High-Torque Turbo Diesel (204 PS & 500 Nm)',
      '360-Degree Panoramic View Camera System',
      'Hands-free Power Tailgate with Kick Sensor',
      'JBL 11-Speaker Concert Audio System',
      'Ventilated Front Seats for Summer Comfort',
      'Active Traction Control (A-TRC) & Auto Limited Slip Differential'
    ],
    availability: true
  },

  // T - Toyota Vellfire
  {
    id: 'toyota-vellfire',
    name: 'Toyota Vellfire Executive Lounge',
    brand: 'Toyota',
    letter: 'T',
    category: 'premium',
    transmission: 'Automatic',
    seats: 7,
    fuel: 'Strong Hybrid',
    ac: true,
    luggage: 5,
    pricePerDay: 95000,
    originalPrice: 110000,
    weeklyPrice: 600000,
    monthlyPrice: 2100000,
    assetValue: '₹1.32 Crore',
    assetValueFormatted: '1.32 Cr',
    badge: 'ULTRA LUXURY',
    rating: 5.0,
    reviewsCount: 140,
    year: 2024,
    condition: 'Presidential VIP Suite on Wheels',
    images: [
      'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'The pinnacle of luxury automotive transport in India. Fitted with first-class airline Ottoman massage seats, twin sunroofs, and silent Hybrid power.',
    features: [
      'Executive Lounge Ottoman Massage Heated/Cooled Chairs',
      'Dual Independent Electric Moonroof Panels',
      'JBL VIP Theater Sound System with 17 Studio Speakers',
      'Power Dual Sliding Doors with One-Touch Convenience',
      'Nanoe™ X Hospital-grade Cabin Air Purification',
      'Toyota Safety Sense 3.0 Complete Driver Assistance'
    ],
    availability: true
  },

  // V - Volvo XC90 Recharge
  {
    id: 'volvo-xc90',
    name: 'Volvo XC90 Ultimate Recharge AWD',
    brand: 'Volvo',
    letter: 'V',
    category: 'premium',
    transmission: 'Automatic',
    seats: 7,
    fuel: 'Plug-In Hybrid',
    ac: true,
    luggage: 4,
    pricePerDay: 85000,
    originalPrice: 98000,
    weeklyPrice: 530000,
    monthlyPrice: 1850000,
    assetValue: '₹1.03 Crore',
    assetValueFormatted: '1.03 Cr',
    badge: 'SWEDISH LUXURY',
    rating: 5.0,
    reviewsCount: 165,
    year: 2024,
    horsePower: '455 HP',
    condition: 'CleanZone Air Quality System, Orrefors® Crystal Gear Shifter',
    images: [
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Scandinavian sanctuary with five-star world-class safety. 455 HP plug-in hybrid performance, genuine Orrefors crystal glass gear shifter, and Bowers & Wilkins high-fidelity sound.',
    features: [
      '455 HP Combined T8 Twin Engine Plug-In Hybrid',
      'Bowers & Wilkins High-Fidelity Audio System (19 Speakers)',
      'Swedish Handcrafted Orrefors® Crystal Gear Selector',
      'Air Suspension with Four-C Adaptive Chassis',
      'Advanced Air Purifier (PM 2.5 particle filtration)'
    ],
    availability: true
  }
];

export const TRUST_STATS = [
  {
    id: 'exp',
    number: '10+',
    unit: 'Years',
    title: 'Experience',
    description: 'Serving over 50,000+ seamless business and leisure journeys since 2014',
    icon: 'shield'
  },
  {
    id: 'customers',
    number: '50,000+',
    unit: 'Travelers',
    title: 'Happy Clients',
    description: '99.4% satisfaction score across Google Reviews and TripAdvisor India',
    icon: 'users'
  },
  {
    id: 'fleet',
    number: '150+',
    unit: 'Vehicles',
    title: 'Premium Fleet',
    description: 'All vehicles routinely serviced at authorized dealerships with full insurance',
    icon: 'car'
  },
  {
    id: 'support',
    number: '24/7',
    unit: 'Hours',
    title: 'Roadside Support',
    description: 'Round-the-clock concierge & emergency on-road breakdown support across India',
    icon: 'support'
  }
];

export const HOW_TO_ORDER_STEPS = [
  {
    step: 1,
    title: 'Choose Your Car',
    description: 'Select your ideal car from our versatile, well-maintained fleet',
    icon: 'car'
  },
  {
    step: 2,
    title: 'Select Dates',
    description: 'Pick convenient dates, duration, and airport or doorstep delivery hubs',
    icon: 'calendar'
  },
  {
    step: 3,
    title: 'Enter Details',
    description: 'Provide basic verification documents quickly with guaranteed privacy',
    icon: 'file-text'
  },
  {
    step: 4,
    title: 'Instant Confirmation',
    description: 'Get immediate confirmation voucher directly sent via WhatsApp',
    icon: 'message-circle'
  },
  {
    step: 5,
    title: 'Ready to Drive!',
    description: 'Sanitized car delivered to your doorstep, ready for an unforgettable journey',
    icon: 'check-circle'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testi-1',
    name: 'Rajesh Sharma',
    city: 'Mumbai',
    comment: 'Outstanding service! The Innova Crysta was spotless, smelled fresh, and the airport pickup at Mumbai T2 was precisely on time. Highly recommended for family trips!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    date: '12 September 2024',
    carRented: 'Toyota Innova Crysta',
    verified: true
  },
  {
    id: 'testi-2',
    name: 'Priya Patel',
    city: 'Bengaluru',
    comment: 'Transparent pricing with zero hidden charges. Booked via the website and got instant WhatsApp confirmation within 2 minutes. The self-drive experience was seamless.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    date: '28 August 2024',
    carRented: 'Hyundai Creta Turbo',
    verified: true
  },
  {
    id: 'testi-3',
    name: 'Amit Verma',
    city: 'New Delhi',
    comment: 'Top-tier fleet quality. The Fortuner delivered for our Himachal tour felt brand new right out of the showroom. Chauffeur was courteous and professional.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    date: '15 August 2024',
    carRented: 'Toyota Fortuner 4x4 GR-S',
    verified: true
  },
  {
    id: 'testi-4',
    name: 'Rohan Mehta',
    city: 'Goa',
    comment: 'Smooth door-to-door delivery at our resort in North Goa. Affordable security deposit refunded promptly upon checkout. Will definitely rent again!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    date: '04 July 2024',
    carRented: 'Maruti Suzuki Ertiga',
    verified: true
  }
];

export const EXTRA_SERVICES: ExtraService[] = [
  {
    id: 'extra-driver',
    name: 'Professional Chauffeur Service',
    price: 800,
    priceType: 'per_day',
    description: 'Experienced, verified, polite English & Hindi speaking driver. Sit back, relax, and avoid traffic stress.',
    iconName: 'user-check'
  },
  {
    id: 'extra-insurance',
    name: 'Zero Depreciation Comprehensive Protection',
    price: 350,
    priceType: 'per_day',
    description: 'Complete peace of mind against accidental scratches, minor dents, and roadside towing charges.',
    iconName: 'shield-check'
  },
  {
    id: 'extra-delivery',
    name: 'Doorstep Hotel / Airport Terminal Delivery',
    price: 500,
    priceType: 'fixed',
    description: 'Car delivered directly to your airport arrival terminal, hotel lobby, or residential address.',
    iconName: 'navigation'
  },
  {
    id: 'extra-child-seat',
    name: 'ISOFIX Certified Child Safety Seat',
    price: 250,
    priceType: 'per_day',
    description: 'International safety standard child booster seat ensuring safety and comfort for your little ones.',
    iconName: 'baby'
  }
];

export const LOCATIONS: LocationItem[] = [
  { id: 'loc-bom-apt', name: 'Mumbai Chhatrapati Shivaji Maharaj Airport (BOM T2)', city: 'Mumbai', type: 'airport', isPopular: true },
  { id: 'loc-del-apt', name: 'New Delhi Indira Gandhi International Airport (DEL T3)', city: 'New Delhi', type: 'airport', isPopular: true },
  { id: 'loc-blr-apt', name: 'Bengaluru Kempegowda International Airport (BLR T1/T2)', city: 'Bengaluru', type: 'airport', isPopular: true },
  { id: 'loc-goa-apt', name: 'Goa Dabolim / Mopa International Airport (GOI/GOX)', city: 'Goa', type: 'airport', isPopular: true },
  { id: 'loc-hyd-apt', name: 'Hyderabad Rajiv Gandhi International Airport (HYD)', city: 'Hyderabad', type: 'airport', isPopular: true },
  { id: 'loc-pnq-city', name: 'Pune Railway Station & Airport Hub (PNQ)', city: 'Pune', type: 'city', isPopular: true },
  { id: 'loc-hotel-any', name: 'Doorstep Hotel / Residence Delivery (All Cities)', city: 'Pan India', type: 'popular' }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What documents are required for car rental in India?',
    answer: 'For Self-Drive rentals: Valid Indian Driving Licence (or International Driving Permit for overseas visitors), Government-issued Photo ID (Aadhaar Card / Passport), and proof of travel (flight ticket or hotel booking). For rentals With Chauffeur, only a standard photo ID is required.'
  },
  {
    id: 'faq-2',
    question: 'Is there a refundable security deposit?',
    answer: 'For self-drive vehicles, a nominal refundable security deposit (₹3,000 to ₹5,000 depending on vehicle class) is authorized via UPI or card. This is 100% refunded back to your account within 24 hours of vehicle return inspection. Chauffeur-driven rentals require ZERO security deposit.'
  },
  {
    id: 'faq-3',
    question: 'Is doorstep delivery and airport pickup available?',
    answer: 'Yes! We provide prompt delivery directly to airport arrival gates, railway junctions, hotel lobbies, and residential addresses across all supported cities. Airport deliveries include complimentary terminal meet-and-greet.'
  },
  {
    id: 'faq-4',
    question: 'What is your cancellation and rescheduling policy?',
    answer: 'Enjoy 100% free cancellation up to 24 hours prior to trip departure time. Cancellations within 24 hours are subject to a modest 15% booking fee, or you may reschedule your travel dates free of charge.'
  },
  {
    id: 'faq-5',
    question: 'Can I hire with a professional chauffeur?',
    answer: 'Absolutely! All our chauffeurs are licensed, background-verified, punctual, and well-versed in local and interstate highways. Simply check the "Professional Chauffeur Service" add-on for just ₹800/day.'
  },
  {
    id: 'faq-6',
    question: 'How are highway tolls and fuel handled?',
    answer: 'Self-drive cars operate on a same-to-same fuel policy. All vehicles are equipped with active FASTag toll stickers, allowing effortless pass-through at national highway toll plazas; FASTag charges are settled at actuals upon car return.'
  },
  {
    id: 'faq-7',
    question: 'What happens in case of an on-road breakdown or emergency?',
    answer: 'Our 24/7 National Emergency Assistance network is always on call. In the rare event of mechanical trouble or flat tire, our quick-response mobile van or a replacement vehicle is dispatched within 90-120 minutes.'
  }
];

export const COMPANY_CONTACT = {
  name: 'India Car Rental',
  tagline: 'Premium Self-Drive & Chauffeur Car Rentals Across India',
  phoneDisplay: '+91 98765 43210',
  whatsappNumber: '919876543210',
  email: 'contact@indiacarrental.in',
  address: 'Level 4, Trade Centre, Bandra Kurla Complex (BKC), Mumbai, Maharashtra 400051, India',
  branches: [
    { city: 'Mumbai (Headquarters)', address: 'BKC Business District & Chhatrapati Shivaji Maharaj Airport T2' },
    { city: 'New Delhi', address: 'Connaught Place & Indira Gandhi International Airport T3' },
    { city: 'Bengaluru', address: '100 Feet Road, Indiranagar & Kempegowda Airport T1/T2' },
    { city: 'Goa', address: 'Panaji Promenade & Dabolim / Mopa International Airport' },
    { city: 'Hyderabad', address: 'HITEC City Cyber Towers & Rajiv Gandhi Airport' }
  ],
  workingHours: '24/7 Around the Clock (Monday - Sunday)'
};
