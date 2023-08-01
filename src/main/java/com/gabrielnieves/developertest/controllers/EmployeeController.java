package com.gabrielnieves.developertest.controllers;

import com.gabrielnieves.developertest.models.Employee;
import com.gabrielnieves.developertest.models.dto.DataDTO;
import com.gabrielnieves.developertest.models.dto.EmployeeDTO;
import com.gabrielnieves.developertest.models.dto.EmployeesDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping()
public class EmployeeController {
    private final RestTemplate restTemplate;

    @Autowired
    private EmployeeService employeeService;

    @Autowired
    public EmployeeController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    @GetMapping("/employees")
    public List<Employee> getEmployees(){
        List<Employee> employees = new ArrayList<>();
        EmployeesDTO employeesDto = employeesAPI();
        for(DataDTO data : employeesDto.getData()){
            employees.add(Employee.builder()
                    .id(data.getId())
                    .name(data.getEmployee_name())
                    .age(data.getEmployee_age())
                    .salary(data.getEmployee_salary())
                    .annual_salary(employeeService.getAnnualSalary(data.getEmployee_salary()))
                    .image(data.getProfile_image())
                    .build());
        }
        return employees;
    }

    @GetMapping("/employee/{id}")
    public Employee getEmployeeById(@PathVariable(name = "id") int id) {
        EmployeeDTO employeeDto = employeeByIdAPI(id);
        Employee employee = Employee.builder()
                .id(employeeDto.getData().getId())
                .name(employeeDto.getData().getEmployee_name())
                .age(employeeDto.getData().getEmployee_age())
                .salary(employeeDto.getData().getEmployee_salary())
                .annual_salary(employeeService.getAnnualSalary(employeeDto.getData().getEmployee_salary()))
                .image(employeeDto.getData().getProfile_image())
                .build();
        return employee;
    }

    public EmployeeDTO employeeByIdAPI(int employeeId){
        String url = "https://dummy.restapiexample.com/api/v1/employee/"+employeeId;
        return restTemplate.getForObject(url, EmployeeDTO.class);
    }

    public EmployeesDTO employeesAPI(){
        String url = "https://dummy.restapiexample.com/api/v1/employees";
        return restTemplate.getForObject(url, EmployeesDTO.class);
    }
}
