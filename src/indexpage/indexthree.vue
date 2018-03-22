<template>
	<div class="new-one1">
		<div class="new-one">
			<img src="../assets/banner03.png">
		</div>
		<div class="new-one2">
			<ul>
				<li @click="handleClick()">登录</li>
				<li>注册</li>
				<li>关于</li>
			</ul>
		</div>
		<transition name="show">
		<div class="shage11" v-show="panelShow">
			<div class="shage112" @click="handleClick1()">X</div>
		</div>
		</transition>
	</div>
</template>

<script>
	 export default {
        data() {
            return {
                panelShow :false
            }
        },
        
//      mounted() {
//          this.handleClick(5)
//      },
        
        methods: {
            handleClick() {
              this.panelShow = true;
            },
             handleClick1() {
              this.panelShow = false;
            }
        }
    }
</script>

<style>
	.new-one1{
		width: 100%;
		height: auto;
		line-height: 100px;
		color: #ffffff;
		font-size: 20px;
		font-weight: bold;
		text-align: center;
		background: #999999;
		
	}
	.new-one{
		width: 500px;
		height: auto;
		line-height: 100px;
		color: #ffffff;
		font-size: 20px;
		font-weight: bold;
		text-align: center;
		
		float: left;
		
	}
	.new-one2{
		
		width: 200px;
		height: 50px;
		line-height: 50px;
		float: right;
		color: #FFFFFF;
		
		
	}
	.new-one2 ul li{
		float: left;
		width: 50px;
		list-style: none;
		cursor: pointer;
	}
	.new-one img{
		vertical-align: middle;
	}
	.shage11{
		width: 300px;
		height: 300px;
		background: red;
		position:fixed;
		top:50%;
		left: 50%;
		margin-top: -150px;
		margin-left: -150px;
	}
	.shage112{
		width: 40px;
		height: 40px;
		float: right;
		color: #0000FF;
		border-radius: 40px;
		background: yellow;
		line-height: 40px;
		cursor: pointer;
	}
	.show-enter-active,.show-leave-active{
				transition: all .75s ease; 
			}
			.show-enter,.show-leave-to{
				opacity: 0;
			}
			.show-enter-to,.show-leave{
				opacity: 1;
			}
</style>