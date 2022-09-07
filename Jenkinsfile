pipeline {
    agent any
    tools {
         jdk 'jdk'
         maven '3.5.0'
    }  
  
    stages{ 
    
     
        stage("build project") {
                      when {
                   expression {
                   openshift.withCluster('cluster') {
                                openshift.withProject('aminafarah') {
                                return  !openshift.selector("bc", "mysql").exists();
                                }
                   }
                                }
                      }
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
           
