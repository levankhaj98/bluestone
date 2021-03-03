<template>
	<div id="reason">
		<img :style="{ transform: 'translateY('+ ((scrollPosition - 5000) * 0.5) +'px)' }" src="../assets/images/banner2/banner-chon-bluestone3.jpg">
		<h2>Chọn BlueStone &#45; Giải pháp chăm sóc gia đình hoàn hảo</h2>
		<p><strong>BlueStone</strong> là thương hiệu điện gia dụng cao cấp thuộc sở hữu của Lassen Innovation Pte., Ltd. được Tara phân phối độc quyền tại thị trường Việt Nam</p>
		<div id="benefit">
			<div>
				<img src="../assets/images/banner2/i1-chon-bluestone.png">
				<h2>Thương hiệu cao cấp</h2>
				<p>Sản phẩm được kiểm tra nghiêm ngặt theo tiêu chuẩn chất lượng quốc tế, mẫu mã và tính năng luôn được cập nhật để đáp ứng nhu cầu nội trợ</p>
			</div>
			<div>
				<img src="../assets/images/banner2/i2-chon-bluestone.png">
				<h2>Bảo hành 2 năm</h2>
				<p>Cam kết chất lượng và giá trị hậu mãi cao cho các khách hàng đã tin tưởng vào thương hiệu</p>
			</div>
			<div>
				<img src="../assets/images/banner2/i3-chon-bluestone.png">
				<h2>Thân thiện và dễ sử dụng</h2>
				<p>Sản phẩm hiện đại, dễ dàng sử dụng, khuyến khích và đề cao tinh thần sẻ chia chuyện nội trợ trong gia đình</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			scrollPosition: 0,
		}
	},
	methods: {
		updateScroll: function(){
			this.scrollPosition = window.scrollY;
			console.log(this.scrollPosition)
		}
	}
	,
	mounted() {
		window.addEventListener('scroll', this.updateScroll)
	},
	destroy() {
		window.removeEventListener('scroll', this.updateScroll)
	},
	watch: {
		
	}
}
</script>

<style lang="css" scoped>

#reason {
	max-width: 100%;
	height: 600px;
	overflow: hidden;
	position: relative;
	z-index: 1;
	text-align: center;
	align-items: center;	
	display: flex;
	flex-direction: column;
}
#reason > h2 {
	margin-top: 80px;
  font-size: 36px;
  font-family: Prata;
  line-height: 48px;
  font-weight: 100;
  color: white;
  text-transform: none;
  opacity: 1;
}
#reason > p {
	margin-top: 20px;
	max-width: 690px;
	color: white;
}
#reason > img {
	object-fit: cover;
	max-width: none;
	width: 100%;
	position: absolute;
	top: 0;
	left: 0;
	margin-top: 210px;
	overflow: hidden;
	pointer-events: none;
	display: inline-block;
	transform: scale(0.8);
	z-index: -1;
}
#reason:after {
	content: " ";
	position: absolute;
	width: 100%; 
	height:100%;
	top:0; 
	left:0;
	background:rgba(0,0,0,0.6);
	z-index: -1;
}
#benefit {
	display: flex;
	justify-content: space-between;
}
#benefit > div {
	max-width: 290px;
	text-align: center;
	margin: 60px;
}
#benefit > div > h2 {
  font-size: 24px;
  font-family: GothicA1;
  line-height: 34px;
  color: #fff;
  text-transform: none;
  margin-top: 40px;
  margin-bottom: 10px;
}
#benefit > div > p {
	color: white;
	margin: 0 0 10px;
}
</style>