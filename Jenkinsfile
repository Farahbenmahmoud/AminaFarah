pipeline {
    agent any
    tools {
         jdk 'jdk'
         maven '3.5.0'
       
    }
    stages{
        
            
 stage('Deploy') {
     steps{
        sh "oc project aminafarah"
          container('mysql') {
              sh 'scripts/test.sh' // run SQL query against mysql-server container over TCP
          }
       // sh "oc start-build hello-world --from-file=app.jar -n aminafarah --follow --wait"
       // sh "oc new-app hello-world || true"
       // sh "oc expose svc/hello-world || true"
    }
 }
    
      /*  stage("build project") {
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
        */
}
 }
