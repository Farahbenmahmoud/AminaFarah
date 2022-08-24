final APP_VERSION_FILE = 'app/VERSION'
pipeline {
    agent any
    tools {
         jdk 'jdk'
         maven '3.5.0'
       
    }
    stages{

        stage("build project") {
               when {
                   echo 'open...'
              expression {
                  echo 'openshift project...'
                openshift.withCluster() {
                    echo 'openshift project Name...'
                  openshift.withProject("aminafarah") {
                    return !openshift.selector('dc', 'mysql').exists()
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
            }
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
