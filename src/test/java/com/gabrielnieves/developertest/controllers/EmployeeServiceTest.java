package com.gabrielnieves.developertest.controllers;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class EmployeeServiceTest {

    @Test
    void Given_Twelve_Then_OneHundredFortyFour() {
        EmployeeService employeeService = new EmployeeService();
        assertEquals(144, employeeService.getAnnualSalary(12));
    }

    @Test
    void Given_Zero_Then_Zero() {
        EmployeeService employeeService = new EmployeeService();
        assertEquals(0, employeeService.getAnnualSalary(0));
    }

    @Test
    void Given_One_Then_Twelve() {
        EmployeeService employeeService = new EmployeeService();
        assertEquals(12, employeeService.getAnnualSalary(1));
    }

    @Test
    void Given_Two_Then_TwentyFour() {
        EmployeeService employeeService = new EmployeeService();
        assertEquals(24, employeeService.getAnnualSalary(2));
    }

    @Test
    void Given_OneHundred_Then_ThousandTwoHundred() {
        EmployeeService employeeService = new EmployeeService();
        assertEquals(1200, employeeService.getAnnualSalary(100));
    }
}