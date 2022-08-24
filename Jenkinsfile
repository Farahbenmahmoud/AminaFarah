pipeline {
    agent any
    tools {
         jdk 'jdk'
         maven '3.5.0'
       
    }
    stages{
        stage("deploy"){
            steps{
              script {
                openshift.withCluster() { 
                openshift.withProject("aminafarah") { 
                def deployment = openshift.selector("dc", "mysql") 
    
                 if(!deployment.exists()){ 
                 openshift.newApp('mysql', "--as-deployment-config").narrow('svc').expose() 
                 } 
    
                 timeout(5) { 
                  openshift.selector("dc", "mysql").related('pods').untilEach(1) { 
                  return (it.object().status.phase == "Running") 
                   } 
                   } 
                   } 
                   }
        }
        }
        }
      /*  stage("build project") {
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
        */
}
 }
