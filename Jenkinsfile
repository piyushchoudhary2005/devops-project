pipeline {
    agent any

    stages {

        stage('Clone Repo') {
            steps {
                git branch: 'master', url: 'https://github.com/piyushchoudhary2005/devops-project.git'
            }
        }

        stage('Build Backend Image') {
            steps {
                bat 'docker build -t devops-backend ./backend'
            }
        }

        stage('Build Frontend Image') {
            steps {
                bat 'docker build -t devops-frontend ./frontend'
            }
        }

        stage('Run Containers') {
            steps {
                bat 'docker-compose down'
                bat 'docker-compose up -d --build'
            }
        }
    }
}