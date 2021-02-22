<template>
	<footer>
		<div class="container">
			<div class="row">
				<div class="boxleft col-md-8 col-sm-8 col-xs-12">
					<div class="top row">
						<div class="box col-md-4 col-sm-6- col-xs-6">
							<a href="#">Chăm sóc nhà bếp</a>
							<a href="#">Chăm sóc sắc đẹp</a>
							<a href="#">Chăm sóc môi trường</a>
							<a href="#">Chăm sóc vải</a>
						</div>
						<div class="box col-md-3 col-sm-6 col-xs-6">
							<a href="#">Hỗ trợ &#38; Bảo hành</a>
							<a href="#">Về BlueStone</a>
						</div>
						<div class="box col-md-2 col-sm-6 col-xs-6">
							<a href="#">Cẩm nang</a>
							<a href="#">Tin tức</a>
							<a href="#">Liên hệ</a>
						</div>
						<div class="box col-md-3 col-sm-6 col-xs-6">
							<h4>HOTLINE</h4>
							<a href="tel:1800545494">1800 5454 94</a>
						</div>
					</div>
					<div class="bottom row">
						<div class="brand col-md-4 col-md-4 col-xs-12">
							<a href="#"><img src="../assets/images/subcribe/logo-white.png"></a>
						</div>
						<div class="social col-md-3 col-sm-3 col-xs-12">
							<a href="#"><i class="fab fa-facebook-f"></i></a>
							<a href="#"><i class="fab fa-youtube"></i></a>
						</div>
						<div class="term col-md-5 col-sm-5 col-xs-12">
							<a href="#">Bảo mật thông tin</a>
							<a href="#">&#124;</a>
							<a href="#">Điều khoản &#38; Quy định</a>
						</div>
					</div>
				</div>
				<div class="boxright col-md-4 col-sm-4 hidden-xs">
					<div class="box">
						<h4>VĂN PHÒNG MIỀN NAM</h4>
						<p>Địa chỉ: Tầng 3, Cao ốc HDTC, 36 Bùi Thị Xuân, Phường Bến Thành, Quận 1, TP.HCM</p>
						<p>Điện thoại: 028.3925.7588 </p>
						<p>Fax: 028.3925.7589 </p>
					</div>
					<div class="box">
						<h4>VĂN PHÒNG MIỀN BẮC</h4>
						<p>Địa chỉ: Tầng 3, Tòa nhà HEID, 12 Đường Láng Hạ, P. Thành Công, Q. Ba Đình, Hà Nội</p>
						<p>Điện thoại: 024.3623.0550</p>
						<p>Fax: 024.3623.0551 </p>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	data () {
		return {

		}
	}
}
</script>

<style lang="css" scoped>
footer {
	width: 100%;
	height: 430px;
	background-image: url("../assets/images/subcribe/bgft.png");
	background-color: #0E3F97;
	padding: 60px 0;
}
footer a {
	font-size: 14px;
	font-family: GothicA1-bold;
	line-height: 24px;
	color: #fff;
	text-transform: none;
	display: block;
	margin-bottom: 2px;
	transition: all 0.2s ease; 
}
footer a:hover {
	color: #d12046;
}
.top {
	margin-bottom: 60px;
}
.social {
	display: flex;
}
.social > a {
	font-size: 30px;
	margin-right: 20px;
}
h4 {
	text-transform: uppercase;
	margin-bottom: 5px;
	color: white;
	font-size: 18px;
	font-family: GothicA1-bold;
}
.boxright p {
	margin: 0 4px 10px;
	color: white;
	font-size: 14px;
	text-transform: none;
}
.boxright .box {
	margin-bottom: 30px;
}
.term > a{
	font-size: 14px;
	font-family: GothicA1;
	line-height: 24px;
	color: #fff;
	text-transform: none;
	display: inline-block;
	margin-bottom: 2px;
	margin-right: 5px;
}
.term > a:nth-child(2) {
	margin: 0px 5px;
	font-weight: bold;
}
</style>