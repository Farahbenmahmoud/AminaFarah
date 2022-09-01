pipeline {
    agent any
    tools {
         jdk 'jdk'
         maven '3.5.0'
         
    }
      parameters {

    credentials credentialType: 'com.openshift.jenkins.plugins.OpenShiftTokenCredentials', name: 'openshift-login-api-token', defaultValue: '', description: '', required: true

  }
    stages{ 
    
        stage("build project") {
                       
                  steps{
                      script {
                      
                            openshift.withCluster() {
                                openshift.withProject() {
                                    openshift.withCredentials('${openshift-login-api-token}') {
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
