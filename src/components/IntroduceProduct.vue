<template>
<div id="gioithieu">
	<div id="container">
		<div class="product">
			<a href="#"><img src="../assets/images/suggest2/noi-com-dien-tu.jpg"></a>
			<h3><a href="#">nồi cơm điện tử<br>ih rcb &#45; 5987</a></h3>
			<a href="#" class="blue-button">tìm hiểu thêm</a>
		</div>
		<div class="introduce">
			<a href="#"><img src="../assets/images/suggest2/chia-se-tung-bua-com-ngon.jpg"></a>
			<h3>nồi cơm điện tử</h3>
			<h2>Sẻ chia từng bữa cơm ngon</h2>
			<p>BlueStone chăm sóc những bữa cơm gia đình quây quần, hạnh phúc. Làm ấm nồng thêm những khoảnh khắc sẻ chia yêu thương</p>
		</div>
		<div class="introduce">
			<a href="#"><img src="../assets/images/suggest2/lo-vi-song-2.jpg"></a>
			<h3>lò vi sóng</h3>
			<h2>Tiện nghi &#45; Hiện đại &#45; Tiết kiệm thời gian</h2>
			<p>Trải nghiệm nấu nướng thú vị và hiện đại hơn, đáp ứng và nâng cao nhu cầu về sự tiện nghi và sang trọng cho gian bếp.</p>
		</div>
		<div class="product">
			<a href="#"><img src="../assets/images/suggest2/lo-vi-song.jpg"></a>
			<h3><a href="#">lò vi sóng<br>thông minh mob &#45; 7755 </a></h3>
			<a href="#" class="blue-button">tìm hiểu thêm</a>
		</div>
		<div class="product">
			<a href="#"><img src="../assets/images/suggest2/noi-ap-suat.jpg"></a>
			<h3><a href="#">nồi áp suất<br>pcb &#45; 5763</a></h3>
			<a href="#" class="blue-button">tìm hiểu thêm</a>
		</div>
		<div class="introduce">
			<a href="#"><img src="../assets/images/suggest2/noi-ap-suat-2.jpg"></a>
			<h3>nồi áp suất điện tử</h3>
			<h2>Trọn vẹn dưỡng chất</h2>
			<p>Đáp ứng nhu cầu về dinh dưỡng trong mỗi bữa ăn với những sản phẩm gia dụng chăm sóc cho sức khỏe tối ưu hơn.</p>
		</div>
		<div class="introduce">
			<a href="#"><img src="../assets/images/suggest2/ban-ui-hoi-nuoc-dung-2.jpg"></a>
			<h3>bàn ủi hơi nước đứng</h3>
			<h2>Nhanh, Mạnh, Dễ Dàng &#45; Cho trang phục luôn tươm tất</h2>
			<p>Thiết kế sản phẩm sang trọng, tối ưu hóa công năng sử dụng, đem lại sự nhanh chóng và tiện lợi trong việc chăm sóc quần áo mỗi ngày, phù hợp với phong cách sống hiện đại và bận rộn hơn.</p>
		</div>
		<div class="product">
			<a href="#"><img src="../assets/images/suggest2/ban-ui-hoi-nuoc-dung2.jpg"></a>
			<h3><a href="#">bàn ủi hơi nước đứng<br>gsb &#45; 3951</a></h3>
			<a href="#" class="blue-button">tìm hiểu thêm</a>
		</div>
	</div>
</div>
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
*{
	padding: 0;
	margin: 0 ;
	box-sizing: border-box;
	font-family: GothicA1, GothicA1-bold, Prata, Helvetica, Arial, sans-serif ;
}
.blue-button {
	z-index: 4;
	min-width: 130px;
	height: auto;
	text-align: center;
	background: #26bee4;
	padding: 7px 22px 5px 22px;
	font-family: GothicA1-bold;
	display: inline-block;
	vertical-align: middle;
	font-size: 12px;
	line-height: 22px;
	color: #fff;
	text-transform: uppercase;
	border-radius: 17px;
	transition: background-color 0.15s ease-in-out;
	margin-top: 15px;
}
.blue-button:hover {
	background-color: #d12046;
}
#container {
	max-width: 1260px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0 auto;
	padding-top: 200px;
}
#container > div > a {
	overflow: hidden;
}
a {
	display: inline-block;
}
#container > div > h3 {
	margin-top: 30px;	
	text-transform: uppercase;
	font-size: 16px;
	font-family: GothicA1-bold;
	line-height: 24px;
	color: #d12046;
	text-transform: uppercase;
	margin-bottom: 5px;
}
#container > div {
	margin-bottom: 70px;
}
#container > div > h3 > a {
	text-transform: uppercase;
	font-size: 16px;
	font-family: GothicA1-bold;
	line-height: 24px;
	color: #024f9b;
	text-transform: uppercase;
	margin-bottom: 5px;
	flex-shrink: 2;
}
.introduce {
	width: 830px;
	padding: 0 5px;
}
.introduce > div > h3 {
	font-size: 16px;
	font-family: GothicA1-bold;
	line-height: 24px;
	color: #d12046;
	text-transform: uppercase;
	margin-bottom: 5px;
	width: 665px;
}
.introduce > h2 {
	margin: 10px 0;
	font-size: 36px;
	font-family: Prata;
	font-weight: 100;
	line-height: 48px;
	color: #024f9b;
	text-transform: none;
	width: 665px;
}
.introduce > p {
	width: 665px;
}
.introduce {
	margin: 0 0 10px;
	color: #333;
	background: #fff;
	font-size: 16px;
	line-height: 24px;
}
.product {
	width: 400px;
	padding: 0 5px;
}
#container img {
	transition: all 0.3s ease-in-out;
}
#container img:hover {
	transform: scale(1.1);
}
</style>