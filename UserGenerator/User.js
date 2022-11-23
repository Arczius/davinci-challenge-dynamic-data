"use strict";

class User {
    constructor(
        FirstName,
        LastName,
        BirthYear,
        Gender,
        JobTitle,
    ){
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.BirthYear = BirthYear;
        this.Age = new Date().getFullYear() - BirthYear;
        this.Gender = Gender;
        this.JobTitle = JobTitle;
    }
}