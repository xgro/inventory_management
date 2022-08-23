<!--
title: 'Serverless Framework Node Express API on AWS'
description: 'This template demonstrates how to develop and deploy a simple Node Express API running on AWS Lambda using the traditional Serverless Framework.'
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/serverless'
authorName: 'Serverless, inc.'
authorAvatar: 'https://avatars1.githubusercontent.com/u/13742415?s=200&v=4'
-->

# Integration

SQS를 통해 재고 부족 메시지가 전달 되었을때, 외부 API로 요청하는 Lambda 입니다.
## 외부 API 연결 (STEP 1)

- 로컬 테스트 환경
    - `.env` 파일을 이용해서 외부 API 연결을 설정합니다. 관련된 환경변수는 `.env.sample` 에서 찾을 수 있습니다.

- 배포 환경
    - AWS 람다 콘솔에서 환경 변수를 직접 입력합니다.

<br>

## 사용 가능한 명령

### 로컬 실행
```
npm start
```

### 배포
```
serverless deploy
```

