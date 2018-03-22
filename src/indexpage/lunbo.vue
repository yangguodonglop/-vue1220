<template>
	<div>
		<div class="lunbo_banner">
			<slide :slides="slides" :inv="inv" :style="styleObject" :name="transitionName" :target="target"></slide>
		</div>
	</div>
</template>

<script>
	export default{
		
		data(){
			return{
				slides: [  // 图片的src,图片的超链接
          {
            src: 'http://i3.mifile.cn/a4/xmad_14913974588712_tsRvc.jpg',
            href: ''
          },
          {
            src: 'http://i3.mifile.cn/a4/xmad_14915894814419_zNYsr.jpg',
            href: ''
          },
          {
            src: 'http://i3.mifile.cn/a4/xmad_14913784864515_mkpqH.jpg',
            href: ''
          },
          {
            src: 'http://i3.mifile.cn/a4/xmad_14908694250786_fObqa.jpg',
            href: ''
          },
          {
            src: 'http://i3.mifile.cn/a4/xmad_14913755624659_gRtNH.jpg',
            href: ''
          }
        ],
         inv: 3000,  // 图片自动切换速度
        styleObject: {  // 轮播盒子的宽高
          width: '1226px',
          height: '460px'
        },
        transitionName: 'move',  // 轮播的方式,可选move(左右滑动效果),fade(淡入淡出效果)
        target: '_self', // 超链接打开的方式,默认为_blank
 
			}
		}
	}
</script>

<style>
	.lunbo_banner{
		height: 250px;
		width: 900px;
		overflow: hidden;
	}
	.lunbo_banner img{
		width: 900px;
		height: auto;
	}
</style>
