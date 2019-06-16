var app = new Vue({
    el: '#wrap',
    data:{
      isShow:true,
    },
    mounted:function(){
		$(".btn_title").on("click",function(){
			$(this).parents(".tab_box").siblings().find(".selection").hide();
			$(this).parents(".tab_box").siblings().find(".act").removeClass("act");
			$(this).parent().find(".selection").show().parent().siblings().find(".selection").hide();
			$(this).addClass("act").parent().siblings().find(".btn_title").removeClass("act");
		}),
		$(".selection span").on("click",function(){
			$(this).addClass("selection_act").siblings().removeClass("selection_act");
			$(".selection_three").css("display","none")
			$(this).next().css("display","block");
		}),
		$(".screen_btn").on("click",function(){
			$(this).addClass("hover_white").siblings().removeClass("hover_white");
		}),
		$(".operation li").on("click",function(){
			$(this).addClass("hover_huang").siblings().removeClass("hover_huang");
		}),
		$(".selection").on("mouseleave",function(){
			$(this).css("display","none")
		}),
		$(".invented_option").on("mouseleave",function(){
			$(this).css("display","none")
		}),
		$(".show_option").on("click",function(){
			$(this).parent().find(".invented_option").slideToggle();
			//$(this).addClass("hover_huang").siblings().removeClass("hover_huang");
		}),
		$(".invented_option span").on("click",function(){
			$(this).parents(".invented_option").hide();
			var now=$(this).text();
			$(this).parents(".invented_select").find(".show_option").html(now)
		}),
		$(".datasheet tbody td").on("click",function(){
			$(".datasheet tr").removeClass("td_bg");
			$(this).parent().addClass("td_bg").siblings().removeClass("td_bg");
		})
    },
    methods:{
        getUrlParam:function () {
            
        }
    }
})
var sections= new Vue({
    el: '#sections',
    data:{
      isShow:true,
    },
    mounted:function(){
    	/*添加*/
		$(".operate_down .add_stagetr").on('click',function(){
			$(this).parents(".section").find(".information_section .node_table tbody").append('<tr><td></td><td><input type="text" placeholder="请输入"></td><td><input type="text" placeholder="请输入"></td><td><span class="frame_btn">添加控制字</span><span class="frame_btn">查看控制字</span><span class="frame_btn">删   除</span></td></tr>')
			var len=$(this).parents(".section").find(".node_table tbody tr").not("#hide_tr").length;
			for(var i=0;i<=len;i++){
				$(this).parents(".section").find(".node_table tbody tr").eq(i).find("td:nth-child(1)").text(i);
			}
			var scrolls=$('.node_table tbody')[0].scrollHeight;
			$('.node_table tbody').scrollTop(scrolls);
		}),
		$(".add_control").on('click',function(){
			var moudel='<div class="tr_list"><div class="td_Important"><ul><li><label>控制字</label><div class="invented_select"><p class="show_option" id="show_option1">0x01</p><label for="show_option1"><img src="../img/down.png"></label><ul class="invented_option"><li><span>0x01</span></li><li><span>0x02</span></li><li><span>0x03</span></li></ul></div><input type="text" placeholder="地址低八位"/><input type="text" placeholder="地址高八位"/><input type="text" placeholder="数量低八位"/><input type="text" placeholder="数量高八位"/></li><li><label>数据类型</label><input type="text" placeholder="数据" class="unite unites"/><label>周期</label><div class="invented_select unite"><p class="show_option" id="show_option1">10分钟</p><label for="show_option1"><img src="../img/down.png"></label><ul class="invented_option"><li><span>不定时</span></li><li><span>10分钟</span></li><li><span>20分钟</span></li></ul></div><label>算法</label><div class="invented_select"><p class="show_option" id="show_option1">10分钟</p><label for="show_option1"><img src="../img/down.png"></label><ul class="invented_option"><li><span>不定时</span></li><li><span>10分钟</span></li><li><span>20分钟</span></li></ul></div></li><li><label>读写类型</label><input type="text" placeholder="写" class="unite unites"/><label>操作类型</label><input type="text" placeholder="单选按钮" class="unite unitew"/><label>单位</label><div class="invented_select"><p class="show_option" id="show_option1">A</p><label for="show_option1"><img src="../img/down.png"></label><ul class="invented_option"><li><span>A</span></li><li><span>10分钟</span></li><li><span>20分钟</span></li></ul></div></li></ul></div><div class="td_remove"><span class="remove_btn">删除</span></div></div><div class="tr_list"><div class="td_Important"><ul><li><label>控制字</label><div class="invented_select"><p class="show_option" id="show_option1">0x01</p><label for="show_option1"><img src="../img/down.png"></label><ul class="invented_option"><li><span>0x01</span></li><li><span>0x02</span></li><li><span>0x03</span></li></ul></div><input type="text" placeholder="地址低八位"/><input type="text" placeholder="地址高八位"/><input type="text" placeholder="数量低八位"/><input type="text" placeholder="数量高八位"/></li><li><label>数据类型</label><input type="text" placeholder="数据" class="unite unites"/><label>周期</label><div class="invented_select unite"><p class="show_option" id="show_option1">10分钟</p><label for="show_option1"><img src="../img/down.png"></label><ul class="invented_option"><li><span>不定时</span></li><li><span>10分钟</span></li><li><span>20分钟</span></li></ul></div><label>算法</label><div class="invented_select"><p class="show_option" id="show_option1">10分钟</p><label for="show_option1"><img src="../img/down.png"></label><ul class="invented_option"><li><span>不定时</span></li><li><span>10分钟</span></li><li><span>20分钟</span></li></ul></div></li><li><label>读写类型</label><input type="text" placeholder="写" class="unite unites"/><label>操作类型</label><input type="text" placeholder="单选按钮" class="unite unitew"/><label>单位</label><div class="invented_select"><p class="show_option" id="show_option1">A</p><label for="show_option1"><img src="../img/down.png"></label><ul class="invented_option"><li><span>A</span></li><li><span>10分钟</span></li><li><span>20分钟</span></li></ul></div></li></ul></div><div class="td_remove"><span class="remove_btn">删除</span></div></div>';
			layer.open({
			  title: [
			    '添加控制字（节点1 传感器1）',
			    'background-color:#181920; color:#fff;font-size:14px;'
			  ],
			  skin: 'gate_pop',
			  area: ['520px','210px'],
			  anim: 'up',
			  id:"layer_list",
			  content: moudel,
			  btn: ['确定','取消','+'],
			  // 点击确定按钮事件
				yes: function(index,layero){
					top.layer.close(index);
				},
				cancel: function(index){
	    	    },
	    	    btn3:function(index,layero){
					$(this).parents("#layer_list").append(moudel);
					return false;
				}
			});
		})
    }
})
var layer_list=new Vue({
    el: '#layer_list',
    data:{
      isShow:true,
    },
    mounted:function(){
		$(document).on('click','.remove_btn',function(){
	    	$(this).parents(".tr_list").remove();
        });
        /*$(document).on('click','.layui-layer-btn2',function(){
	    	$(this).parents("#layer_list").append(moudel);
        });*/
 	}
})