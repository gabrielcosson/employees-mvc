package com.gabrielnieves.developertest.models.dto;

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
    private List<DataDTO> data;
    private String message;
}
