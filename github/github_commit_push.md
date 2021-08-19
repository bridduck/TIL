# github commit

## github start
1. 명령 프롬프트
2. 환경 설정 

- --global : 컴퓨터 전체에서 동일한 옵셩을 사용하게 함

```git
git config --global user.name 유저네임
git config --global user.email 깃허브 계정 이메일
```
3. 로컬디스크 안에 폴더 만들기 ex. Education
```
cd C:\Education
```
- C:\Education로 이동

4. 깃허브 clone를 받기
```
git clone 내 깃허브 HTTPS 복붙 
```
- clone = 다운로드 
- clone을 받으면 우리 컴퓨터도 하나의 저장소

|우리 컴퓨터|깃 허브 주소|
|--|--|
|local repository|remote repository|

5. 깃 허브의 repository name 폴더 생성 확인 ex. TIL


## github commit

1. TIL폴더 안 commit할 파일 만들기 ex. index.html
2. TIL로 이동 후 git에 add 파일 후 커밋
```
cd C:\Education\TIL
git add index.html
git commit -m "Add Text File [index.html]"
git push
```
- commit = 어떤 프로젝트가 문제생겼을때 복구를 위함
- 깃허브에 적용하기 위해 push 명령

## error

### commit error
---
- 파일 명에 '&'가 있었더니 error

>"fatal pathspec did not match any files"

### push error
---

>“Updates were rejected because the remote contains work that you do not have locally.”
- README및/또는 LICENSE파일을 사용하여 새 github 리포지토리를 초기화한 경우에 발생


```git
git remote add origin [//your github url]

//pull those changes

git pull origin master 

// or optionally, 'git pull origin master --allow-unrelated-histories' if you have initialized repo in github and also committed locally

//now, push your work to your new repo

git push origin master
```

- 저장소를 github에 푸시가능 
- 기본적으로 새로 초기화된 파일을 작업과 병합
- git pull가져오고 병합 

참고

https://stackoverflow.com/questions/18328800/github-updates-were-rejected-because-the-remote-contains-work-that-you-do-not-h/65249867#65249867
