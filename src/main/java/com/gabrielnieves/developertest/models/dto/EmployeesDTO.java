package com.gabrielnieves.developertest.models.dto;

import com.gabrielnieves.developertest.models.Employee;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class EmployeesDTO {
    private String status;
    private List<Employee> data;
    private String message;
}
