from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime
import uuid

# Portfolio Models
class PersonalInfo(BaseModel):
    name: str
    title: str
    location: str
    nationality: str
    languages: List[str]
    family: str
    email: EmailStr
    phone: str
    instagram: str
    googleScholar: str

class AboutInfo(BaseModel):
    summary: str
    highlight: str

class ProfileResponse(BaseModel):
    personal: PersonalInfo
    about: AboutInfo

class Experience(BaseModel):
    id: int
    company: str
    position: str
    period: str
    location: str
    responsibilities: List[str]

class Education(BaseModel):
    id: int
    degree: str
    institution: str
    period: str
    location: str
    grade: str
    specialization: str

class Skills(BaseModel):
    technical: List[str]
    tools: List[str]
    competencies: List[str]

class Project(BaseModel):
    id: int
    name: str
    description: str
    technologies: List[str]
    videoUrl: Optional[str] = None
    type: str

class Certification(BaseModel):
    id: int
    name: str
    status: str
    year: str

class Photography(BaseModel):
    description: str
    instagramUrl: str
    featured: List[str]

# Contact Models
class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str

class ContactMessageCreate(ContactMessage):
    pass

class ContactMessageResponse(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    subject: str
    message: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    status: str = "new"

class ContactSubmissionResponse(BaseModel):
    success: bool
    message: str
    id: str