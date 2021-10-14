pipeline {
    agent {
        label "master"
    }
    tools {
        maven "Maven"
    }
    environment {
        NEXUS_VERSION = "nexus3"
        NEXUS_PROTOCOL = "http"
        NEXUS_URL = "repo.blanc.tech"
        NEXUS_REPOSITORY = "MyInwi_Backend"
        NEXUS_CREDENTIAL_ID = "nexus-user-credentials"
        NEXUS_REGISTRY = "51.91.126.226:8082/"
        DOCKER_IMAGE = ""
        VERSION = "1.0.0"
        NAME = "backoffice-front"
    }
    stages {
        stage('Building docker image') {
            steps{
                script {
                    DOCKER_IMAGE = docker.build NEXUS_REGISTRY + "$NAME" + ":$VERSION"
                    }
                script {
                    docker.withRegistry( "http://51.91.126.226:8082", NEXUS_CREDENTIAL_ID ) {
                    DOCKER_IMAGE.push()
                    }
                }
                script {
                    sh "docker rmi -f $NEXUS_REGISTRY$NAME:$VERSION"
                }
            }
        }   
        stage('Deploy to Kubernates') {
            steps {
                script {
                    sh "docker build --no-cache . -t $NAME"
                    sh "docker rm -f $NAME"
                    sh "docker run -it -p $PortParam:5000 --name=$NAME -d $NAME"
                }
            }
        }
    }
}
