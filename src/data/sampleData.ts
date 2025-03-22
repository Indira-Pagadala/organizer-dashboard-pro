
// Sample data for the admin dashboard
export const eventCategories = [
  { name: 'Tech', value: 28, color: '#2563eb' },
  { name: 'Music', value: 22, color: '#8b5cf6' },
  { name: 'Food', value: 15, color: '#f97316' },
  { name: 'Business', value: 18, color: '#0891b2' },
  { name: 'Art', value: 12, color: '#ec4899' },
  { name: 'Sports', value: 5, color: '#84cc16' },
];

export const monthlyEvents = [
  { name: 'Jan', value: 12 },
  { name: 'Feb', value: 19 },
  { name: 'Mar', value: 23 },
  { name: 'Apr', value: 17 },
  { name: 'May', value: 26 },
  { name: 'Jun', value: 39 },
  { name: 'Jul', value: 45 },
  { name: 'Aug', value: 52 },
  { name: 'Sep', value: 48 },
  { name: 'Oct', value: 57 },
  { name: 'Nov', value: 62 },
  { name: 'Dec', value: 68 },
];

export const eventAttendeeData = [
  { name: 'TechCon 2023', value: 1800 },
  { name: 'Summer Music Festival', value: 25000 },
  { name: 'International Food Festival', value: 12000 },
  { name: 'Startup Pitch Competition', value: 850 },
  { name: 'Urban Art Exhibition', value: 1200 },
];

export const sampleEvents = [
  {
    id: '1',
    title: 'TechCon 2023',
    date: 'Nov 15, 2023',
    location: 'San Francisco, CA',
    price: 299,
    attendees: 1800,
    rating: 4.8,
    category: 'Tech',
    featured: true,
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'The premier tech conference for industry professionals featuring keynotes, workshops, and networking opportunities.'
  },
  {
    id: '2',
    title: 'Summer Music Festival',
    date: 'Jul 22, 2023',
    location: 'Los Angeles, CA',
    price: 149,
    attendees: 25000,
    rating: 4.7,
    category: 'Music',
    featured: true,
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'A three-day music festival featuring top artists, multiple stages, and an unforgettable experience.'
  },
  {
    id: '3',
    title: 'International Food Festival',
    date: 'Oct 8, 2023',
    location: 'Chicago, IL',
    price: 75,
    attendees: 12000,
    rating: 4.6,
    category: 'Food',
    featured: true,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Explore cuisines from around the world with over 50 vendors, cooking demonstrations, and food tastings.'
  },
  {
    id: '4',
    title: 'Startup Pitch Competition',
    date: 'Sep 18, 2023',
    location: 'Austin, TX',
    price: 99,
    attendees: 850,
    rating: 4.5,
    category: 'Business',
    featured: false,
    image: 'https://images.unsplash.com/photo-1542744173-8659b8e39abc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80',
    description: 'Watch promising startups pitch to investors and compete for funding and resources.'
  },
  {
    id: '5',
    title: 'Urban Art Exhibition',
    date: 'Jul 30, 2023',
    location: 'Miami, FL',
    price: 35,
    attendees: 1200,
    rating: 4.4,
    category: 'Art',
    featured: false,
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-4.0.3&auto=format&fit=crop&w=2009&q=80',
    description: 'A showcase of contemporary urban art featuring local and international artists.'
  },
  {
    id: '6',
    title: 'Marathon Championship',
    date: 'Apr 12, 2023',
    location: 'Boston, MA',
    price: 120,
    attendees: 30000,
    rating: 4.9,
    category: 'Sports',
    featured: false,
    image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80',
    description: 'The annual marathon championship attracting runners from around the world.'
  }
];

export const sampleOrganizers = [
  {
    id: '1',
    name: 'TechEvents Inc.',
    email: 'contact@techevents.com',
    eventsCount: 12,
    totalAttendees: 15000,
    totalRevenue: 450000,
    commissionRate: 15,
    commissionAmount: 67500,
    avatar: 'https://ui-avatars.com/api/?name=TechEvents+Inc&background=0D8ABC&color=fff'
  },
  {
    id: '2',
    name: 'Melody Makers',
    email: 'info@melodymakers.com',
    eventsCount: 8,
    totalAttendees: 75000,
    totalRevenue: 1200000,
    commissionRate: 12,
    commissionAmount: 144000,
    avatar: 'https://ui-avatars.com/api/?name=Melody+Makers&background=8B5CF6&color=fff'
  },
  {
    id: '3',
    name: 'Foodie Festivals',
    email: 'events@foodiefestivals.com',
    eventsCount: 6,
    totalAttendees: 35000,
    totalRevenue: 525000,
    commissionRate: 10,
    commissionAmount: 52500,
    avatar: 'https://ui-avatars.com/api/?name=Foodie+Festivals&background=F97316&color=fff'
  },
  {
    id: '4',
    name: 'Business Summits',
    email: 'hello@businesssummits.com',
    eventsCount: 5,
    totalAttendees: 7500,
    totalRevenue: 375000,
    commissionRate: 20,
    commissionAmount: 75000,
    avatar: 'https://ui-avatars.com/api/?name=Business+Summits&background=0891B2&color=fff'
  },
  {
    id: '5',
    name: 'Art Gallery Collective',
    email: 'exhibits@artgallery.com',
    eventsCount: 7,
    totalAttendees: 9000,
    totalRevenue: 180000,
    commissionRate: 8,
    commissionAmount: 14400,
    avatar: 'https://ui-avatars.com/api/?name=Art+Gallery+Collective&background=EC4899&color=fff'
  },
  {
    id: '6',
    name: 'Sports United',
    email: 'games@sportsunited.com',
    eventsCount: 4,
    totalAttendees: 85000,
    totalRevenue: 650000,
    commissionRate: 18,
    commissionAmount: 117000,
    avatar: 'https://ui-avatars.com/api/?name=Sports+United&background=84CC16&color=fff'
  }
];

export const topOrganizers = [
  { name: 'Melody Makers', value: 144000, color: '#8b5cf6' },
  { name: 'Sports United', value: 117000, color: '#84cc16' },
  { name: 'Business Summits', value: 75000, color: '#0891b2' },
  { name: 'TechEvents Inc.', value: 67500, color: '#2563eb' },
  { name: 'Foodie Festivals', value: 52500, color: '#f97316' },
];

export const sampleUsers = Array.from({ length: 100 }, (_, i) => ({
  id: `user-${i + 1}`,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  eventsAttended: Math.floor(Math.random() * 10),
  totalSpent: Math.floor(Math.random() * 1000) + 50,
  registeredDate: new Date(2022, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1).toISOString()
}));
