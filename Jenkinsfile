pipeline {
    agent any
    tools {
         jdk 'jdk'
         maven '3.5.0'
    }
      parameters {

    credentials  name: 'cred', defaultValue: '', description: '', required: true

  }
    
  
    stages{ 
    
        stage("build project") {
                when {
        expression {
            openshift.withCluster('aminafarah cred') {
                                openshift.withProject('aminafarah') {
                                openshift.withCredentials('${cred}'){
           return !openshift.selector('dc', 's-b-af').exists()
                                }
        }
      }
       }
                }
               steps{
                   script {
                       echo "thankkkkkkkkk godd hamdoulllllllahhhhhhhhhhhhhhh"
                /*     // 'inescure://okd.cloud.3s.local:8443','urW27_H94ohmQvRbBAoXFt4qmupARMA7_7Uugfr0yyQ'
                sh 'java -version'
                echo "Maven VERSION"
                sh 'mvn -version'
                echo 'building project...'
                sh "mvn compile"
                //sh "mvn package"
                //sh "mvn test"
                sh "mvn clean install"*/
                                           
                                 } 
                                   
                            }
              
                                
                            }
                        }
                  }
