package com.example.demo.dto;

import lombok.Data;

/**
 * Author: Davion
 * Date: 2019-10-5
 * Description:
 */
@Data
public class QuestionQueryDTO {
    private String search;
    private Integer page;
    private Integer size;
}
