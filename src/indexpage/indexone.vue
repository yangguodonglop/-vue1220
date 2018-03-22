<template>
	<div class="content1" id="yang">
		<div class="content_left">
			<template v-for="product in productList">
				<h3>{{product.title}}</h3>
				<ul id="example-1">
					<li v-for="item in product.list">

						<a href="#">{{item.name}}</a>
						<span v-if="item.hot">hot</span>
					</li>
				</ul>
			</template>

		</div>
		<div class="content_right">
			<lunbo></lunbo>

			<div class="content_right_bottom">
				<!--				<template ></template>
-->
				<div class="content_con_item" v-for="(item1,index) in list2" :class="{'content_con_item_active': index % 2 !== 0}">
					<span class="item_span1" :class="['item_span1_active'+item1.id]"></span>
					<span class="item_span2">{{item1.title}}</span>
					<span class="item_span3">{{item1.titletext}}</span>
					<span class="item_span4"><a href="#"  >{{item1.titleclick}}</a></span>
				</div>
			</div>
			<div class="select-div">
				<div class="select_div_provice" @click="selectchoose($event,'1')">按省份</div>
				<div class="select_div_provice1">
					<input class="div_input" v-model="nowid" />
					<div class="select_div_provice2 select_div_provice" @click="selectchoose1()">查询</div>
				</div>

			</div>
			<div class="content_right_bottom content_right_bottom1">
				<div class="content_con_item" v-for="(item1,index) in list3" :class="{'content_con_item_active': index % 2 !== 0}" v-if="item1.proName || item1.cityName">
					<span class="item_span1 item_span111" :class="['item_span1_active'+item1.id]"></span>
					<span class="item_span2">{{item1.proID}}</span>
					<span class="item_span3" v-if="item1.proName">{{item1.proName}}</span>
					<span class="item_span3" v-if="item1.cityName">{{item1.cityName}}</span>
					<span class="item_span4"><a href="#">{{item1.pinyin}}</a></span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	import lunbo from '../indexpage/lunbo'
	export default {
		components: {
			lunbo
		},
		data() {
			return {
				nowid: 1,
				list3: [
					//				{
					//						proID: "1",
					//						proName: "北京市",
					//						pinyin: 'beijing',
					//						pin: "B"
					//
					//					},
					//					{
					//						proID: "2",
					//						proName: "湖北省",
					//						pinyin: 'beijing',
					//						pin: "B"
					//
					//					},
					//					{
					//						proID: "3",
					//						proName: "广东省",
					//						pinyin: 'beijing',
					//						pin: "B"
					//
					//					},
					//					{
					//						proID: "4",
					//						proName: "江苏省",
					//						pinyin: 'beijing',
					//						pin: "B"
					//
					//					}
				],
				productList: {
					pc: {
						title: 'PC产品',
						list: [{
								name: '数据统计',
								url: 'http://starcraft.com'
							},
							{
								name: '数据预测',
								url: 'http://warcraft.com'
							},
							{
								name: '流量分析',
								url: 'http://overwatch.com',
								hot: true
							},
							{
								name: '广告发布',
								url: 'http://hearstone.com'
							}
						]
					},
					app: {
						title: '手机应用类',
						last: true,
						list: [{
								name: '91助手',
								url: 'http://weixin.com'
							},
							{
								name: '产品助手',
								url: 'http://twitter.com',

							},
							{
								name: '智能地图',
								url: 'http://maps.com'
							},
							{
								name: '团队语音',
								url: 'http://phone.com',
								hot: true
							}
						]
					}
				},

				list2: [{
						title: "产品介绍11111",
						titletext: "这里是文字描述1，当前产品很好，请耐心使用",
						id: '1',
						titleclick: "立即购买"

					},
					{
						title: "产品介绍2",
						titletext: "这里是文字描述22，当前产品很好，请耐心使用",
						id: '2',
						titleclick: "立即购买2"

					},
					{
						title: "产品介绍3",
						titletext: "这里是文字描述333，当前产品很好，请耐心使用",
						id: '3',
						titleclick: "立即购买3"

					},
					{
						title: "产品介绍4",
						titletext: "这里是文字描述444，当前产品很好，请耐心使用",
						id: '4',
						titleclick: "立即购买4"

					}
				]

			}

		},

		created() {
			this.$jsonp("http://v.juhe.cn/usedcar/province?dtype=1&key=84909de6443bed336cb93e4047b60f98")
				.then((res) => {
					console.log("成功请求数据")
					console.log(res.result.length)
					this.list3 = res.result
					//console.log(res.result[1].proID)
					console.log(this.list3)
				})
				.catch((res) => {
					console.log("失败")
				})
		},
		methods: {
			selectchoose: function(e, num) {
				//				let nowval = "";
				let nowurl = '';
				nowurl = "http://v.juhe.cn/usedcar/province?dtype=1&key=84909de6443bed336cb93e4047b60f98"

				//				if(num == 1) {
				//					nowurl = 1
				////					nowurl = "http://v.juhe.cn/usedcar/province?dtype=1&key=84909de6443bed336cb93e4047b60f98"
				//				} else {
				//					nowurl = 2
				//					nowurl = "http://v.juhe.cn/usedcar/city?dtype=&province=" + nowurl + "&key=84909de6443bed336cb93e4047b60f98"
				//				}
				this.$jsonp(nowurl)
					.then((res) => {
						console.log("成功请求数据")
						console.log(res.result.length)
						this.list3 = res.result
						// console.log(res.result[1].proID)
						console.log(this.list3)
					})
					.catch((res) => {
						console.log("失败")
					})
			},
			selectchoose1: function() {
				let nowurl = '';
				let nownum = this.nownum;
				nownum = this.nowid;
				nowurl = "http://v.juhe.cn/usedcar/city?dtype=&province=" + nownum + "&key=84909de6443bed336cb93e4047b60f98";
				this.$jsonp(nowurl)
					.then((res) => {
						console.log("成功请求数据")
						console.log(res.result.length)
						this.list3 = res.result
						// console.log(res.result[1].proID)
						console.log(this.list3)
					})
					.catch((res) => {
						console.log("失败")
					})

			}
			//			
		}
	}
</script>

<style scoped="">
	* {
		padding: 0;
		margin: 0;
	}
	
	.content1 {
		width: 1200px;
		height: 500px;
		margin: 0 auto;
	}
	
	.content_left {
		width: 250px;
		height: 600px;
		float: left;
		background: #999999;
	}
	
	.content_left h3 {
		width: 250px;
		height: 35px;
		line-height: 35px;
		color: blue;
		float: left;
		text-indent: 20px;
	}
	
	.content_left ul li {
		width: 250px;
		height: 35px;
		line-height: 35px;
		text-align: center;
		float: left;
		list-style-type: none;
		position: relative;
	}
	
	.content_left ul li a {
		width: 250px;
		height: 35px;
		line-height: 35px;
		text-align: center;
		float: left;
		color: #2C3E50;
	}
	
	.content_left ul li span {
		position: absolute;
		right: 50px;
		top: -10px;
		color: red;
	}
	
	.content_right {
		width: 900px;
		height: auto;
		background: #999999;
		float: right;
	}
	
	.content_right_bottom {
		width: 900px;
		height: auto;
		overflow: hidden;
	}
	
	.select-div {
		width: 900px;
		height: 40px;
		background: none;
		margin: 20px 0px;
	}
	
	.select-div .select_div_provice {
		width: 100px;
		height: 40px;
		text-align: center;
		float: left;
		line-height: 40px;
		color: yellow;
		background: #4F88DC;
		border-radius: 5px;
		margin-left: 20px;
		cursor: pointer;
	}
	
	.select-div .select_div_provice:hover {
		background: #42B983;
		color: #FFFFFF;
	}
	
	.content_con_item {
		width: 400px;
		height: 150px;
		float: left;
		background: #4f88dc;
		margin-top: 10px;
	}
	
	.content_con_item_active {
		float: right;
	}
	
	.content_con_item .item_span1 {
		width: 200px;
		height: 150px;
		float: left;
		line-height: 150px;
		text-align: center;
	}
	
	.content_con_item .item_span1_active1 {
		background: url(../../static/images/zz-img-113.png) no-repeat center;
		width: 200px;
		height: 150px;
		float: left;
		line-height: 150px;
		text-align: center;
	}
	
	.content_con_item .item_span1_active2 {
		background: url(../../static/images/zz-img-114.png) no-repeat center;
		width: 200px;
		height: 150px;
		float: left;
		line-height: 150px;
		text-align: center;
	}
	
	.content_con_item .item_span1_active3 {
		background: url(../../static/images/zz-img-115.png) no-repeat center;
		width: 200px;
		height: 150px;
		float: left;
		line-height: 150px;
		text-align: center;
	}
	
	.content_con_item .item_span1_active4 {
		background: url(../../static/images/zz-img-116.png) no-repeat center;
		width: 200px;
		height: 150px;
		float: left;
		line-height: 150px;
		text-align: center;
	}
	
	.content_con_item .item_span111 {
		background: url(../../static/images/beijing.png) no-repeat center;
		width: 200px;
		height: 150px;
		float: left;
		line-height: 150px;
		text-align: center;
	}
	
	.content_con_item .item_span1 img {
		vertical-align: middle;
	}
	
	.content_con_item .item_span2 {
		width: 200px;
		height: 40px;
		line-height: 40px;
		float: left;
	}
	
	.content_con_item .item_span3 {
		width: 200px;
		height: 60px;
		float: left;
		line-height: 30px;
	}
	
	.content_con_item .item_span4 {
		width: 200px;
		height: 40px;
		line-height: 40px;
		float: left;
	}
	
	.content_con_item .item_span4 a {
		width: 100px;
		height: 40px;
		line-height: 40px;
		float: left;
		text-align: center;
		border-radius: 5px;
		background: #42B983;
		color: #FFFFFF;
	}
	
	.div_input {
		width: 100px;
		height: 38px;
		line-height: 40px;
		color: red;
		float: left;
		border: 1px solid #666666;
		margin-left: 20px;
		text-indent: 20px;
	}
</style>