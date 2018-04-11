pipeline {
    environment {
     SERVICE = "emilfrontend"
     REPO = "emil-frontend"
    }

    agent any
    stages {
        stage('Build') {
            steps {
                slackSend (color: 'good', channel:'#build', message: "STARTED: Job ${BUILD_TAG}")
                sh 'cp ~/.npmrc .'
                sh 'docker build -t $SERVICE .'
                sh 'docker run -d --name $SERVICE --env-file .env $SERVICE'
                sh 'sleep 5'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "no tests setup"'
            }
        }
        stage('Staging Release') {
            environment {
                STAGE = "staging-frontend"
                REMOTE_IMAGE = "441212097967.dkr.ecr.eu-central-1.amazonaws.com/" +
                        "${REPO}:staging"
                SERV = "frontend"
            }
            when {
                expression {
                    CHANGE_TARGET && CHANGE_TARGET == /staging/
                }
            }
            steps {
                sh 'eval "$(aws ecr get-login --no-include-email --region eu-central-1)"'
                sh "docker tag $SERVICE:latest $REMOTE_IMAGE"
                sh "docker push $REMOTE_IMAGE"
                sh 'aws ecs update-service --cluster $STAGE --service $SERV --region eu-central-1 --desired-count 0'
                sh 'sleep 300'
                sh 'aws ecs update-service --cluster $STAGE --service $SERV --region eu-central-1 --desired-count 1'
                slackSend channel:'#build', color: 'good',
                                message: "*_${SERVICE}_* *_${BRANCH_NAME}_* deployed to staging."
            }
        }
        stage('Production Release') {
            environment {
                REMOTE_IMAGE = "441212097967.dkr.ecr.eu-central-1.amazonaws.com/" +
                        "${REPO}:latest"
            }
            when {
                expression {
                    CHANGE_TARGET && CHANGE_TARGET == /production/
                }
            }
            steps {
                sh 'eval "$(aws ecr get-login --no-include-email --region eu-central-1)"'
                sh "docker tag $SERVICE:latest $REMOTE_IMAGE"
                sh "docker push $REMOTE_IMAGE"
                slackSend channel:'#build', color: 'good',
                                  message: "*_${SERVICE}_* *_${BRANCH_NAME}_* ready for production deploy."
            }
        }
    }
    post {
        always {
            sh 'docker stop $SERVICE || true; docker rm $SERVICE || true'
            sh 'docker rmi -f $SERVICE || true; docker system prune -f'
            sh 'docker volume ls -qf dangling=true | xargs -r docker volume rm'
        }
        success {
            slackSend channel:'#build', color: 'good',
                message: "SUCCESS: ${BUILD_TAG} _${SERVICE}_ *_${BRANCH_NAME}_*" + " build successful."
        }
        failure {
            slackSend channel:'#build', color: 'danger',
                message: "FAILURE: ${BUILD_TAG} _${SERVICE}_ *_${BRANCH_NAME}_*" + " build failed."
        }
        changed {
            slackSend channel:'#build', color: 'warning',
               message: "CHANGE: @here *_${JOB_NAME}_* build state changed."
        }
    }
}