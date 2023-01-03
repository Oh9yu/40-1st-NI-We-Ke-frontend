![waving](https://capsule-render.vercel.app/api?type=waving&height=200&fontAlignY=40&text=NIWEKI&color=gradient)

- 신발을 판매하는 웹페이지 모델링

</br>

# 개발 기간

- 22.12.02~22.12.16
</br>

# 개발 인원 및 파트

| 권오규 | 네비게이션 , 검색 , 드롭다운 캐러셀 , 상세페이지, 모달 | F.E. |
| --- | --- | --- |
| 서혜선 | 로그인, 회원가입, 리스트페이지, Footer | P.M. |
| 김학진 | 리스트페이지 사이드바, 장바구니, 위시리스트 | F.E. |

</br>

| 박진주 | DB 설계, 장바구니 위시리스트 API | B.E. |
| --- | --- | --- |
| 원승현 | 로그인 회원가입, 상품조회 API, 필터링 API | P.M. |

</br>



# TOOLS

<div>
<img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=Git&logoColor=white"/>
<img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/>
<img src="https://img.shields.io/badge/Slack-4A154B?style=flat&logo=Slack&logoColor=white"/>
<img src="https://img.shields.io/badge/VSCode-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/>
</div>

</br>

# LINK TO 👉🏻

<div>
<a href='https://trello.com/b/k1QJ1bBl/40%EA%B8%B0-niweke-1st-project'><img src="https://img.shields.io/badge/Trello-0052CC?style=flat&logo=Trello&logoColor=white" /></a>
<a href='https://prairie-zipper-83c.notion.site/Team-Notion-b4495c87e78040c4958807d54115ee3f'><img src="https://img.shields.io/badge/Notion-000000?style=flat&logo=Notion&logoColor=white"/></a>
</div>

</br>

# STACK

### F.E.

|JavaScript|React|Sass|esLint|Prettier|
| :--: | :--: | :--: | :--: | :--: |
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/react-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/sass-icon.svg" alt="icon" width="65" height="65" /></div> | <img src="https://techstack-generator.vercel.app/eslint-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/prettier-icon.svg" alt="icon" width="65" height="65" /> |



### B.E.

|JavaScript|Nodejs|MySql|Rest|
| :--: | :--: | :--: | :--: |
| <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/restapi-icon.svg" alt="icon" width="65" height="65" /> |

</br>


</br>

## 네비게이션바 
- 로그인 아이콘 클릭으로 로그인 페이지 이동할 수 있도록 구현
- 각각 카테고리 클릭시, 메뉴에 따라 원하는 페이지로 이동
- 화면 너비에 따라 구조가 바뀌는 반응형 레이아웃 구현

## 상품 캐러셀
- 네비게이션 메뉴 hover시 navBottomSection 드롭다운
- 카테고리에 따른 대표 상품군 캐러셀
- 자세히 보기를 통해 메뉴 카테고리 제품군 페이지 

## 검색
- 검색 클릭시 우측에서 나타는 검색창 구현
- 검색창 input시 데이터 요청하여 검색명에 맞는 제품군 추출
- 검색어를 입력하지 않거나 검색어에 맞지 않는 제품 검색시 각각 검색어를 입력, 검색된 제품이 없다는 메세지 출력 

## 상세페이지 :
- sticky 사용하여 제품 이미지만 스크롤 , 우측 제품 정보 상단 고정
- 모달창 사용하여 제품 고지 설명
- 커스텀 훅 사용하여 모달 바깥 부분 클릭시 모달 닫히는 기능

## 메인페이지 :
- 전체 레이아웃 작업 진행
- 메인 페이지 내에서 버튼 클릭시 상품 리스트 페이지로 이동

## 로그인
- 로그인 시 이메일 및 비밀번호 조건을 통한 유효성 검사 구현
- 로그인 시 HTTP 응답으로 담겨오는 JWT를 LocalStorage 저장 로직 구현
- 로그인 성공 시 Main 페이지로 이동

## 회원가입
- 회원가입 시 인풋 데이터 입력 양식에 따라 오류 발생 시 알림 메세지 출력
- 회원가입 성공 시 Login 페이지로 이동
- 로그인과 동일한 레이아웃 구성으로 컴포넌트화 하여 페이지 내에서 재사용

## 장바구니 
- Local Storage에 저장된 JWT 확인 후, 장바구니에 담긴 상품 리스트 화면에 렌더링
- 장바구니 상품들의 총 금액 계산을 및 출력
- 장바구니 상품들 삭제 시 실시간으로 DB와 통신

## 위시리스트
- Local Storage에 저장된 JWT 확인 후, 위시리스트에 담긴 상품 리스트 화면에 렌더링
- 위시리스트 내 상품들의 사이즈 선택 및 장바구니에 추가 시 실시간으로 DB와 통신

## 리스트페이지 사이드바
- 카테고리 호버 시 색 변경 및 클릭 시 드롭다운으로 세부카테고리 출력
- 세부카테고리 클릭 시 쿼리스트링으로 해당 데이터 

</br>
</br>

