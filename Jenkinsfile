pipeline {
    agent any
    stages {
        stage ("install") {
            step {
                echo "installing..."
                sh 'npm install'
            }
        }
        stage ("build") {
            step {
                echo "building..."
                sh 'npm run build'
            }
        }
    }
}
