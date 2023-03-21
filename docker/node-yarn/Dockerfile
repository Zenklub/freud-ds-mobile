FROM node:16.10.0-slim

USER root

ARG SSH_DEPLOY_PRIVATE_KEY

RUN which ssh-agent || ( apt-get update -qy && apt-get install openssh-client -qqy ) && \
    eval `ssh-agent -s` && \
    echo "${SSH_DEPLOY_PRIVATE_KEY}" | tr -d '\r' | ssh-add - > /dev/null && \
    mkdir -p ~/.ssh && \
    chmod 700 ~/.ssh && \
    echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config && \
    apt-get install curl -y && \
    apt-get install git -y