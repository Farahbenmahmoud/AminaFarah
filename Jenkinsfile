pipeline {
    agent any
    tools {
         jdk 'jdk'
         maven '3.5.0'
       
    }
    stages{

        stage('working stage') {
               steps {
                       timeout(time: 10, unit: 'MINUTES') {
                        sh 'ls -la /run/secrets/kubernetes.io/serviceaccount/ca.crt'
                        sh 'ls -la /run/secrets/kubernetes.io/serviceaccount/namespace'
                        sh 'ls -la /run/secrets/kubernetes.io/serviceaccount/token'
                        sh 'env | grep KUBERNETES_SERVICE_HOST'
                        println "env.VAR version set - ${env.KUBERNETES_SERVICE_HOST} as well as VAR ${KUBERNETES_SERVICE_HOST}" // These exists
                        openshift.withCluster("https://${env.KUBERNETES_SERVICE_HOST}:${env.KUBERNETES_SERVICE_PORT_HTTPS}") {
                        echo "Hello from ${openshift.cluster()}'s default project: ${openshift.project()}"  // This works
                }
             }
           }
        } 
    
        stage("build project") {
               when {
                   expression {
                        openshift.withCluster() {
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
