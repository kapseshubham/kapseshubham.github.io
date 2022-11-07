pipeline{
    agent any
    tools {nodejs "node"}
    stages {
        stage("install"){
            steps {
                echo "installing dependencies..."
                sh 'npm install'        
            }
        }
        stage("build"){
            steps {
                echo "building project..."
                sh "npm run build"
            }
        }
      
    }
}
