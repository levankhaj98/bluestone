<template>
<div id="main-banner"> 
	<button id="previous-button" @click="moveToLeft()" :disabled="disabled">
		<i class="fal fa-angle-left"></i>
	</button>
	<button id="next-button" @click="moveToRight()" :disabled="disabled">
		<i class="fal fa-angle-right"></i>
	</button>
		<div id="container">
			<transition-group name="fade">
				<div id="wrap" :key="show">
					
						<div class="banner" :class="{showSlide:showSlide == 1}">
							<img src="../assets/images/banner/banner1.png">
							<transition-group name="moveUpLink" class="moveUpLink">
								<a href="#" :class="{moveUp:moveUp}" :key="move">TÌM HIỂU THÊM</a>
							</transition-group>
						</div>
						<div class="banner" :class="{showSlide:showSlide == 2}" >
							<img src="../assets/images/banner/banner2.jpg">
							<div>
								<h2>Việc nhà là sẻ chia</h2>
								<a href="#">TÌM HIỂU THÊM</a>
							</div>
						</div>
					
						<div class="banner" :class="{showSlide:showSlide == 3}">
							<img src="../assets/images/banner/banner3.jpg">
							<div>
								<h2>Việc nhà là sẻ chia</h2>
								<a href="#">TÌM HIỂU THÊM</a>
							</div>
						</div>
					
						<div class="banner" :class="{showSlide:showSlide == 4}">
							<img src="../assets/images/banner/banner4.jpg">
							<div>
								<h2>Việc nhà là sẻ chia</h2>
								<a href="#">TÌM HIỂU THÊM</a>
							</div>
						</div>
					
				</div>
			</transition-group>
		</div>
</div>

</template>

<script>
export default {
data() {
		return {
			moving: 0,
			disabled: false,
			show: false,
			showSlide: 1,
			moveUp: false,
			move: false,
			autoSlide: true
	}
},
	methods: {
		moveToLeft: function(){
			this.disabled = true;

			setTimeout(() => {
				this.disabled = false
			},500)
			
			if (this.showSlide > 1) {
				this.showSlide--;
			}
			else this.showSlide = 4;

			this.show = !this.show

			this.autoSlide = false;
		},
		moveToRight: function(){
			this.disabled = true;

			setTimeout(() => {
				this.disabled = false
			},500)

			if (this.showSlide < 4) {
				this.showSlide++;
			}
			else this.showSlide = 1;

			this.show = !this.show

			this.autoSlide = false;
		}
	},
	mounted(){
		this.moveUp = true;

		setInterval(() => {
				if (this.autoSlide == true) {
					if (this.showSlide < 4) {
						this.showSlide++;
					}
					else this.showSlide = 1;

					this.show = !this.show
				}
				if (this.autoSlide == false){
					setTimeout(() => {this.autoSlide = true}, 100);
				}
			}, 4000)
	},
}
</script>
<style lang="css" scoped>
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	text-decoration: none;
	font-family: HelveticaNeue, iconFont, GothicA1, Prata, Helvetica, Arial, sans-serif ;
}
.fade-enter-active,
.fade-leave-active {
	transition: opacity 500ms cubic-bezier(0.76, 0.22, 0.36, 0.99) 0s;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
}
.fade-enter-to, .fade-leave {
	opacity: 1;
}
.showSlide {
	position: absolute !important;
	top: 0;
	left: 0;
	opacity: 1 !important;
}
#main-banner {
	position: relative;
	top: -58px;
}
#wrap {
	display: inline-block;
	clear: both;
	height: 518px;
}
#container {
	overflow: hidden;
}
.banner {
	width: 100%;
	height: 100%;
	display: inline-block;
	background-color: #EFEEEE;
	flex-shrink: 0;
	opacity: 0;
	position: absolute;
	top: 0;
}
.banner img {
	width: 100%;
	display: block;
}
.banner > .moveUpLink > a{
	position: absolute;
	top: 80%;
	left: 9%;
	transition: top .5s ease-in-out;
	transform: translateZ(0);
	transition: opacity .7s ease-in-out 0.3s, background-color 0.15s ease-in-out, top .7s ease-in-out 0.5s;
	opacity: 0;
}
.moveUp{
	top: 53% !important;
	opacity: 1 !important;
}
.banner a {
	z-index: 4;
	min-width: 130px;
	height: auto;
	text-align: center;
	background: #26bee4;
	padding: 7px 22px 5px 22px;
	display: inline-block;
	white-space: nowrap;
	vertical-align: middle;
	font-size: 12px;
	line-height: 22px;
	color: #fff;
	text-transform: uppercase;
	border-radius: 17px;
	transition: background-color 0.15s ease-in-out;
}
.banner a:hover {
	background-color: #d12046;
}
.banner > div{
	position: absolute;
	top: 43%;
	left: 9%;
	z-index: 4;
}
.banner > div >h2 {
	font-size: 36px;
	font-weight: 300;
	font-family: Prata;
	line-height: 50px;
	color: #024f9b;
	text-transform: none;
	margin: 10px 0 20px 0;
}
#main-banner > button {
	color: #26bee4;
	width: 50px;
	height: 50px;
	border-radius: 50%;
	border: 0;
	cursor: pointer;
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	text-align: center;
	background: #fff;
	font-size: 20px;
	font-weight: 300;
	z-index: 2;
	box-shadow: 0px 0px 6px 1px rgb(0 0 0 / 10%);
	font-size: 30px;
}
#main-banner > button:focus {
	outline: none;
}
#main-banner > button:hover {
	background-color: #26bee4;
	color: white;
}
#previous-button {
	left: 20px;
}
#next-button {
	right: 20px;
}
#next-button > i{
	margin-left: 4px;
	margin-bottom: 5px;
}
#previous-button > i{
	margin-right: 5px;
	margin-bottom: 5px;
}
</style>