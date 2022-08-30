pipeline {
    agent any
    tools {
         jdk 'jdk'
         maven '3.5.0'
         
    }
  /*    parameters {

    credentials credentialType: 'com.openshift.jenkins.plugins.OpenShiftTokenCredentials', name: 'openshift-login-api-token', defaultValue: '', description: '', required: true

  }*/
    stages{ 
    
        stage("build project") {
                        def ocDir = tool "oc3.11.0"
                        echo "${ocDir}"

                        withEnv(["PATH=${ocDir}:$PATH"]) {
                            openshift.withCluster("https://okd.cloud.3s.local:8443", credentials("WI-8En0gJyNYfzy8cyyr0eXLg1RA3cbNpxzjD8Ct5Mg")) {
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
