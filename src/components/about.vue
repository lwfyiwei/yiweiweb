<template>
    <div>
        <div class="box m-tit">
            <h1><a @click="slideToggle" href="javascript:;"></a></h1>
            <a @click="slideToggle" href="javascript:;" class="w-icon">查看个人介绍</a>
        </div>
        <div class="box box-do m-about">
		<div class="block">
		  <span class="demonstration">默认显示颜色</span>
		  <span class="wrapper">
			<el-button type="success">成功按钮</el-button>
			<el-button type="warning">警告按钮</el-button>
			<el-button type="danger">危险按钮</el-button>
			<el-button type="info">信息按钮</el-button>
		  </span>
		</div>
            <div class="logo">
                <a href="javascript:;"><img src="http://ww2.sinaimg.cn/large/005uQRNCgw1f4ij3dy4pmj302o02odfo.jpg"></a>
            </div>
            <p>姓名: 林岑影</p>
            <p>年龄: 1987.09</p>
            <p>职业: 前端开发</p>
            <p>技能: HTML5 + CSS3 + jQuery + Gulp + WebPack + ES6 + Vue + NodeJS + PHP</p>
            <a @click="slideToggle" href="javascript:;" class="w-icon">收起个人介绍</a>
        </div>
    </div>
</template>
<script>
    export default {
        methods: {
            slideToggle() {
                $(".m-about").slideToggle("800")
            }
        }
    }
</script>
