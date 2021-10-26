pipeline{
    agent any
    
    environment {
        dockerImage = ''
        registry = 'nishad8898/chatapp'
        registryCredential = "dockerhub"
    }
    
    stages{
    stage('Test and compose'){
        steps{
            checkout([$class: 'GitSCM', branches: [[name: '*/master']], extensions: [], userRemoteConfigs: [[url: 'https://github.com/nishad8898/valuebound-docker-demo']]])
        }
    }

    stage('Building and upload image') {
      steps{
        script {
          dockerImage = docker.build registry
           docker.withRegistry( '', registryCredential ) {
           dockerImage.push()
          }
        }
      }
    }

    stage('deploy') {
      steps {
        sh'docker ps -f name=chatapp'
        sh'docker container ls -a -fname=chatapp'
          script {
            dockerImage.run("-p 3000:3000 --rm --name chatapp")
          }
      }
    }
  }
}