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
                                     openshift.selector("bc", "s-b-af").startBuild("--from-file=target/app.jar", "--wait")
             
         
             }
                }
                }
                }
        }
    }
}
           
