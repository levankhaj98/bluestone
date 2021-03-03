<template>
	<div id="sticky-menu" :class="{ stickyMenu: scrollPosition > 50}" >
		<div id="relative" :class="{hovering: isHovering}">
			<div id="wrap">
				<ul id="menu">
					<li><a href="#">về bluestone</a></li>
					<li @mouseover="isHovering = true" 
							@mouseout="isHovering = false" 
							><a href="http/:facebook.com" @click="preventDefault">sản phẩm</a>
						<ul id="hidden-products">
							<li :class="{hoveringChild: hoveringChild == 1}" @mouseover="hoveringChild = 1">
							<span>CHĂM SÓC NHÀ BẾP</span>
								<div class="hidden-div" :class="{displayDiv : hoveringChild == 1}">
									<ul class="inside-hidden-products">
										<li><a href="#">
											<div><img src="../assets/images/header/kitchen/am-dun-menu2.png"></div>
											<span>Ấm đun</span></a></li>
										<li><a href="#">
											<div><img src="../assets/images/header/kitchen/bep-tu-doi.png"></div>
											<span>Bếp hỗn hợp quang từ</span></a></li>
										<li><a href="#">
											<div><img src="../assets/images/header/kitchen/bep-tu-am2.png"></div>
											<span>Bếp từ ba bếp</span></a></li>
										<li><a href="#">
											<div><img src="../assets/images/header/kitchen/bep-tu-doi-2.png"></div>
											<span>Bếp từ đôi</span></a></li>
										<li><a href="#">
											<div><img src="../assets/images/header/kitchen/bep-tu.png"></div>
											<span>Bếp từ đơn</span></a></li>
										<li><a href="#">
											<div><img src="../assets/images/header/kitchen/lo-nuong.png"></div>
											<span>Lò nướng</span></a></li>
										<li><a href="#">
											<div><img src="../assets/images/header/kitchen/lo-vi-song.png"></div>
											<span>Lò vi sóng</span></a></li>
										<li><a href="#">
											<div><img src="../assets/images/header/kitchen/may-danh-trung.png"></div>
											<span>Máy đánh trứng</span></a></li>
									</ul>
								</div>
							</li>
							<li :class="{hoveringChild: hoveringChild == 2}" @mouseover="hoveringChild = 2">
								<span>CHĂM SÓC SẮC ĐẸP</span>
								<div class="hidden-div" :class="{displayDiv : hoveringChild == 2}">
									<ul class="inside-hidden-products">
										<li><a href="#">
											<div><img src="../assets/images/header/kitchen/say-toc.png"></div>
											<span>Máy sấy tóc</span></a></li>
										
									</ul>
								</div>
							</li>
							<li :class="{hoveringChild: hoveringChild == 3}" @mouseover="hoveringChild = 3">
								<span>CHĂM SÓC MÔI TRƯỜNG</span>
								<div class="hidden-div" :class="{displayDiv : hoveringChild == 3}">
									<ul class="inside-hidden-products">
										<li><a href="#">
											<div><img src="../assets/images/header/kitchen/vacuum-cleaner.png"></div>
											<span>Máy húi bụi</span></a></li>
										<li><a href="#">
											<div><img src="../assets/images/header/kitchen/loc-khong-khi.png"></div>
											<span>Máy lọc không khí</span></a></li>
									</ul>
								</div>
						</li>
							<li :class="{hoveringChild: hoveringChild == 4}" @mouseover="hoveringChild = 4">
								<span>CHĂM SÓC VẢI</span>
								<div class="hidden-div" :class="{displayDiv : hoveringChild == 4}">
									<ul class="inside-hidden-products">
										<li><a href="#">
											<div><img src="../assets/images/header/kitchen/ban-ui-dung.png"></div>
											<span>Bàn ủi đứng</span></a></li>
										<li><a href="#">
											<div><img src="../assets/images/header/kitchen/ban-ui-hoi-nuoc.png"></div>
											<span>Bàn ủi hơi nước</span></a></li>
										<li><a href="#">
											<div><img src="../assets/images/header/kitchen/ban-ui-kho.png"></div>
											<span>Bàn ủi khô</span></a></li>
									</ul>
								</div>
						</li>
						</ul>	
					</li>
					<li><a href="http://bluestone.com.vn"><img src="../assets/images/header/logo.png"></a></li>
					<li><a href="#">hỗ trợ &amp; bảo hành</a></li>
					<li><a href="#">cẩm nang</a></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			scrollPosition: null,
			isHovering: false,
			hoveringChild: 1
		}
	},
	methods:{
		updateScroll() {
			this.scrollPosition = window.scrollY
		},
		preventDefault: function(event){
			event.preventDefault();
		}
	},
	
	mounted() {
	window.addEventListener('scroll', this.updateScroll);
	},
	destroy() {
	window.removeEventListener('scroll', this.updateScroll)
}
		
}

</script>

<style lang="css" scoped>
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	list-style: none;
	z-index: 99;
	font-family: HelveticaNeue, iconFont, GothicA1, Prata, Helvetica, Arial, sans-serif ;
}
#relative {
	position: relative;
}
.stickyMenu{
	position:sticky !important; 
	top: 0px; 
	left: 0px; 
	background: white !important; 
	box-shadow: 0px 2px 15px 0px #d0d0d0;
}
.stickyMenu > #relative > #wrap > #menu > li {
	padding: 0 18px;
}
#relative > #wrap > #menu > li > a > img {
	max-width: 100%;
	transition: max-width 0.3s ease-in-out;
}
.stickyMenu > #relative > #wrap > #menu > li > a > img {
	max-width: 80%;
}
#sticky-menu {
	position: relative;
	max-width: 100%;
	height: 58px;
	background: linear-gradient(to bottom, #fff 0%, rgba(255,255,255,0.8) 40%, rgba(255,255,255,0.4) 70%, rgba(255,255,255,0.03) 98%, rgba(255,255,255,0) 100%);;
	transition: background 0.3s ease-in-out;
}
#wrap {
	display: block;
	max-width: 1140px;
	height: 58px;
	margin-right: auto;
	margin-left: auto;
	padding: 0px 15px;
}
#menu {
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}
#menu > li {
	transition: padding 0.3s ease-in-out;
	padding: 0px 23px; 
	height: 58px;
}
#menu > li > a {
	display: flex;
	align-items: center;
	justify-content: center;
	text-transform: uppercase;
	line-height: 24px;
	font-weight: 400;
	color: #034F9B;
	position: relative;
	height: 100%;
}

#menu > li:hover > a {
	color: #D13F4A;
}
#menu > li > a > img {
	margin-top: 5px;
	vertical-align: bottom;
}
#menu > li > a:after {
	display: inline-block;
	width: 100%;
	position: absolute;
	top: 41px;
	left: 0px;
	content: '';
	border-bottom: 2px solid #D13F4A;  
	transform: scaleX(0);  
	transition: transform 0.3s ease-in-out;
}
#menu > li:hover > a:after{
	transform: scaleX(1);
}
#menu > li:nth-child(3) > a:after{
	display: none;
}
#hidden-products{
	display: none;
	width: 100%;
}
#menu > li:nth-child(2):hover > #hidden-products {
	display: flex;
	justify-content: center;
	position: absolute;
	top: 50px;
	left: 0;
	max-width: 100%;
	height: 900px;
	background-color: white;
}
#menu > li:nth-child(2) > #hidden-products{
	padding: 30px 0px;
}
#menu > li:nth-child(2) > #hidden-products > li{
	cursor: pointer;
	padding: 0px 30px; 
	font-size: 12px;
	line-height: 18px;
	display: inline-block;
	height: 30px;
}
.hovering {
	background-color: white;
}
#hidden-products > .hoveringChild{
	color: #D13F4A;
}
#hidden-products > .hoveringChild > span:after{
	display: block;
	content: '';
	border-bottom: 2px solid #D13F4A;    
	transform: scaleX(1);
	transition: all 0.15s ease-in;
}
#hidden-products > li > span:after{
	display:block;
	content: '';
	border-bottom: 2px solid #D13F4A;  
	transform: scaleX(0);  
	transition: all 0.3s ease-in;
}
#hidden-products .inside-hidden-products > li > a img{
	display: block;
	max-height: 75px;
	max-width: 100%;
}
#hidden-products .inside-hidden-products > li > a > div {
	margin-bottom: 20px;
	height: 80px;
	max-width: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
}
.hidden-div {
	display: none;
}
.displayDiv {
	display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
}
#hidden-products .inside-hidden-products{
	display: none;	
	position: absolute;
	top: 80px;
	left: 10px;
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: center;
	overflow-y: scroll;
}
#hidden-products .inside-hidden-products > li > a {
	display: inline-block;
	width: 200px;
	height: 150px;
	text-align: center;
	font-size: 16px;
	color: #333;
}
#hidden-products .inside-hidden-products > li > a:hover {
	color: #D13F4A;
}
#hidden-products .inside-hidden-products > li > a span:after {
	display: block;
	color: #D13F4A;
	margin-top: 7px;
	content: " ";
	border-bottom: 2px solid #D13F4A;
	transform: scaleX(0);
	transition: transform 0.3s ease-in-out; 
}
#hidden-products .inside-hidden-products > li > a:hover span:after{
	transform: scaleX(0.2);
}
#hidden-products .inside-hidden-products > li > a > span {
	margin-top: 120px;
}
</style>