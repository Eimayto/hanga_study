var answer = "";
function output(){
	var result = Math.floor(Math.random() * 13)+1;
	switch(result){
		case 1:
			document.getElementById('message').innerHTML = "佐平";
			answer = "도울 좌,평평할 평";
			break;
		case 2:
			document.getElementById('message').innerHTML = "等级";
			answer = "등급 등,등급 급";
			break;
		case 3:
			document.getElementById('message').innerHTML = "倂合";
			answer = "아우를 병,합할 합";
			break;
		case 4:
			document.getElementById('message').innerHTML = "戰死";
			answer = "싸울 전,죽을 사";
			break;
		case 5:
			document.getElementById('message').innerHTML = "地域";
			answer = "땅 지,지경 역";
			break;
		case 6:
			document.getElementById('message') = "王族";
			answer = "임금 왕,겨레 족";
			break;
		case 7:
			document.getElementById('message') = "國交";
			answer = "나라 국,사귈 교";
			break;
		case 8:
			document.getElementById('message') = "王號";
			answer = "임금 왕,부를 호";
			break;
		case 9:
			document.getElementById('message') = "國號";
			answer = "나라 국,부를 호";
			break;
		case 10:
			document.getElementById('message') = "農事";
			answer = "농사 농,일 사";
			break;
		case 11:
			document.getElementById('message') = "上大等";
			answer = "위 상,큰 대,등급 등";
			break;
		case 12:
			document.getElementById('message') = "兵部";
			answer = "병사 병,떼 부";
			break;
		case 13:
			document.getElementById('message') = "花郞徒";
			answer = "꽃 화,사내 랑,무리 도";
			break;
	}
}
function normal(){
	if(document.getElementById('input').value == answer){
		document.getElementById('message').innerHTML = "정답";
		document.getElementById('input').value = '';
	}
	else{
		document.getElementById('message').innerHTML = "오답";
	}
}
