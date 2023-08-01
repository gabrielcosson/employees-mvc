package com.gabrielnieves.developertest.models.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DataDTO {
    private int id;
    private String employee_name;
    private float employee_salary;
    private int employee_age;
    private String profile_image;
}
