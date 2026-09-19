/**
 * Currency, date, and storage helper utilities for India Car Rental
 */

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

// Keep formatRupiah as an alias pointing to formatINR for backward compatibility
export const formatRupiah = formatINR;

export function formatNumberShort(amount: number): string {
  if (amount >= 10000000) {
    const cr = amount / 10000000;
    return `₹${cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(2)} Cr`;
  }
  if (amount >= 100000) {
    const lk = amount / 100000;
    return `₹${lk % 1 === 0 ? lk.toFixed(0) : lk.toFixed(1)} Lakh`;
  }
  if (amount >= 1000) {
    return `₹${(amount / 1000).toFixed(0)}K`;
  }
  return `₹${amount}`;
}

export function formatIndianWords(amount: number): string {
  if (amount >= 10000000) {
    const cr = amount / 10000000;
    return `${cr % 1 === 0 ? cr.toFixed(0) : cr.toFixed(2)} Crore`;
  }
  if (amount >= 100000) {
    const lk = amount / 100000;
    return `${lk % 1 === 0 ? lk.toFixed(0) : lk.toFixed(1)} Lakh`;
  }
  if (amount >= 1000) {
    return `${(amount / 1000).toFixed(0)} Thousand`;
  }
  return `${amount}`;
}

export function calculateDaysBetween(startDate: string, endDate: string): number {
  if (!startDate || !endDate) return 1;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(1, diffDays);
}

export function getTodayDateString(): string {
  const today = new Date();
  return today.toISOString().split('T')[0];
}

export function getTomorrowDateString(daysAhead: number = 1): string {
  const target = new Date();
  target.setDate(target.getDate() + daysAhead);
  return target.toISOString().split('T')[0];
}

export function generateBookingId(): string {
  const letters = 'IND';
  const randomNum = Math.floor(10000 + Math.random() * 90000);
  return `${letters}-${randomNum}`;
}
