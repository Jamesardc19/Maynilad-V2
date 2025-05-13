// API service for fetching data from the backend

const API_URL = 'http://localhost:3001';

// Types for our data
export interface NewsItem {
  id: number;
  title: string;
  content: string;
  date: string;
  image: string;
  slug: string;
}

export interface EventItem {
  id: number;
  title: string;
  location: string;
  date: string;
  image: string;
}

export interface Program {
  id: number;
  name: string;
  description: string;
  duration: string;
  department: string;
}

export interface FacultyMember {
  id: number;
  name: string;
  position: string;
  education: string;
  image: string;
}

// Fetch all news items
export async function getNews(): Promise<NewsItem[]> {
  try {
    const response = await fetch(`${API_URL}/news`);
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
}

// Fetch a single news item by slug
export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  try {
    const response = await fetch(`${API_URL}/news?slug=${slug}`);
    if (!response.ok) {
      throw new Error('Failed to fetch news item');
    }
    const news = await response.json();
    return news[0] || null;
  } catch (error) {
    console.error('Error fetching news item:', error);
    return null;
  }
}

// Fetch all events
export async function getEvents(): Promise<EventItem[]> {
  try {
    const response = await fetch(`${API_URL}/events`);
    if (!response.ok) {
      throw new Error('Failed to fetch events');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching events:', error);
    return [];
  }
}

// Fetch all programs
export async function getPrograms(): Promise<Program[]> {
  try {
    const response = await fetch(`${API_URL}/programs`);
    if (!response.ok) {
      throw new Error('Failed to fetch programs');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching programs:', error);
    return [];
  }
}

// Fetch all faculty members
export async function getFaculty(): Promise<FacultyMember[]> {
  try {
    const response = await fetch(`${API_URL}/faculty`);
    if (!response.ok) {
      throw new Error('Failed to fetch faculty');
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching faculty:', error);
    return [];
  }
}
