package com.gabrielnieves.developertest.controllers;

import com.gabrielnieves.developertest.models.dto.EmployeeDTO;
import com.gabrielnieves.developertest.models.dto.EmployeesDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping()
public class EmployeeController {
    private final RestTemplate restTemplate;

    @Autowired
    public EmployeeController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/employees")
    public EmployeesDTO getEmployees(){
        EmployeesDTO employees = getAllEmployees();
        return employees;
    }

    @GetMapping("/employee/{id}")
    public EmployeeDTO releasePokemon(@PathVariable(name = "id") int id) {
        EmployeeDTO employees = getEmployeeById(id);
        return employees;
    }

    public EmployeeDTO getEmployeeById(int employeeId){
        String url = "https://dummy.restapiexample.com/api/v1/employee/"+employeeId;
        return restTemplate.getForObject(url, EmployeeDTO.class);
    }

    public EmployeesDTO getAllEmployees(){
        String url = "https://dummy.restapiexample.com/api/v1/employees";
        return restTemplate.getForObject(url, EmployeesDTO.class);
    }
}
