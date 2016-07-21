# Nanum-fronted

#Redux 구현하면 안쓰는 파일들 지울 예정

## 프로젝트 복사

#### Repository 복사
```
$ git clone https://github.com/LandvibeDev/Nanum-fronted.git
```
#### dev branch 변경
```
$ cd Nanum-backend
$ git branch
*master
$ git checkout dev
```
#### 변경된 branch 확인
```
$ git branch
* dev
master
```

#### 의존성 관리
```
$ npm install

```

## 배포 (Deployment)

#### dev 배포 (개발시 사용)
```
npm run build && npm run development
```
localhost:3000 ; deploy시에 설정 그대로 동작

localhost:3001 ; 핫 모듈로 변경 사항이 있을 때 마다 계속 빌드함

#### production 배포
```
npm run build && npm run start
```

## 변경사항 커밋
```
$ git add [파일] // 새로 생성되는 파일이 생겼을 때만 추가
$ git commit -a -m 'message'
$ git push origin dev
```


markdown 문법
https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet