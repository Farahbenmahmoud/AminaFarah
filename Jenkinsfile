pipeline {
    agent any
    tools {
         jdk 'jdk'
         maven '3.5.0'
    }
 
    
  
    stages{ 
    
        stage("build project") {
         
               steps{
                   script {
                     // 'inescure://okd.cloud.3s.local:8443','urW27_H94ohmQvRbBAoXFt4qmupARMA7_7Uugfr0yyQ'
                            openshift.withCluster('aminafarah') {
                                openshift.withProject('aminafarah') {
                                  
                                  
                                       openshift.selector("dc", "mysql-3-92bn7").related('pods').untilEach(1) { 
                                      return (it.object().status.phase == "Running") 
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
        }
         
}
 }
