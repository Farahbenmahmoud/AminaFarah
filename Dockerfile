
# Build the application first using Maven
FROM maven:3.8-openjdk-11 as build
WORKDIR /app
COPY . .
RUN mvn install

FROM openjdk:8
EXPOSE 8089
ADD app.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]

FROM tomcat:8.5-jdk11-openjdk-slim
ADD target/app.war /usr/local/tomcat/webapps/
EXPOSE 8089
CMD ["catalina.sh", "run"]