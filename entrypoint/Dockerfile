FROM python:3.7-slim
WORKDIR /usr/src/app
COPY . ./
RUN pip install --trusted-host pypi.python.org -r requirements.txt
EXPOSE 80
CMD ["python", "endpoint.py"]