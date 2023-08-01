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
    private String name;
    private float salary;
    private int age;
    private String image;
    private float annual_salary;
}
