<template>
	<div id="recommend" :class="{displayRecommend: displayRecommend}">
		<h3>bạn đang tìm kiếm sản phẩm gì &#63;</h3>
		<button id="previous-button" @click="moveToLeft()">
				<i class="fal fa-angle-left"></i>
			</button>
			<button id="next-button" @click="moveToRight()">
				<i class="fal fa-angle-right"></i>
			</button>
		<div id="wrap">
			<div id="products" :style="{left: moving + '%'}">
				<a href="#">
					<i><img src="../assets/images/suggest/noi-com-dien.jpg"></i>
					<h4>nồi cơm nấp rời</h4>
				</a>
				<a href="#">
					<i><img src="../assets/images/suggest/cat-bep-tu-am.png"></i>
					<h4>bếp từ đôi</h4>
				</a>
				<a href="#">
					<i><img src="../assets/images/suggest/noi-com-dien.jpg"></i>
					<h4>nồi cơm nắp cài</h4>
				</a>
				<a href="#">
					<i><img src="../assets/images/suggest/cat-bep-tu-am.png"></i>
					<h4>bếp hỗn hợp quang từ</h4>
				</a>
				<a href="#">
					<i><img src="../assets/images/suggest/cat-bep-tu-am.png"></i>
					<h4>bếp từ ba bếp</h4>
				</a>
				<a href="#">
					<i><img src="../assets/images/suggest/vi-nuong.jpg"></i>
					<h4>máy lọc không khí</h4>
				</a>
				<a href="#">
					<i><img src="../assets/images/suggest/ban-ui.jpg"></i>
					<h4>bản ủi hơi nước</h4>
				</a>
				<a href="#">
					<i><img src="../assets/images/suggest/chien-khong-dau.png"></i>
					<h4>nồi chiên không dầu</h4>
				</a>
				<a href="#">
					<i><img src="../assets/images/suggest/noi-com-dien.jpg"></i>
					<h4>nồi cơm điện tử</h4>
				</a>
				<a href="#">
					<i><img src="../assets/images/suggest/ban-ui.jpg"></i>
					<h4>bàn ủi khô</h4>
				</a>
				<a href="#">
					<i><img src="../assets/images/suggest/noi-ap-suat.jpg"></i>
					<h4>nồi áp suất</h4>
				</a>
				<a href="#">
					<i><img src="../assets/images/suggest/noi-com-dien.jpg"></i>
					<h4>nồi cơm điện cao tần</h4>
				</a>
				<a href="#">
					<i><img src="../assets/images/suggest/am-dun.jpg"></i>
					<h4>ấm đun</h4>
				</a>
				<a href="#">
					<i><img src="../assets/images/suggest/cat-bep-tu-don.png"></i>
					<h4>bếp từ đơn</h4>
				</a>
				<a href="#">
					<i><img src="../assets/images/suggest/cat-may-xay-sinh-to.png"></i>
					<h4>máy say sinh tố</h4>
				</a>
				<a href="#">
					<i><img src="../assets/images/suggest/may-ep-trai-cay.jpg"></i>
					<h4>máy ép &hyphen; máy vắt</h4>
				</a>
				<a href="#">
					<i><img src="../assets/images/suggest/may-xay-sinh-to-cam-tay.jpg"></i>
					<h4>máy say cầm tay</h4>
				</a>
				<a href="#">
					<i><img src="../assets/images/suggest/may-lam-sua-dau-nanh.jpg"></i>
					<h4>máy làm sữa đậu nành</h4>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			moving: 0,
			scrollPosition: null,
			displayRecommend: false,
			screenWidth: 0
		}
	}
	,
	methods: {
		moveToRight: function(){
			if (this.moving > -200) {
				this.moving = this.moving - 100;
			}
		},
		moveToLeft: function(){
			if (this.moving < 0) {
				this.moving = this.moving + 100;
			}
		},
		updateScroll: function(){
			this.scrollPosition = window.scrollY
		},
	},
	mounted() {
		window.addEventListener('scroll', this.updateScroll)
		this.displayRecommend = false
	},
	destroy() {
	window.removeEventListener('scroll', this.updateScroll)
	},
	watch: {
		scrollPosition: {
			handler() {
				var screenWidth = screen.width
					
					if(screenWidth > 1200){
						if (this.scrollPosition > 300) {
						return this.displayRecommend = true;
						}
					}
					if (screenWidth < 900) {
						if (this.scrollPosition > 10) {
						return this.displayRecommend = true;
						}
					}
			}
		}
	},
}
</script>

<style lang="css" scoped>
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	font-family: GothicA1, iconFont, Prata, Helvetica, Arial, sans-serif ;
}
body{

}
@font-face {
	font-family: GothicA1;
	src: url('../assets/fonts/Gothic_A1/GothicA1-Black.ttf');
}
.displayRecommend {
	opacity: 1 !important;
	top: 0 !important;
	transform: translateZ(0);
}
#recommend {
	opacity: 0;
	margin: 0 auto;
	max-width: 1080px;
	padding: 60px 0;
	text-align: center;
	position: relative;
	transform: translateZ(0);
	transition: all 1s ease;
	top: 100px;
}
#recommend > h3 {
	font-size: 24px;
	line-height: 32px;
	font-family: GothicA1;
	color: #024f9b;
	font-weight: 1200;
	text-transform: uppercase;
}
#recommend > #wrap {
	height: 120px;
	position: relative;
	max-width: 1080px;
	margin: 40px auto;
	overflow: hidden;
}
#recommend > #wrap > #products {
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	transform: translateZ(0);
	transition: left 0.9s ease;
	left: 0;
}
#products > a {
	display: inline-block;
	width: 180px;
	height: 107px;
}
#products > a > i {
	display: flex;
	align-items: flex-end;
	justify-content: center;
	height: 70px;
	width: 180px;
}
#products > a > i > img {
	max-width: 100%;
	max-height: 100%;
}
#products > a > h4 {
	margin-top: 15px;
	margin-bottom: 4px;
	font-size: 12px;
	font-family: Helvetica;
	line-height: 18px;
	color: #333;
	text-transform: uppercase;
}
#products > a:hover > h4 {
	color: #d12046;
}
#products > a > h4:after {
	content: " ";
	display: block;
	transform: scaleX(0);
	border-bottom: 2px solid #d12046;
	transition: transform 0.2s ease-in-out;
	margin-top: 2px;
}
#products > a:hover > h4:after {
	transform: scaleX(0.3);
}
#recommend > button {
	cursor: pointer;
	position: absolute;
	top: 45%;
	background-color: white;
	width: 40px;
	height: 40px;
	outline: 0;
	border: 0;
	color: #26bee4;
	font-size: 40px;
}
#recommend > button#previous-button {
	left: -4%;
}
#recommend > button#next-button {
	right: -4%;
}
</style>