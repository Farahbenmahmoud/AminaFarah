pipeline {
    agent any
    tools {
         jdk 'jdk'
         maven '3.5.0'
    }  
  
    stages{ 
    
        stage("build project") {
                steps {
                script {
                openshift.withCluster('cluster') {
                                openshift.withProject('aminafarah') {
                                   //  openshift.selector("bc", "s-b-af").startBuild("--from-file=target/app.jar", "--wait")
                                   openshiftBuild(buildConfig: 'mysql', showBuildLogs: 'true')
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
                }
                }
        }
    }
}
           
