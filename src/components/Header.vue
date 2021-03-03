<template> 
	<div id="top-menu">
			<div id="wrap">
				<ul id="left-menu">
					<li id="drop-down" @click="show=!show"><a href="#" @click="preventDefault">Dự án của BlueStone</a>
						<transition-group name="fade">
						<div v-if="show" :key="show"><a href="#">Bếp núc là sẻ chia</a></div>
						</transition-group>
					</li>
					<li class="border-expand"><a href="#">Tin tức</a></li>
				</ul>
				<form>
					<input type="text" name="search" v-model="text" :class="{showIcon:showIcon}">
				</form>
				<ul id="right-menu">
					<li><a href="tel:1800 5454 94">1800 5454 94</a></li>
					<li class="border-expand"><a href="#" >Mua hàng</a></li>
					<li class="border-expand"><a href="#" >Liên hệ</a></li>
				</ul>
			</div>
		</div>
</template>

<script>
export default {
	data () {
		return {
			show : false,
			text : " ",
			showIcon: true
		}
	},
	methods:{
		preventDefault: function(event){
			event.preventDefault();
		}
	},
	watch: {
		text: {
			handler(){
				if (this.text == "") {
					this.showIcon = false
				}
				else{
					this.showIcon = true
				}
			}
		}
	},
	mounted() {
		this.text = "";
	}
}

</script>

<style lang="css" scoped>
*{
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	list-style: none;
	text-decoration: none;
	font-family: HelveticaNeue, iconFont, GothicA1, Prata, Helvetica, Arial, sans-serif ;
}

#top-menu {
	line-height: 24px;
	display: flex;
	justify-content: center;
	max-width: 100%;
	height: 50px;
	font-size: 14px;
	border-bottom: 1px solid #e0e9f1;
}
#wrap {
	width: 1170px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 15px;
	padding-right: 15px;
}

#right-menu
,#left-menu {
	display: flex;
	justify-content: space-between;
}
#left-menu > li > a {
	color: #333333;
}
#left-menu > li {
	margin-right: 40px;
}
.border-expand:after{
	display:block;
	content: '';
	border-bottom: solid 1px #333;  
	transform: scaleX(0);  
	transition: transform 0.3s ease-in-out;
}
.border-expand:hover:after { 
	transform: scaleX(1); 
}

#drop-down {
	position: relative;
}
#drop-down  div {
	position: absolute;
	top: 150%;
	left: -15px;
	z-index: 1000;
	box-shadow: 2px 2px 10px 0px #ddd;

}
#drop-down  div > a {
	padding: 8px 15px;
	color: #333333;
	width: 220px;
	height: 42px;
	display: inline-block;
	background-color: white;
}
#drop-down > a:after{
	content: " ";
	margin-left: 6px;
	display: inline-block;
	border: 4.5px solid transparent;
	border-top-color: black; 
	border-bottom-width: 0px;
	margin-bottom: 3px;
}
.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s ease;
}
.fade-enter, .fade-leave-to {
	opacity: 0;
	transform: translateY(20px);
}
.fade-enter-to, .fade-leave {
	
}
#right-menu > li {
	margin-left: 40px;
}
#right-menu > li > a{
	background-repeat: no-repeat;
	padding-left: 30px;
	background-position: 0% 33%;
	display: inline-block;
	color: #333333;
}
#right-menu > li:first-child > a{
	font-size: 15px;
	color: #024f9b;
	background-image: url("../assets/images/header/phone.png");

}
#right-menu > li:nth-child(2) > a{
	background-image: url("../assets/images/header/cart.png");
}
#right-menu > li:nth-child(3) > a{
	background-image: url("../assets/images/header/envelop.png");
	
}
input {
	border: none;
	background-color: #ededed;
	width: 340px;
	height: 35px;
	border-radius: 20px;
	text-align: center;
	background-image: url("../assets/images/header/search.png");
	background-repeat: no-repeat;
	background-position: 50% 50%;
}
input:focus {
	outline: none;
	background-image: none;
}
input.showIcon{
	background-image: none;
}
/*=============responsive========*/
@media screen and (max-width: 1080px){

}
</style>