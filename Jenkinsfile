pipeline {
    agent any
    tools {
         jdk 'jdk'
         maven '3.5.0'
    }  
  
    stages{ 
    
        stage("build project") {
                steps {
                script {
                openshift.withCluster('cluster') {
                                openshift.withProject('aminafarah') {
               def deployment = openshift.selector("dc", "mysql") 
    
                 if(!deployment.exists()){ 
                     sh 'java -version'
                echo "Maven VERSION"
                sh 'mvn -version'
                echo 'building project...'
                sh "mvn compile"
                //sh "mvn package"
                //sh "mvn test"
                sh "mvn clean install" 
                 } 
            
            else echo "EEEEEEEEEEEEEErrorrrr"
             }
                }
                }
                }
        }
    }
}
           
