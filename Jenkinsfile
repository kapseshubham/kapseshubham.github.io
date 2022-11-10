pipeline {
    agent any 
    tools {nodejs "nodejs"}
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
         stage ("ssh") {
            steps {
                sshPublisher(publishers: [sshPublisherDesc(configName: 'ansible', transfers: [sshTransfer(cleanRemote: false, excludes: '', execCommand: '', execTimeout: 120000, flatten: false, makeEmptyDirs: false, noDefaultExcludes: false, patternSeparator: '[, ]+', remoteDirectory: 'project', remoteDirectorySDF: false, removePrefix: '', sourceFiles: '.next/, package.json, package-lock.json')], usePromotionTimestamp: false, useWorkspaceInPromotion: false, verbose: false)])
                echo "Tranfering artifacts..."
            }
        }
    }
}
