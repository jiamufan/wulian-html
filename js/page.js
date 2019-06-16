$(function(){
    function pagenavs(idname,pageCounts,currentPages,perPageNums){
        var pageNavObj = null;
        jQuery(document).ready(function($) {
            //初始化
            //pageNavCreate("PageNav",200,1,pageNavCallBack);
            pageNavObj = new PageNavCreate(idname,{
                pageCount:pageCounts,//总页数
                currentPage:currentPages,//当前页
                perPageNum:perPageNums,//每页按钮数
            });
            pageNavObj.afterClick(pageNavCallBack);
        });
    //翻页按钮点击后触发的回调函数
        function pageNavCallBack(clickPage){
            //clickPage是被点击的目标页码
            //console.log(clickPage);

            //一般来说可以在这里通过clickPage,执行AJAX请求取数来重写页面

            //最后别忘了更新一遍翻页导航栏
            //pageNavCreate("PageNav",pageCount,clickPage,pageNavCallBack);
            pageNavObj = new PageNavCreate(idname,{
                pageCount:getPageSet().pageCount,//总页数
                currentPage:clickPage,//当前页
                perPageNum:getPageSet().perPageNum,//每页按钮数
            });
            pageNavObj.afterClick(pageNavCallBack);
        }
        //本示例页的一些js
        jQuery(document).ready(function($) {
            $("#"+idname+" #testBtn").click(function(event) {
                pageNavObj = new PageNavCreate(idname,{
                    pageCount:getPageSet().pageCount,//总页数
                    currentPage:getPageSet().currentPage,//当前页
                    perPageNum:getPageSet().perPageNum,//每页按钮数
                });
                pageNavObj.afterClick(pageNavCallBack);
            });
            $("#"+idname+" .test-box input").keydown(function(event) {
                if(event.which == 13){
                    pageNavObj = new PageNavCreate(idname,{
                        pageCount:getPageSet().pageCount,//总页数
                        currentPage:getPageSet().currentPage,//当前页
                        perPageNum:getPageSet().perPageNum,//每页按钮数
                    });
                    pageNavObj.afterClick(pageNavCallBack);
                }
            });
            $("#"+idname+" #pageNavStyle").change(function(event) {
                var selectVal = $(this).val();
                //console.log(selectVal);
                if(selectVal==0){
                    $("#"+idname+" #PageNavId").removeClass('dark');
                    $("#"+idname+" footer").removeClass('dark-footer');
                }else if(selectVal==1){
                    $("#"+idname+" #PageNavId").addClass('dark');
                    $("#"+idname+" footer").addClass('dark-footer');
                }
            });

        });
        //本示例页的一些js
        function getPageSet(){
            var obj = {
                pageCount:null,//总页数
                currentPage:null,//当前页
                perPageNum:null,//每页按钮数
            }
            if($("#"+idname+" #testPageCount").val() && !isNaN(parseInt($("#"+idname+" #testPageCount").val()))){
                obj.pageCount = parseInt($("#"+idname+" #testPageCount").val());
            }else{
                obj.pageCount = parseInt($("#"+idname+" .page-input-box > input").attr("placeholder"));
            }

            if($("#"+idname+" #testCurrentPage").val() && !isNaN(parseInt($("#"+idname+" #testCurrentPage").val()))){
                obj.currentPage = parseInt($("#"+idname+" #testCurrentPage").val());
                obj.currentPage = (obj.currentPage<=obj.pageCount ? obj.currentPage : obj.pageCount);
            }else{
                obj.currentPage = 1;
            }
            if($("#"+idname+" #testPerPageNum").val() && !isNaN(parseInt($("#"+idname+" #testPerPageNum").val()))){
                obj.perPageNum = parseInt($("#"+idname+" #testPerPageNum").val());
            }else{
                obj.perPageNum = null;
            }

            return obj;
        }

    }
pagenavs("PageNavId",12,1,5)
pagenavs("PageNavId2",15,1,5)
pagenavs("PageNavId3",18,1,5)
pagenavs("PageNavId4",18,1,5)
pagenavs("PageNavId5",18,1,5)
pagenavs("PageNavId6",18,1,5)
})