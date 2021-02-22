<template>
	<div id="subcribe">
		<div id="icon-top">
			<i><img src="../assets/images/subcribe/icon-line.png"></i>
		</div>
		<div id="sub-form">
			<h2>Trở thành bạn đồng hành thân thiết cùng BlueStone ngay hôm nay</h2>
			<p>Chúng tôi luôn chào đón những sự quan tâm của bạn dành cho BlueStone. Đừng ngần ngại liên lạc cho chúng tôi qua Website, Facebook hay số Hotline để được giải đáp và tư vấn tốt hơn.</p>
			<p>Hãy để lại email để đăng ký nhận bản tin, tin tức, sự kiện hay những chương trình khuyến mãi mới nhất.</p>
			<form>
				<input type="email" name="" placeholder="Địa chỉ Email">
				<div>ĐĂNG KÝ</div>
			</form>
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
#subcribe{
	position: relative;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
}
#icon-top {
	border-top: 1px solid #ccc;
	width: 1260px;
}
#icon-top > i {
	text-align: center;
	width: 90px;
	background-color: white;
	position: absolute;
	top: -10px;
	left: 47%;
}
#icon-top > i > img {
	max-width: 100%;
	background-color: white;
}
#sub-form {
	width: 800px;
	text-align: center;
	margin: 60px 0;	
}
#sub-form > h2 {
	font-size: 36px;
	font-family: Prata;
	font-weight: 100;
	line-height: 48px;
	color: #024f9b;
	text-transform: none;
}
#sub-form p {
	margin: 10px auto 30px auto;
	font-family: GothicA1;
}
#sub-form > form {
	width: 660px;
	height: 50px;
	border: 1px solid #d8d8d8;
	border-radius: 30px;
	margin: auto;
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	z-index: 1;
}
#sub-form > form > input {
	width: 660px;
	outline: none;
	border: none;
	text-align: center;
	font-size: 16px;
	height: 100%;
	border-radius: 30px;
}
#sub-form > form > div {
	margin-right: 5px;
	min-width: 160px;
	height: auto;
	height: 35px;
	text-align: center;
	background: #26bee4;
	border-radius: 30px;
	padding: 7px 22px 5px 22px;
	display: inline-block;
	white-space: nowrap;
	vertical-align: middle;
	font-size: 12px;
	font-family: GothicA1-bold;
	line-height: 22px;
	color: #fff;
	text-transform: uppercase;
	outline: none;
	border: none;
	transition: all 0.2s ease;
}
#sub-form > form > div:hover {
	cursor: pointer;
	background: #d12046;
}
</style>