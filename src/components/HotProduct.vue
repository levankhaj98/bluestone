<template>
	<div id="banner">
		<div id="content">
			<h3 :class="{appear: appear}">nhóm sản phẩm nổi bật &#45; máy say đa năng và máy ép bluestone</h3>
			<h2 :class="{appear: appear}">“Sẻ chia sức khỏe <br>	 tăng sức đề kháng”</h2>

			<div id="blender">
				<a href="#">
					<img src="../assets/images/hotProduct/BLB-5339.png">
					<h4>máy say sinh tố<br><span>blb&#45;5339</span></h4>
				</a>
				<a href="#">
					<img src="../assets/images/hotProduct/BLB-5336.png">
					<h4>máy say sinh tố<br><span>blb&#45;5336</span></h4>
				</a>
			</div>

		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			scrollPosition: null,
			appear: true
		}
	},
	methods: {
		updateScroll: function(){
			this.scrollPosition = window.scrollY
		}
	}
	,
	mounted() {
		window.addEventListener('scroll', this.updateScroll)
		this.appear = true
	},
	destroy() {
		window.removeEventListener('scroll', this.updateScroll)
	},
	watch: {
		scrollPosition: {
			handler() {
				var screenWidth = screen.width
					
					if(screenWidth > 900){
						if (this.scrollPosition > 750) {
						return this.appear = false;
						}

					}
					if (screenWidth < 900) {
						if (this.scrollPosition > 1000) {
						return this.appear = false;
					}
				}
			}
		}
	}
}
</script>

<style lang="css" scoped>
#banner {
	height: 600px;
	background-image: url("../assets/images/banner/bn1.png");
	background-repeat: no-repeat;
	background-size: cover;
	position: relative;
}
#content {
	position: absolute;
	top: 37%;
	left: 52%;
	width: 560px;
	margin: 0px auto;
}
.appear {
	margin-left: 100px !important;
	opacity: 0;

}
#content > h3 {
	text-transform: uppercase;
	font-size: 16px;
	font-family: GothicA1-bold;
	line-height: 24px;
	color: #d12046;
	margin-bottom: 5px;
	font-weight: bolder;
	margin-left: 0;
	transition: all 0.7s ease;
}
#content > h2 {
	font-size: 36px;
	font-family: Prata;
	line-height: 48px;
	font-weight: 200;
	color: #024f9b;
	text-transform: none;
	transition: all 0.9s ease;
}
#blender {
	position: absolute;
	top: 180%;
	left: -15%;
	width: 520px;
	display: flex;
	margin-right: 60px;
}
#blender > a {
	width: 260px;
	text-align: center;
}
#blender > a > img {
	display: inline-block;
	max-height: 200px;
}
#blender > a > h4 {
  margin-top: 10px;
  margin-bottom: 8px;
  font-size: 12px;
  font-family: GothicA1-bold;
  font-weight: bold;
  line-height: 18px;
  color: #333;
  text-transform: uppercase;
}
</style>