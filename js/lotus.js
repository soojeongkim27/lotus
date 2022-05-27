$(document).ready(function(){/////start
	
	//왼쪽 하위메뉴 (웹표준+웹접근성 향상)
	$("#left li> a").on("mouseenter  click" ,  function(){
		$("#left li> nav").stop().slideUp();
		$(this).next().stop().slideDown();
	});
	
	//메뉴영역에서 마우스가 멀어질때
	$("#left> nav").mouseleave(function(){
		$("#left li> nav").stop().slideUp();
	});
	
	//왼쪽메뉴 마지막 <a>가 포커스를 잃을때
	$(".last").blur(function(){
		$("#left li> nav").stop().slideUp();
	});
	
	//페이드 슬라이드 (자동으로 계속 반복된다.)
	const  fade = setInterval( fading , 2800);
	let i =3; // 항목의 개수 (초기값)
	function fading(){
		i--; //재할당
		if( i == 0 ){
			$("#slide a").fadeIn(); //모든 항목<a>가 서서히 나타난다.
			i = 3; //재할당
		} else {
			$("#slide a").eq(i).fadeOut();  //index 2가 서서히 사라진다.
		}		
	}
	
	//const x = ["딸기" , "바나나" , "키위" , "파인애플" , "오렌지"]; //배열 (Array)
	//console.log(   x[1]   );  //x변수는 배열이다. index번호 1에는 "바나나"라는 텍스트있다.
	//console.log(   x.length  );  // x 배열의 길이는 5이다.
	
	
	
	// 팝업 모달 보이기 (공지사항 첫번째 항목 <a>를 클릭하면 팝업이 뜬다)
	$(".pop").click(function(){
		$("#popup").fadeIn();
		$("#popup button").focus();  //웹접근성 향상
	});
	
	//팝업 모달 닫기 ([닫기]버튼) 웹표준+웹접근성 향상
	$("#popup button").click(function(){
		$("#popup").fadeOut();
	});
		
	
});/////////////////end












