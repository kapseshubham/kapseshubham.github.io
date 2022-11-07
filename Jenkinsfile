pipeline{
    agent any
    tools {nodejs "node"}
    stages {
        stage("install"){
            steps {
                echo "installing dependencies..."
                sh 'npm install --omit=dev'        
            }
        }
        stage("build"){
            steps {
                echo "building project..."
                sh "npm run build"
            }
        }
        stage("run prod"){
            steps {
                echo "running production..."
                sh "npm run start"
            }
        }
    }
}
