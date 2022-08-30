def ocDir = tool "oc3.11.0"
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
                        withEnv(["PATH=${ocDir}:$PATH"]) {
                            openshift.withCluster("https://okd.cloud.3s.local:8443",'${openshift-login-api-token}') {
                                openshift.withProject("aminafarah") {
                                    sh "echo $PATH"
                                    sh "ls -l ${ocDir}"
                                    sh "oc version"
//                                    echo "Hello from project ${openshift.project()} in cluster ${openshift.cluster()}"

                                    echo "${openshift.raw("version").out}"
                                    echo "In project: ${openshift.project()}"
                                    
                                    
                                }
                            }
                            }
                        }
                  }
        }
         
}
 }
