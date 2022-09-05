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
                                  
                                  openshift.selector("bc", "s-b-af-9").startBuild("--from-dir=./ocp","--follow", "--wait=true")
                                   
                            }
              
                                
                            }
                        }
                  }
        }
         
}
 }
