FROM python:3.10

WORKDIR /app

RUN apt-get update && apt-get install -y \
    libgl1-mesa-glx \
    libglib2.0-0

COPY /backend .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 9000

CMD ["python3", "app.py"]
