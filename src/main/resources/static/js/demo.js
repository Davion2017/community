function post() {
    var questionId = $("#question-id").val();
    var content = $("#comment_content").val();
    $.ajax({
        type: "POST",
        url: "/comment",
        contentType: "application/json",
        data: JSON.stringify({
            "parentId": questionId,
            "content": content,
            "type": 1
        }),
        success: function (response){
            if (response.code == 200){
                $("#comment-section").hide();
            }else {
                alert(response.message);
            }
            console.log(response);
        },
        dataType: "json"
    })
}