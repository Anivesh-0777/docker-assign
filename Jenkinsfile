pipeline {
    agent any
    tools{
        nodejs "node"
    }

    stages {
        stage('test') {
            steps {
                echo "ran test stage"
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

        stage('deploy') {
            steps {
                script {
                    dockerImage = docker.image("dockerid0777/dockerassign")
                    dockerImage.run("-p 3000:3000 --rm --name botsapp")
                }
            }
        }
    }
}

// pipeline {
//     agent {
//         docker {
//             image 'node:6-alpine'
//             args '-p 3000:3000'
//         }
//     }
     
//     stages {
//         stage('Build') {
//             steps {
//                 sh 'npm install'
//             }
//         }
//     }
// }
