pipeline {
    agent any
    tools {
         jdk 'jdk'
         maven '3.5.0'
       
    }
    stages {
        stage("build project") {
            steps {
               // git 'https://github.com/denizturkmen/SpringBootMysqlCrud.git'
                echo "Java VERSION"
                sh 'java -version'
                echo "Maven VERSION"
                sh 'mvn -version'
                echo 'building project...'
                sh "mvn compile"
                sh "mvn package"
                //sh "mvn test"
                sh "mvn clean install"
            }
        }
          stage("***********hello openshifttt********") {
            steps {
                // This uploads your application's source code and performs a binary build in OpenShift
                // This is a step defined in the shared library (see the top for the URL)
                // (Or you could invoke this step using 'oc' commands!)
                openshiftbuild(buildConfigName: s-b-af, buildFromPath: ".")
            }
        }
    }
}
