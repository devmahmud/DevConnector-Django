# base image

FROM python:3.9.4

RUN pip install django

# set working directory
WORKDIR /app

# copy and install requirements
COPY requirements.txt .
#RUN pip install -r requirements.txt

# copy the rest of the application code
COPY . .
EXPOSE 8000
# start the application
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]