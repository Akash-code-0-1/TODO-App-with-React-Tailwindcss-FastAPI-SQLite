# backend/app/dependencies.py
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from . import auth, database, models

# ✅ FIX: use correct route
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="api/login")

def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(database.get_db)
):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    token_data = auth.decode_access_token(token)
    if not token_data:
        raise credentials_exception
    user = db.query(models.User).filter(models.User.id == token_data.id).first()
    if not user:
        raise credentials_exception
    return user
