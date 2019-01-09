FROM python:3.7-alpine
WORKDIR /app
COPY requirements.txt /app
COPY productSchema.json /app
RUN pip3 install -r requirements.txt
COPY app.py /app
ENTRYPOINT ["python", "app.py"]
