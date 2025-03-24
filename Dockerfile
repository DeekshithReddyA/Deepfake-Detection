# FROM python:3.10

# WORKDIR /app

# COPY /backend .

# RUN apt-get update && apt-get install -y \
#     libgl1-mesa-glx \
#     libglib2.0-0

# RUN pip install --no-cache-dir -r requirements.txt

# EXPOSE 5000

# CMD ["python", "app.py"]



FROM nvidia/cuda:12.1.1-devel-ubuntu22.04

RUN apt-get update && apt-get install -y python3.10 python3-pip

RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    libglib2.0-0

WORKDIR /app

COPY backend/ .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

CMD ["python3", "app.py"]
