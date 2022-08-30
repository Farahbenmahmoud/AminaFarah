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
                            openshift.withCluster("https://api.pro-eu-west-1.openshift.com:8443", credentials("1add31cc-ffb8-4a5e-a2c9-8b66d7a583ce")) {
                                openshift.withProject("foobar") {
                                    sh "echo $PATH"
                                    sh "ls -l ${ocDir}"
                                    sh "oc version"
//                                    echo "Hello from project ${openshift.project()} in cluster ${openshift.cluster()}"

                                    echo "${openshift.raw("version").out}"
                                    echo "In project: ${openshift.project()}"
            /*
              when {
                   expression {
                        openshift.withCluster("https://okd.cloud.3s.local:8443",'${openshift-login-api-token}') {
                       
                        openshift.withProject("aminafarah") {
                        //    openshift.withCredentials('${openshift-login-api-token}'){
                         return  !openshift.selector("bc", "mysql").exists();
               //   }
                  }
                }
              }
            }      
        
            steps {
               // git 'https://github.com/denizturkmen/SpringBootMysqlCrud.git'
                echo "Java VERSION"
                sh 'java -version'
                echo "Maven VERSION"
                sh 'mvn -version'
                echo 'building project...'
                sh "mvn compile"
                //sh "mvn package"
                //sh "mvn test"
                sh "mvn clean install"
            }*/
        }
        /* stage("deploy"){
            steps{
              script {
                openshift.withCluster() { 
                openshift.withProject("aminafarah") { 
                def deployment = openshift.selector("dc", "s-b-af") 
    
                 if(!deployment.exists()){ 
                 openshift.newApp('s-b-af', "--as-deployment-config").narrow('svc').expose() 
                 } 
    
                 timeout(5) { 
                  openshift.selector("dc", "s-b-af").related('pods').untilEach(1) { 
                  return (it.object().status.phase == "Running") 
                   } 
                   } 
                   } 
                   }
        }
        }
        }*/
}
 }
