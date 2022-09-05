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
                                  
                                  def deployment = openshift.selector("dc", "s-b-af") 
                                       openshift.selector("dc", "s-b-af").related('pods').untilEach(1) { 
                                      return (it.object().status.phase == "Running") 
                                 } 
                                     openshift.selector("bc", "s-b-af").startBuild("--from-file=target/app.jar", "--follow") 
                            }
              
                                
                            }
                        }
                  }
        }
         
}
 }
