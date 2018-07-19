function initime() {
	showtime();	
	var times=setInterval(showtime,1000);
	function showtime(){
		var time=document.getElementsByClassName('time2')[0];
		var t1=Date.parse('2018-08-19T00:00:00');
		var t2=Date.now();
		var t=new Date(t1-t2);
		time.innerHTML=parseInt(t/1000/60/60/24)+'天'+
		parseInt(t/1000/60/60%24)+'时'+parseInt(t/1000/60%60)+
		'分'+parseInt(t/1000%60)+'秒';
	}
}