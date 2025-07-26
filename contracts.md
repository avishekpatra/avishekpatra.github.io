# Portfolio Website API Contracts & Integration Plan

## Overview
This document outlines the API contracts, database schema, and integration plan for Avishek Patra's portfolio website.

## Current Mock Data Structure (from /app/frontend/src/data/mock.js)

### 1. Personal Information
- Basic profile data (name, title, location, contact info)
- Social media links
- Languages and personal details

### 2. Professional Content
- About section with summary and highlights
- Experience timeline with 4 positions
- Education details (2 degrees)
- Skills categorized into: technical, tools, competencies
- Certifications and awards
- Projects with descriptions and technologies
- Photography portfolio data

## Backend API Endpoints to Implement

### Core Portfolio Endpoints

#### GET /api/portfolio/profile
```json
{
  "personal": {
    "name": "string",
    "title": "string", 
    "location": "string",
    "nationality": "string",
    "languages": ["string"],
    "family": "string",
    "email": "string",
    "phone": "string",
    "instagram": "string",
    "googleScholar": "string"
  },
  "about": {
    "summary": "string",
    "highlight": "string"
  }
}
```

#### GET /api/portfolio/experience
```json
[
  {
    "id": "number",
    "company": "string",
    "position": "string", 
    "period": "string",
    "location": "string",
    "responsibilities": ["string"]
  }
]
```

#### GET /api/portfolio/education
```json
[
  {
    "id": "number",
    "degree": "string",
    "institution": "string",
    "period": "string",
    "location": "string", 
    "grade": "string",
    "specialization": "string"
  }
]
```

#### GET /api/portfolio/skills
```json
{
  "technical": ["string"],
  "tools": ["string"], 
  "competencies": ["string"]
}
```

#### GET /api/portfolio/projects
```json
[
  {
    "id": "number",
    "name": "string",
    "description": "string",
    "technologies": ["string"],
    "videoUrl": "string",
    "type": "string"
  }
]
```

#### GET /api/portfolio/certifications
```json
[
  {
    "id": "number",
    "name": "string",
    "status": "string",
    "year": "string"
  }
]
```

#### GET /api/portfolio/photography
```json
{
  "description": "string",
  "instagramUrl": "string",
  "featured": ["string"]
}
```

### Contact Form Endpoint

#### POST /api/contact/message
```json
// Request
{
  "name": "string",
  "email": "string", 
  "subject": "string",
  "message": "string"
}

// Response
{
  "success": true,
  "message": "Message sent successfully",
  "id": "string"
}
```

#### GET /api/contact/messages (Admin only)
```json
[
  {
    "id": "string",
    "name": "string",
    "email": "string",
    "subject": "string", 
    "message": "string",
    "timestamp": "datetime",
    "status": "string"
  }
]
```

## Database Schema (MongoDB Collections)

### 1. portfolio_profile (Single Document)
```javascript
{
  _id: ObjectId,
  personal: {
    name: String,
    title: String,
    location: String,
    nationality: String,
    languages: [String],
    family: String,
    email: String,
    phone: String,
    instagram: String,
    googleScholar: String
  },
  about: {
    summary: String,
    highlight: String
  },
  updatedAt: Date,
  createdAt: Date
}
```

### 2. experiences
```javascript
{
  _id: ObjectId,
  company: String,
  position: String,
  period: String,
  location: String,
  responsibilities: [String],
  order: Number,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### 3. education
```javascript
{
  _id: ObjectId,
  degree: String,
  institution: String,
  period: String,
  location: String,
  grade: String,
  specialization: String,
  order: Number,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### 4. skills
```javascript
{
  _id: ObjectId,
  category: String, // 'technical', 'tools', 'competencies'
  items: [String],
  updatedAt: Date
}
```

### 5. projects
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  technologies: [String],
  videoUrl: String,
  type: String,
  order: Number,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### 6. certifications
```javascript
{
  _id: ObjectId,
  name: String,
  status: String, // 'Ongoing', 'Awarded', 'Completed'
  year: String,
  order: Number,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### 7. photography
```javascript
{
  _id: ObjectId,
  description: String,
  instagramUrl: String,
  featured: [String],
  updatedAt: Date
}
```

### 8. contact_messages
```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  subject: String,
  message: String,
  status: String, // 'new', 'read', 'replied'
  ipAddress: String,
  userAgent: String,
  createdAt: Date,
  updatedAt: Date
}
```

## Frontend Integration Points

### Current Mock Usage (to be replaced):
1. `mockData.personal` → API call to `/api/portfolio/profile`
2. `mockData.about` → Included in profile API
3. `mockData.experience` → API call to `/api/portfolio/experience`
4. `mockData.education` → API call to `/api/portfolio/education`
5. `mockData.skills` → API call to `/api/portfolio/skills`
6. `mockData.projects` → API call to `/api/portfolio/projects`
7. `mockData.certifications` → API call to `/api/portfolio/certifications`
8. `mockData.photography` → API call to `/api/portfolio/photography`

### Components to Update:
- `Hero.jsx` → Use profile API for personal data
- `About.jsx` → Use profile API for about and personal info
- `Experience.jsx` → Use experience API
- `Education.jsx` → Use education API
- `Skills.jsx` → Use skills API
- `Projects.jsx` → Use projects and certifications APIs
- `Photography.jsx` → Use photography API
- `Contact.jsx` → Add API call for form submission
- `Footer.jsx` → Use profile API for contact information

## Error Handling Strategy
- Frontend: Show loading states and graceful error messages
- Backend: Return consistent error responses with appropriate HTTP status codes
- Fallback: Use cached/default data if API calls fail

## Caching Strategy
- Frontend: Implement React state management for API responses
- Backend: Add appropriate cache headers for static content

## Implementation Priority
1. **Phase 1**: Core portfolio endpoints (profile, experience, education, skills)
2. **Phase 2**: Projects, certifications, photography endpoints
3. **Phase 3**: Contact form functionality with email notifications
4. **Phase 4**: Frontend integration and testing

## Security Considerations
- Validate all contact form inputs
- Rate limiting for contact form submissions
- CORS configuration
- Input sanitization for XSS prevention