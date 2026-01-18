import React from 'react';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  description: string;
  imageUrl: string;
  phone?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Property {
  id: number;
  title: string;
  location: string;
  guests: number;
  bedrooms: number;
  imageUrl: string;
  pricePerNight?: string;
  airbnbUrl?: string;
}
