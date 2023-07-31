package com.gabrielnieves.developertest.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Employee {
    private int id;
    private String employee_name;
    private float employee_salary;
    private int employee_age;
    private String profile_image;
}
