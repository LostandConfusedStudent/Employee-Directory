import {useEffect, useContext} from "react";
import {Employee} from "../components/Employee";
import axios from "axios";

export function useGet(url){
    const{employees, setEmployees, displayedEmployees, setDisplayedEmployees} = useContext(Employee)
    useEffect(()=> {
        async function getEmployees(){
            try {
                const response = await axios.get(url)
                setEmployees(response.data.results)
                setDisplayedEmployees(response.data.results)
            }
            catch (error) {
                console.log("Error: ", error)
            };
        };
        getEmployees()
    });

    function sortFunc(sort){
        switch(sort){
            case "name":
                sortByName()
                break
            case "age":
                sortByAge()
                break
            default:
                console.log("No match");
        };
    };

    // sorts the employees based on first name.
    function sortByName(){
         employees.sort(function(a,b){
            if(a.name.first < b.name.first){
                return -1;
            }else{
                return 1;
            };
        });
        // You have to spread, because this creates a new variable, instead of just updating the variable. React will not recognize it as an update if you just update the variable.
        setDisplayedEmployees([...employees])
    };

    // sorts the employees based on age.
    function sortByAge(){
        employees.sort(function(a,b){
            return (a.dob.age - b.dob.age)
        });
        setDisplayedEmployees([...employees])
    };

    return {displayedEmployees, sortFunc}
};