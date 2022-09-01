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
                      
                            openshift.withCluster() {
                                openshift.withProject() {
                                    openshift.withCredentials('BooACIoy6gnv6Ig1esWqIwIWdAyYMOE91WNCwkuHbA4') {
                                    //openshift.selector("bc", "mysql").startBuild("--from-dir=./ocp","--follow", "--wait=true")
                                        echo "${openshift.raw("whoami")}"
                            }
                                }
                            }
                        }
                  }
        }
         
}
 }
