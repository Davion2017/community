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
            if (response.code === 200){
                $("#comment-section").hide();
            }else {
                if (response.code === 2003) {
                    var isAccepted = confirm(response.message);
                    if(isAccepted){
                        window.open("https://github.com/login/oauth/authorize?client_id=cee8aa31037deae13bc8&redirect_uri=http://127.0.0.1:8080/callback&scope=user&state=1");
                        window.localStorage.setItem("closable", "true");
                    }
                }else {
                    alert(response.message);
                }
            }
        },
        dataType: "json"
    })
}