<template>
	<div class="content_new">
		<div class="header">
			<indexthree></indexthree>
			
		</div>
		<div class="content">
			<router-view></router-view>
		</div>
		<div class="footer">
			<indextwo></indextwo>
		</div>
		<div class="footer1">
			<indexfour></indexfour>
		</div>
		<!--<indexfive v-show="panelShow"> </indexfive>-->
	</div>
</template>

<script>
	import indextwo from '../indexpage/indextwo'
	import indexthree from '../indexpage/indexthree'
	import indexfour from '../indexpage/indexfour'
	//import VueJsonp from 'vue-jsonp'
//	import indexfive from '../indexpage/indexfive'
	//import axios from 'axios'
	export default {
		data(){
			return{
				
			}
		},
		components: {
			indextwo,
			indexthree,
			indexfour
		},
		mounted(){
			
		}
	}
	
</script>


<style scoped="">
	/*css reset*/
html, body, div, span, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr,input, acronym, address, code, del, dfn, em, img, q, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td , i{
	margin:0;
	padding:0;
	border:0;
	font-weight:inherit;
	font-style:inherit;
	font-size:100%;
	font-family:inherit;
	vertical-align:baseline;
}
body {line-height:1.5;   font-size:12px;}
table {border-collapse: collapse;border-spacing:0;}
caption, th, td ,b,strong{text-align:left;font-weight:normal;}
table, td, th {vertical-align:middle;}	
blockquote:before, blockquote:after, q:before, q:after {content:"";}
blockquote, q {quotes:"" "";}
a img {border:none;}
em,cite{font-style:normal;}
a{/*color:#595757; transition: all 0.5s linear 0s;*/}
/*a:hover{text-shadow:0 0 3px #291700}*/

body { background-color:#f2f2f2; font: 14px/1.5 Tahoma,'宋体';color:#000; font-family:"微软雅黑"}
h1, h2, h3, h4, h5, h6 {font-weight:normal;color:#111;}
a {text-decoration:none;cursor:pointer;}
dl, dt, dd, ol, ul, li{ list-style:none;}

/*some common class*/
.left{float:left;}
.right{float:right;}

/*clear*/
.ue-clear:after{content: "";display:block;height:0;clear:both;}
.ue-clear{display:inline-block; overflow:hidden;}
*html .ue-clear{height:1%;}
.ue-clear{display:block; overflow:hidden;}
.header{
	width: 100%;
	height: 100px;
	background: #262626;
}
.footer{
	width: 100%;
	height: 100px;
	background: #666666;
}
.content{
	width: 100%;
	height: auto;
	overflow: hidden;
}
.footer1{
	width: 100%;
	height: 150px;
	background:#999999;
}
.content_new{
	width: 100%;
	height: 100%;
	overflow: hidden;
	position: relative;
}
</style>