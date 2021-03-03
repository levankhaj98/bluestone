<template>
	<div id="news-and-video">
		<div id="news">
			<div id="left-news">
				<h2>cập nhật mới nhất</h2>
				<div class="item">
					<a href="#"><img src="../assets/images/new-update/tet-se-chia.jpg"></a>
					<div>
						<h3><a href="#">TẾT SẺ CHIA&colon; BLUESTONE CHUNG TAY CÙNG ĐIỆN MÁY XANH MANG “TẾT ẤM” ĐẾN VỚI NGƯỜI NGHÈO</a></h3>
						<a href="#">tin tức mới</a>
					</div>
				</div>
				<div class="item">
					<a href="#"><img src="../assets/images/new-update/trao-hoc-bong.jpg"></a>
					<div>
						<h3><a href="#">Tưng bừng lễ trao tặng sách, thiết bị học tập và học bổng cho Trường THCS xã Nghĩa Lộc, huyện Nghĩa Đàn, Nghệ An</a></h3>
						<a href="#">tin tức mới</a>
					</div>
				</div>
				<div class="item">
					<a href="#"><img src="../assets/images/new-update/da-bong.jpg"></a>
					<div>
						<h3><a href="#">BlueStone kết hợp cùng Vtars tổ chức trận đấu giao hữu gây quỹ ủng hộ miền Trung</a></h3>
						<a href="#">tin tức mới</a>
					</div>
				</div>
			</div>
			<div id="video-demo">
				<h2>video mới nhất</h2>
				<div @click="hiddenVideo = !hiddenVideo">
					<i class="fas fa-play-circle"></i>
					<img src="../assets/images/banner/banner1.png">
					<div id="hidden-video" :class="{hiddenVideo: hiddenVideo}" ref="autoPlay">
						<iframe v-if="hiddenVideo == false" src="https://www.youtube.com/embed/CJphwpG0PGo?autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" autoplay="autoplay" allowfullscreen></iframe>
						<p @click="hiddenVideo = false"><i class="fas fa-times"></i></p>
					</div>
				</div>
				<h3>SẺ CHIA SỨC KHỎE MÙA HÈ CÙNG BLUESTONE</h3>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			hiddenVideo: true
		}
	},
	methods: {
		
	}
}
</script>

<style lang="css" scoped>
#news {
	padding: 60px 0px;
	max-width: 1260px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: 0px auto;
}
#news > div > h2 {
	font-size: 16px;
	font-family: GothicA1-bold;
	line-height: 24px;
	color: #d12046;
	text-transform: uppercase;
	margin-bottom: 25px;
}
#video-demo {
	position: relative;
}
#video-demo > div > img {
	width: 615px;
}
#video-demo > div {
	height: 261px;
	display: inline-block;
	position: relative;
	cursor: pointer;
}
#video-demo > div:after {
	content: " ";
	display: inline-block;
	position: absolute;
	width: 100%; 
	height:100%;
	top: 0;
	left: 0;
	transition: background 0.3s ease-in-out;
	background:rgba(0,0,0,0);
	z-index: 1;
}
#video-demo > div:hover:after {
	background: rgba(0,0,0,0.3);
}
#video-demo > div > i {
	position: absolute;
	top: 40%;
	left: 45%;
	color: white;
	font-size: 50px;
	z-index: 2;
}
.hiddenVideo {
	display: none !important;
}
#hidden-video {
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	background: rgba(0,0,0,0.9);
	width: 100%;
	height: 100%;
	z-index: 1000;
}
#hidden-video > iframe {
	width: 72%;
	height: 90%;
	border: 7px solid white;
}
#hidden-video p{
	position: absolute;
	top: 2%;
	right: 12.3%;
	width: 40px;
	height: 40px;
	border-radius: 50%;
	background-color: #0e6393;
	text-align: center;
	padding-top: 10px;
	color: white;
	font-size: 20px;
	transition: all 0.5s linear;
}
#hidden-video p:hover {
	transform: rotate(90deg);
}
.item {
	width: 530px;
	display: flex;
	margin-bottom: 20px;	
}
.item > a > img {
	display: inline-block;
	width: 120px;
	margin-right: 15px;
}
.item > div > h3 > a {
	font-size: 20px;
	font-family: Prata;
	font-weight: 100;
	line-height: 28px;
	color: #333;
	text-transform: none;
	transition: all .3s ease;
}
.item > div > h3 {
	margin-bottom: 5px;
}
.item > div > h3 > a:hover {
	color: #d12046;
}
.item > div > a {
	font-size: 12px;
	line-height: 18px;
	color: #024f9b;
	margin-bottom: 25px;
	text-transform: uppercase;
	font-family: GothicA1;
	font-weight: bold;
	transition: all .3s ease;
}
.item  > div > a:hover {
	color: #d12046;
}
#video-demo > h3 {
	margin-top: 15px;
	font-family: GothicA1-bold;
	font-size: 12px;
	color: #024f9b;
}
</style>