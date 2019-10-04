package com.example.demo.exception;

public enum  CustomizeErrorCode implements ICustomizeErrorCode {

    QUESTION_NOT_FOUNT(2001, "你找的问题不在了，要不换个试试？"),
    TARGET_PARAM_NOT_FOUNT(2002, "你找的问题不在了，要不换个试试？"),
    NO_LOGIN(2003, "当前操作需要登录，请登录后重试"),
    SYSTEM_ERROR(2004, "服务过载，待会儿再试试！"),
    TYPE_PARAM_WRONG(2005, "评论类型错误或不存在"),
    COMMENT_NOT_FOUND(2006, "回复的评论不存在"),
    COMMENT_IS_EMPTY(2007, "输入内容不能为空"),
    READ_NOTIFICATION_FAIL(2008, "兄弟你这是读别人信息呢？"),
    NOTIFICATION_NOT_FOUND(2009, "消息不翼而飞了？"),
    ;

    private Integer code;
    private String message;

    @Override
    public String getMessage() {
        return message;
    }

    @Override
    public Integer getCode() {
        return code;
    }

    CustomizeErrorCode(Integer code, String message) {
        this.message = message;
        this.code = code;
    }
}
