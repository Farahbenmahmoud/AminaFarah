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
                      
                            openshift.withCluster('https://okd.cloud.3s.local:8443','BooACIoy6gnv6Ig1esWqIwIWdAyYMOE91WNCwkuHbA4') {
                                openshift.withProject('Aminafarah') {
                                    //openshift.withCredentials() {
                                    //openshift.selector("bc", "mysql").startBuild("--from-dir=./ocp","--follow", "--wait=true")
                                        echo "${openshift.raw("whoami")}"
                            }
                                
                            }
                        }
                  }
        }
         
}
 }
