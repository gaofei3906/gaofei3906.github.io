$(function(){
	nav( $('.logo-right li') );
	nav( $(".ul6 li") );


//页面1---------------------------------------------
	$('a').attr('target','_blank')
	var i=0;
	var timer1=setInterval( tpgd ,2000)
		
			//图片滚动
			function tpgd(){
				//if(i==){}
				$('#box img').eq(i).fadeOut(500);
				if(i>=3){
					i=0;
				}else{
					i++;	
				}
				
				$('#box img').eq(i).fadeIn(500);
		
				$('#box li').removeClass('tes').eq(i).attr('class','tes');
			}

			$('#box li').hover(function(){
				clearInterval(timer1)
				var inow=$(this).index();
				$('#box li').removeClass('tes').eq(inow).attr('class','tes');
				$('#box img').eq(inow).stop().siblings('img').fadeOut();
				$('#box img').eq(inow).stop().fadeIn();
				i=inow;
			},function(){

				timer1=setInterval( tpgd ,2000)
			});

 //nav点击事件
 var key=0;
 function nav(obj){
			obj.click(function(){

			var index=$(this).index();

			key=index;

			$('#centent').attr('class',"go"+index)

			$('.logo-right li').eq(index).stop().siblings().removeClass('tes');
			$('.logo-right li').eq(index).stop().addClass('tes');
			$(".ul6 li").removeClass('tes').eq(index).addClass('tes');
			
			if(index==3){
				$(".box4-box").stop().animate(	{ "width":"100%" },3000 )
			}
			at();
		});
}


function keyy(delta){

	key=key-delta
	
	if(key<0){
		key=0;
	}if(key>5){
		key=5
	}
	$('.logo-right li').eq(key).stop().siblings().removeClass('tes');
	$('.logo-right li').eq(key).stop().addClass('tes');
	$(".ul6 li").removeClass('tes').eq(key).addClass('tes');
	if(key==3){
		$(".box4-box").stop().animate(	{ "width":"100%" },3000 )
	}
	$('#centent').attr('class',"go"+key);
	at();
	
}

//鼠标滚动
var timer
	
$(document).mousewheel(function(event,delta){
				
			clearTimeout(timer);
			 timer = setTimeout(function(){
			  keyy(delta) 
				nav($('.logo-right li'));
				nav( $(".ul6 li") );
 },200);
			
});	

	



//页5----------------------------
function at(){
var $tu3=$('.tu3');
	if(key==4){
		$('.tu2').stop().animate({'top':'0'},3000,'tantiao')
			$tu3.stop().animate({'top':'38%'},1500).animate({'top':'34%'},300).animate({'top':'38%'},300).animate({'top':'36%'},400).animate({'top':'38%'},400)
	}else{
		$('.tu2').stop().animate({'top':'-250'},300)
		$tu3.stop().animate({'top':'-500'},300)
	}
	if(key==5){
		$('.lxw').addClass('lxw1')
		$('.lxw2 span').stop().animate({"top": 289.4 } ,1500)
		$('.lxw2 ul').stop().animate({"top": 490 } ,2000)
	}else{
		$('.lxw').removeClass('lxw1')
		$('.lxw2 span').stop().animate({"top": -120 } ,1500)
		$('.lxw2 ul').stop().animate({"top": -120 } ,500)
	}
}




//页面3---------------------------------------------------------

//案例的点击事件
var $Tili=$('.box3-nav li');
var $3a=$('.ulbox ul li');

	$Tili.click(function(){
	$Tili.removeClass('tes').eq($(this).index()).addClass('tes');
})

$3a.hover(function(){
	$(this).find('span').stop().animate({'bottom':'0'},300);
	$(this).siblings().find('img').stop().animate({'opacity':'0.2'},300);
},
function(){
	$3a.find('img').stop().animate({'opacity':'1'},300);
	$3a.find('span').stop().animate({'bottom':'-50'},300);
});



// 跳动
//这里开始是播放的、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、、

var TiInow=0;
var Liinow=0;
var $Tiul=$('.ulbox ul');
var $Tili=$('.box3-nav li');

//这里是按钮
$Tili.click(function(){

		var This = this;
		if(This.flag) return;
		This.flag=true;
		setTimeout(function(){
			This.flag=false;
		},1000);

		var index=$(this).index();

		$Tili.removeClass('tes').eq(index).addClass('tes');

		if(Liinow<index){
			
			$Tiul.eq(index).css('top','330px');

			$Tiul.eq(Liinow).stop(true).animate({'top':'-330px'},1000,"tantiao").siblings().finish();

			
		}else if(Liinow>index){
			$Tiul.eq(index).css('top','-330px');


			$Tiul.eq(Liinow).stop(true).animate({'top':'330px'},1000,"tantiao").siblings().finish();
			
		}

		$Tiul.eq(index).stop(true).animate({'top':'0px'},1000,"tantiao");

		Liinow=index;


		
});

//这里是图片自动播放的----------------------------------




/*$Tili.hover(function(){

	clearInterval(TIME)

},function(){

	clearInterval(TIME);


	TIME=setInterval( Ti , 2000);
});

$('.box3-img').hover(function() {

	clearInterval(TIME)

}, function() {

	clearInterval(TIME)

	TIME=setInterval( Ti , 2000);
});*/












});//全局结束
