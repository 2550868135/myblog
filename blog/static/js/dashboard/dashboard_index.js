$(function (){


    //用户状态改变
    $(".check-form").click(function () {
        var url = $(this).attr('data-url');
        var able = $(this).children("input").val();
        var tr = $(this).parent().parent();
        if(able!="1") {
            $.ajax({
                url:url,
                type:'get',
                data:{
                    'user_id':tr.attr('data-userId')
                },
                success: function(data){
                    if(data.code!=0){
                        swal({
                        'title': '修改失败',
                        'button': '确定',
                        'type': "error"
                        },function(){
                            window.location.reload();
                        });
                    }
                }
            })
        }
    });

});

