$(function(){var flag=false;$(window).scroll(function(){if(flag){return false;}
if($(document).scrollTop()+$(window).height()+1>=$(document).height()){flag=true;var page=parseInt($(".article-show").attr('data-page'))+1;var totalPage=parseInt($(".article-show").attr('data-total-page'));if(page<=totalPage){$.get(window.location.pathname+'?page='+page,function(data){jQuery.each(data.data,function(key,val){var div=$(".article-show");var article_id=key;var title=val.title;var create_time=val.create_time;var head_img=val.head_img;var username=val.username;var show_content=val.show_content;var element="<a href=\"/blog/detail/?id="+article_id+"\">\n"+"        <div class=\"panel panel-info single-part\">\n"+"            <div class=\"panel-heading\" style=\"position: relative\">\n"+"                <h3 style=\"color: #0C1021;width: 50%;margin: 0\" ><p>"+title+"</p><span class=\"other\" style=\"position:absolute;right: 0;bottom:0;font-size: 14px\">"+create_time+"</span></h3>\n"+"\n"+"            </div>\n"+"            <div class=\"panel-body\">\n"+"                <p>\n"+"                    <img src=\""+head_img+"\" alt=\"\" class=\"img-circle\" style=\"width: 30px;height:30px;display:  inline-block\"/>\n"+"                    <span class=\"user-name\">"+username+": </span>\n"+"                    <span class=\"other detail\">"+show_content+"</span>\n"+"                </p>\n"+"            </div>\n"+"        </div>\n"+"        </a>";div.append(element);});$(".article-show").attr('data-page',page);flag=false});}else{$("#is-bottom").css('display','block');}}});});;