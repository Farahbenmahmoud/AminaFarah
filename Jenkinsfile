pipeline {
    agent any
    tools {
         jdk 'jdk'
         maven '3.5.0'
       
    }
    stages{
    
        stage("build project") {
            steps {
               // git 'https://github.com/denizturkmen/SpringBootMysqlCrud.git'
                echo "Java VERSION"
                sh 'java -version'
                echo "Maven VERSION"
                sh 'mvn -version'
                echo 'building project...'
                sh "mvn compile"
                //sh "mvn package"
                //sh "mvn test"
                sh "mvn clean install"
            }
        }
    
 stage('Deploy') {
     steps{
        sh "oc new-build --name hello-world --binary -n aminafarah --image-stream=aminafarah/redhat-openjdk-18/openjdk18-openshift  || true"
        sh "oc start-build hello-world --from-file=app.jar -n aminafarah --follow --wait"
        sh "oc new-app hello-world || true"
        sh "oc expose svc/hello-world || true"
    }
 }
      

}
    }
    
