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
                      
                            openshift.withCluster("https://okd.cloud.3s.local:8443",'${openshift-login-api-token}') {
                                openshift.withProject("aminafarah") {
                                    openshift.selector("bc", "mysql").startBuild("--from-dir=./ocp","--follow", "--wait=true")
                            }
                            }
                        }
                  }
        }
         
}
 }
