<template>
	<div id="app">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
		<Header></Header>
		<StickyHeader></StickyHeader>
		<Banner></Banner>
		<Recommend></Recommend>
		<HotProduct></HotProduct>
		<IntroduceProduct></IntroduceProduct>
		<ChooseBluestone></ChooseBluestone>
		<News></News>
		<Subcribe></Subcribe>
		<Footer></Footer>

	</div>
</template>
<script>
import Header from "./components/Header.vue";
import StickyHeader from "./components/StickyHeader.vue";
import Banner from "./components/Banner.vue";
import Recommend from "./components/Recommend.vue";
import HotProduct from "./components/HotProduct.vue";
import IntroduceProduct from "./components/IntroduceProduct.vue";
import ChooseBluestone from "./components/ChooseBluestone.vue";	
import News from "./components/News.vue";
import Subcribe from "./components/Subcribe.vue";
import Footer from "./components/Footer.vue";
export default {
	data(){
		return{
			
		}
	},
	methods: {
		
	},
	components:{
		Header,
		StickyHeader,
		Banner,
		Recommend,
		HotProduct,
		IntroduceProduct,
		ChooseBluestone,
		News,
		Subcribe,
		Footer
	}
}
</script>
<style lang="css" >
*{
	padding: 0;
	margin: 0 ;
	box-sizing: border-box;
	text-decoration: none !important;
	outline: none;
	font-family: GothicA1, GothicA1-bold, Prata, Helvetica, Arial, sans-serif ;
}
body {
	
}
@font-face {
	font-family: GothicA1;
	src: url('./assets/fonts/Gothic_A1/GothicA1-Light.ttf');
}
@font-face {
	font-family: GothicA1-bold;
	src: url('./assets/fonts/Gothic_A1/GothicA1-Bold.ttf');
}
@font-face {
	font-family: iconFont;
	src: url('./assets/fonts/fontello.ttf');
}
@font-face {
	font-family: HelveticaNeue;
	src: url('./assets/fonts/helveticaneue1/helveticaneuemedium.ttf');
}
@font-face {
	font-family: Prata;
	src: url('./assets/fonts/Prata/Prata-Regular.ttf');
}
body{
}
#app{
	
}
</style>