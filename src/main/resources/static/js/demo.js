/**
 * 提交回复
 */
function post() {
    var questionId = $("#question-id").val();
    var content = $("#comment_content").val();
    if (!content.trim()) {
        alert("不能回复空内容~~~");
        return;
    }
    $.ajax({
        type: "POST",
        url: "/comment",
        contentType: "application/json",
        data: JSON.stringify({
            "parentId": questionId,
            "content": content,
            "type": 1
        }),
        success: function (response) {
            if (response.code === 200) {
                // $("#comment-section").hide();
                window.location.reload();
            } else {
                if (response.code === 2003) {
                    var isAccepted = confirm(response.message);
                    if (isAccepted) {
                        window.open("https://github.com/login/oauth/authorize?client_id=cee8aa31037deae13bc8&redirect_uri=http://127.0.0.1:8080/callback&scope=user&state=1");
                        window.localStorage.setItem("closable", "true");
                    }
                } else {
                    alert(response.message);
                }
            }
        },
        dataType: "json"
    })
}

/**
 * 展开二级评论
 */
function collappseComments(e) {
    var id = e.getAttribute("data-id");
    var comments = $("#comment-" + id);
    var myself = $(e);
    if (comments.hasClass("show")){
        comments.removeClass("show");
        myself.removeClass("show-comment");
    } else{
        comments.addClass("show");
        myself.addClass("show-comment");
    }
}