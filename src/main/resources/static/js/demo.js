function comment2target(targetId, type, content) {
    if (!content.trim()) {
        alert("不能回复空内容~~~");
        return;
    }
    $.ajax({
        type: "POST",
        url: "/comment",
        contentType: "application/json",
        data: JSON.stringify({
            "parentId": targetId,
            "content": content,
            "type": type
        }),
        success: function (response) {
            if (response.code === 200) {
                // $("#comment-section").hide();
                window.location.reload();
            } else {
                if (response.code === 2003) {
                    let isAccepted = confirm(response.message);
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
 * 提交回复
 */
function post() {
    let questionId = $("#question-id").val();
    let content = $("#comment_content").val();
    comment2target(questionId, 1, content);
}

function comment(e) {
    let commentId = e.getAttribute("data-id");
    let content = $("#input-" + commentId).val();
    comment2target(commentId, 2, content);
}

/**
 * 展开二级评论
 */
function collapseComments(e) {
    let id = e.getAttribute("data-id");
    let comments = $("#comment-" + id);
    let myself = $(e);
    if (comments.hasClass("show")){
        comments.removeClass("show");
        myself.removeClass("show-comment");
    } else{
        $.getJSON("/comment/" + id, function (data) {
            let commentBody = $("#comment-body-" + id);
            let items = [];
            $.each(data.data, function (key, val) {

            });

            // 展开二级评论
            comments.addClass("show");
            myself.addClass("show-comment");
        });
    }
}