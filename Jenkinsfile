pipeline{
    agent any
    environment{
        dockerImage=""
        registry="dockerid0777/dockerassign"
        // registryCredential = "docker"
    }
   
    stages{
        stage("Checkout"){
            steps{
                checkout([$class: 'GitSCM', branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: 'githubid', url: 'https://github.com/Anivesh-0777/docker-assign.git']]])
                }
            }
                stage('docker image build/push') { 
            steps {
                sh 'npm install'
                script {
                    
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerHub') {
                        def customImage = docker.build("dockerid0777/dockerassign")
                        customImage.push()
                    }
                }
            }
        }
            
//         stage('Build Docker image') {
//             steps{
//                 script {
//                     dockerImage = docker.build registry
//                 }
                
//             }
            
//         }
    }
}
