from fastapi import APIRouter, HTTPException, BackgroundTasks
from typing import List
import logging
from datetime import datetime
from models import (
    ProfileResponse, Experience, Education, Skills, Project, 
    Certification, Photography, ContactMessageCreate, 
    ContactMessageResponse, ContactSubmissionResponse
)
from portfolio_data import PORTFOLIO_DATA
from motor.motor_asyncio import AsyncIOMotorClient
import os

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

portfolio_router = APIRouter(prefix="/portfolio", tags=["portfolio"])
contact_router = APIRouter(prefix="/contact", tags=["contact"])

# Portfolio Endpoints
@portfolio_router.get("/profile", response_model=ProfileResponse)
async def get_profile():
    """Get personal profile information and about section"""
    try:
        return ProfileResponse(**PORTFOLIO_DATA["profile"])
    except Exception as e:
        logger.error(f"Error fetching profile: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@portfolio_router.get("/experience", response_model=List[Experience])
async def get_experience():
    """Get work experience timeline"""
    try:
        return [Experience(**exp) for exp in PORTFOLIO_DATA["experience"]]
    except Exception as e:
        logger.error(f"Error fetching experience: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@portfolio_router.get("/education", response_model=List[Education])
async def get_education():
    """Get education details"""
    try:
        return [Education(**edu) for edu in PORTFOLIO_DATA["education"]]
    except Exception as e:
        logger.error(f"Error fetching education: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@portfolio_router.get("/skills", response_model=Skills)
async def get_skills():
    """Get technical skills, tools, and competencies"""
    try:
        return Skills(**PORTFOLIO_DATA["skills"])
    except Exception as e:
        logger.error(f"Error fetching skills: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@portfolio_router.get("/projects", response_model=List[Project])
async def get_projects():
    """Get project portfolio"""
    try:
        return [Project(**proj) for proj in PORTFOLIO_DATA["projects"]]
    except Exception as e:
        logger.error(f"Error fetching projects: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@portfolio_router.get("/certifications", response_model=List[Certification])
async def get_certifications():
    """Get certifications and awards"""
    try:
        return [Certification(**cert) for cert in PORTFOLIO_DATA["certifications"]]
    except Exception as e:
        logger.error(f"Error fetching certifications: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

@portfolio_router.get("/photography", response_model=Photography)
async def get_photography():
    """Get photography portfolio information"""
    try:
        return Photography(**PORTFOLIO_DATA["photography"])
    except Exception as e:
        logger.error(f"Error fetching photography: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")

# Contact Endpoints
async def send_notification_email(message_data: dict):
    """Background task to send email notification (mock implementation)"""
    logger.info(f"Email notification sent for message: {message_data['subject']}")
    # In real implementation, integrate with email service (SendGrid, SES, etc.)

@contact_router.post("/message", response_model=ContactSubmissionResponse)
async def submit_contact_message(
    message: ContactMessageCreate, 
    background_tasks: BackgroundTasks
):
    """Submit a contact message"""
    try:
        # Create message document
        message_doc = ContactMessageResponse(
            name=message.name,
            email=message.email,
            subject=message.subject,
            message=message.message,
            timestamp=datetime.utcnow(),
            status="new"
        )
        
        # Save to database
        result = await db.contact_messages.insert_one(message_doc.dict())
        message_id = str(result.inserted_id)
        
        # Send notification email in background
        background_tasks.add_task(
            send_notification_email, 
            {
                "id": message_id,
                "name": message.name,
                "email": message.email,
                "subject": message.subject,
                "message": message.message
            }
        )
        
        logger.info(f"Contact message saved with ID: {message_id}")
        
        return ContactSubmissionResponse(
            success=True,
            message="Thank you for your message! I'll get back to you soon.",
            id=message_id
        )
        
    except Exception as e:
        logger.error(f"Error saving contact message: {str(e)}")
        raise HTTPException(status_code=500, detail="Failed to send message")

@contact_router.get("/messages", response_model=List[ContactMessageResponse])
async def get_contact_messages():
    """Get all contact messages (admin endpoint)"""
    try:
        messages = await db.contact_messages.find().sort("timestamp", -1).to_list(100)
        return [ContactMessageResponse(**msg) for msg in messages]
    except Exception as e:
        logger.error(f"Error fetching contact messages: {str(e)}")
        raise HTTPException(status_code=500, detail="Internal server error")