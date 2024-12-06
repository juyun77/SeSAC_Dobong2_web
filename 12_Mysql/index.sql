-- Active: 1732688668625@@127.0.0.1@3306@sesac
show databases; 



show databases;
CREATE DATABASE mydatabase DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

CREATE DATABASE sesac CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
/* 
utf8 : 한글 및 영어..
utf8mb4 : utf8 보다 더 많은 문자열 저장 가능
- 이모지, 특수문자, 다국어...
 */

-- 데이터 베이스 사용 선언
USE sesac;

-- 테이블 목록 확인
SHOW TABLES;

-- 데이터 베이스 삭제
DROP DATABASE mydatabase;

###################[테이블 관련 명령어]#####################
/* 
CREATE TABLE 테이블이름(
    속성이름1 데이터타입 제약조건,
    속성이름2 데이터타입 제약조건
);
 */
--  제약조건
-- NOT NULL : null 허용 x
-- AUTO_INCREMENT: 자동 숫자 증가
-- PRIMARY KEY: 기본키 설정(중복 허용x, null 허용x)
-- DEFAULT: 기본 값 설정
-- UNIQUE: 중복 허용x, null 허용x, 한 테이블에 여러 개 설정 가능

CREATE TABLE products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- 테이블 목록 확인
SHOW TABLES;

-- 테이블 구조 확인
DESC products;

DROP TABLE products;

-- 테이블 속성 수정
ALTER TABLE products ADD new_column VARCHAR(20);

ALTER TABLE products MODIFY new_column INT;

ALTER TABLE products DROP new_column;

############ [여기부터 DML] #############
-- 데이터 조작어
-- 데이터 CRUD 를 위해 사용하는 SQL 문

CREATE TABLE user(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    age INT NOT NULL,
    address VARCHAR(100)
);

-- Create >> INSERT INTO
INSERT INTO user (name, age, address) VALUES ('김민정', 20, '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES ('이지수', 30, '서울특별시 강남구');
INSERT INTO user (name, age, address) VALUES ('최솔이', 22, '대구광역시 동구');
INSERT INTO user (name, age, address) VALUES ('한소희', 25, '부산광역시 관악구');
INSERT INTO user (name, age, address) VALUES ('정세희', 19, '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUES ('이형석', 23, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES ('김성민', 32, '부산광역시 동구');
INSERT INTO user (name, age, address) VALUES ('박수진', 37, '강원도 강릉시');
INSERT INTO user (name, age, address) VALUES ('권순모', 26, '충청남도 공주시');
INSERT INTO user (name, age, address) VALUES ('진현정', 40, '강원도 속초시');
INSERT INTO user (name, age, address) VALUES ('권희수', 36, '서울특별시 영등포구');

-- Read >> SELECT [컬럼이름] FROM [테이블 이름] (WHERE 조건)
SELECT * FROM user; -- 전체 컬럼 전체 조회
SELECT name FROM user; -- 특정 컬럼 전체 조회
SELECT age, name FROM user; -- 특정 컬럼 2개 전체 조회

-- where 절을 이용해서 조건 걸기
SELECT * FROM user WHERE age >=25; -- 이상 비교
SELECT * FROM user WHERE id=3; -- 일치 비교
SELECT id, age FROM user WHERE name='권순모';

-- LIKE 패턴 조회
SELECT * FROM user WHERE address LIKE '서울%'; -- 서울로 시작하는 주소값
SELECT * FROM user WHERE name LIKE '__희'; -- 마지막 글자가 '희'인 사람
SELECT * FROM user WHERE name LIKE '%희%'; -- 이름에 '희'가 들어가는 사람
SELECT * FROM user WHERE address LIKE '%광역시%';-- 광역시 주소인 사람들


-- IN(list)
SELECT * FROM user WHERE age IN(20,21,22,23); -- 나이가 20,21,22,23살 중 하나

-- BETWEEN a AND b, a와 b는 포함
SELECT * FROM user WHERE age BETWEEN 25 AND 30; -- 25살 이상 30살 이하

-- IS NULL, IS NOT NULL
INSERT INTO user(name, age) VALUES('서현승', 28);
-- 주소가 null인 사람 조회
SELECT * FROM user WHERE address IS NULL;
-- 주소가 null이 아닌 사람 조회
SELECT * FROM user WHERE address IS NOT NULL;

-- 논리 연산자
-- 주소가 null이 아니면서, age가 25 초과인 전체 속성 (AND)
SELECT * FROM user WHERE address IS NOT NULL AND age > 25;

-- 최씨이고, 나이가 22인 사람 (AND)
SELECT * FROM user WHERE name LIKE '최%' AND age=22;

-- 서울에 살거나 김씨인 사람 (OR)
SELECT * FROM user WHERE address LIKE '서울%' OR name LIKE '김%';

-- order by, distinct, limit
SELECT * FROM user ORDER BY age DESC; -- age 기준으로 내림차순 정렬
-- id가 6보다 큰 것을 조회하고 난 후, age 기준으로 오름차순 정렬
SELECT * FROM user WHERE id > 6 ORDER BY age ASC; 

-- distinct
select age from user ORDER BY age ASC;
SELECT DISTINCT age FROM user ORDER BY age ASC;

-- 서울시에 사는 사람의 이름, 주소 조회/ 2개만..
SELECT name, address 
FROM user 
WHERE address LIKE '서울%'
ORDER BY name ASC
LIMIT 3;



------------------실습문제---------------------------

CREATE DATABASE dobong CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE dobong;

--- 실습 1번
CREATE TABLE member (
    id VARCHAR(20) NOT NULL PRIMARY KEY,
    name VARCHAR(5) NOT NULL,
    age INT,
    gender VARCHAR(2) NOT NULL,
    email VARCHAR(50),
    promotion VARCHAR(2) DEFAULT 'x'
);

DESC member;

--- 실습 2번

ALTER table member MODIFY id VARCHAR(10);
ALTER table member DROP age;
ALTER table member ADD interest VARCHAR(100);


DROP table MEMBER;


-----실습3
CREATE TABLE user (
    id VARCHAR(10) NOT NULL PRIMARY KEY,
    pw VARCHAR(20) NOT NULL,
    name VARCHAR(5) NOT NULL,
    gender ENUM('F', 'M', '') DEFAULT '',
    birthday DATE NOT NULL,
    age INT(3) NOT NULL DEFAULT 0
);


DESC user;

---값 넣기
insert INTO user VALUES('aa','aa','jy','F','2024-11-28',7);


DROP Table USER;


SELECT * from user;

------실습 4 INSERT

INSERT INTO user (id, pw, name, gender, birthday, age) 
VALUES ('hong1234', '804bkg', '홍길동', 'M', '1990-01-31', 33);
INSERT INTO user (id, pw, name, gender, birthday, age) 
VALUES ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
INSERT INTO user (id, pw, name, gender, birthday, age) 
VALUES ('power70', 'qxur8sda', '남사또', 'M', '1970-05-02', 53);
VALUES ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
INSERT INTO user (id, pw, name, gender, birthday, age) 
VALUES ('widowmaker', '38eiwhfs', '위도우', 'F', '1976-06-27', 47);
INSERT INTO user (id, pw, name, gender, birthday, age) 
VALUES ('dvahva', 'k3f3ah', '송하나', 'F', '2001-06-23', 22);
INSERT INTO user (id, pw, name, gender, birthday, age) 
VALUES ('jungkrat', '4ifah7z', '정크랫', 'M', '1999-11-11', 24);


---실습4 모든 회원 목록 출력
SELECT * FROM user;


---실습5
---1
SELECT * from user ORDER BY birthdat ASC;
---2
SELECT * from user WHERE gender='M' ORDER BY name DESC;
---3
SELECT id,name FROM user WHERE birthday LIKE '199%';
---4 
SELECT birthday FROM user WHERE MONTH(birthday)=6 ORDER BY birthday ASC;
---5
SELECT * FROM user WHERE gender='F' AND birthday LIKE '197%';
---6
SELECT * FROM user ORDER BY age DESC LIMIT 3;
---7
SELECT * FROM user WHERE LENGTH(pw) BETWEEN 5 AND 8;
---8
UPDATE user SET pw='12345678' WHERE id='hong1234';
---9
DELETE FROM user WHERE id='jungkrat';


------------2024-11-29----------------
use sesac;

select * from user;

---update 문
---UPDATE 테이블 이름
---SET 컬럼명 ="바꿀 데이터"
---WHERE ID=1

UPDATE user 
SET address="서울특별시 도봉구" 
where id=1;

UPDATE user SET address="제주특별자치도 제주시", name="이지현"
WHERE id=2;


--delete 문
/*
DELETE FROM 테이블 이름
WHERE 조건

*/

DELETE FROM user WHERE id=11;
DELETE FROM user WHERE id>8;

SELECT * from user;

CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL DEFAULT '홍길동',
    hobby VARCHAR(20)
);


DESC student;

INSERT INTO student(hobby) VALUES('등산');
INSERT INTO student(hobby,name) VALUES('등산','박상우');

---having 과 GROUP BY

DROP table IF EXISTS user;  ---user테이블이 존재할 경우 삭제
SHOW TABLEs;

CREATE TABLE user(
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    specialize ENUM('축구','야구','클라이밍','배드민턴') NOT NULL,
    gender ENUM('남','여') NOT NULL,
    career_year INT NOT NULL
);

DESC user;

INSERT INTO user VALUES(NULL, '김판곤', '축구', '남', 40);
INSERT INTO user VALUES(NULL, '손흥민', '축구', '남',15);
INSERT INTO user VALUES(NULL, '김자인', '클라이밍', '여',10);
INSERT INTO user VALUES(NULL, '김동우', '축구', '남',1);
INSERT INTO user VALUES(NULL, '전유진', '배드민턴', '여',2);
INSERT INTO user VALUES(NULL, '이대호', '야구', '남',24);
INSERT INTO user VALUES(NULL, '안세영', '배드민턴', '여',11);
INSERT INTO user VALUES(NULL, '배서연', '클라이밍', '여',3);
INSERT INTO user VALUES(NULL, '황희찬', '축구', '남',9);
INSERT INTO user VALUES(NULL, '지소연', '축구', '여',17);
INSERT INTO user VALUES(NULL, '이정후', '야구', '남',11);
INSERT INTO user VALUES(NULL, '김광현', '야구', '남',21);

select * from user;

-- 집계함수 사용해보기
-- count, sum, avg, min, max
SELECT COUNT(specialize) FROM user WHERE specialize="축구";
-- specialize 가 축구인 튜플의 개수
SELECT SUM(career_year) from user; -- 전체 선수의 경력 합
SELECT SUM(career_year) 
from user 
WHERE specialize="축구"; -- 축구 선수의 경력 합
SELECT AVG(career_year) 
from user 
WHERE specialize="축구"; -- 축구 선수의 경력 평균
SELECT MIN(career_year) 
from user 
WHERE specialize="축구"; -- 축구 선수 중 경력이 가장 작은 사람
SELECT MAX(career_year) 
from user 
WHERE specialize="축구"; -- 축구 선수 중 경력이 가장 많은 사람

-- group by (같은 그룹끼리 묶어서 조회)
SELECT specialize from user GROUP BY specialize;
SELECT specialize, COUNT(specialize)
from user 
GROUP BY specialize;

-- having
SELECT specialize, COUNT(specialize)
FROM user
WHERE gender='여'
GROUP BY specialize 
-- group화 된 테이블에 조건을 다는 것
HAVING COUNT(specialize) >=2; 

use sesac;

CREATE TABLE visitor(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(10) NOT NULL,
    comment MEDIUMTEXT
);

create table user(
    id int AUTO_INCREMENT PRIMARY KEY,
    userid VARCHAR(20) NOT NULL,
    name VARCHAR(10) NOT NULL,
    pw VARCHAR(20) NOT NULL
);

desc user;

desc visitor;

INSERT into visitor(name,comment) VALUES("홍길동","내가 왔다");
INSERT into visitor(name,comment) VALUES("이찬혁","으라차차");

select * from visitor;

update visitor set comment="야호~~!!" where id=2;
delete from visitor where id=3

#############DCL
---mysql 사용자 생성 
CREATE USER 'sesac'@'%' IDENTIFIED BY '1111';
--- 권한 부여
GRANT ALL PRIVILEGES on *.* TO 'sesac'@'%' WITH GRANT OPTION;

ALTER USER 'sesac'@'%' IDENTIFIED WITH mysql_native_password BY '1111';
FLUSH PRIVILEGES;

SELECT * from mysql.user;

show GRANTS for 'sesac'@'%';
