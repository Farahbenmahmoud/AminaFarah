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
         stage('Deploy') {
    openshiftDeploy depCfg: 's-b-af'
    openshiftVerifyDeployment depCfg: 's-b-af', replicaCount: 1, verifyReplicaCount: true
  } 
    }
}
