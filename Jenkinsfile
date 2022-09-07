pipeline {
    agent any
    tools {
         jdk 'jdk'
         maven '3.5.0'
    }  
  
    stages{ 
    
        stage("mysql") { 
        steps {
                script {
                        openshift.withCluster('cluster') {
                                openshift.withProject('aminafarah') {
       sh 'oc new-app docker-registry.default.svc:5000/openshift/mysql --name mysqlS -p MYSQL_USER=root -p MYSQL_ALLOW_EMPTY_PASSWORD=true -p MYSQL_DATABASE=kidzone'
       sh 'oc expose svc/mysqlS'
        }}}
        }}
        stage("build project") {
               
          
            steps {
                script {
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
                
                
        }
    }
}
           
