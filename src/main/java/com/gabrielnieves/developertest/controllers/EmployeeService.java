package com.gabrielnieves.developertest.controllers;

import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    public float getAnnualSalary(float salary){
        return salary * 12;
    }
}
