pipeline {
    agent any 
    tools {nodejs "node"}
    stages {
        stage ("install") {
            steps {
                echo "installing..."
                sh 'npm install'
            }
        }
        stage ("build") {
            steps {
                echo "building..."
                sh 'npm run build'
            }
        }
    }
}
