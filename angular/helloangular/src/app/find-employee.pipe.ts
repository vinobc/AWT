import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findEmployee'
})
export class FindEmployeePipe implements PipeTransform {

  transform(data_2b_transformed, modifier): any {
    return data_2b_transformed.filter(eachEmp => {
      return (
        eachEmp['name'].toLowerCase().includes(modifier.toLowerCase()) || 
        eachEmp['desig'].toLowerCase().includes(modifier.toLowerCase()) || 
        eachEmp['dept'].toLowerCase().includes(modifier.toLowerCase()) 
    )
    });
  }

}
