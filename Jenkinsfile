pipeline{
    agent any
    stages {
        stage("install"){
            step{
                echo "installing dependencies..."
                sh 'npm install --omit=dev'        
            }
        }
        stage("build"){
            step{
                echo "building project..."
                sh "npm run build"
            }
        }
        stage("run prod"){
            step{
                echo "running production..."
                sh "npm run start"
            }
        }
    }
}
