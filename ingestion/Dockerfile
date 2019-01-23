FROM bde2020/spark-submit:2.4.0-hadoop2.7
WORKDIR /usr/src/app
RUN wget -O - https://piccolo.link/sbt-1.2.8.tgz | gunzip | tar -x -C /usr/local
ENV PATH /usr/local/sbt/bin:${PATH}
COPY . ./
RUN sbt update clean assembly
CMD ["sh", "template.sh"]
