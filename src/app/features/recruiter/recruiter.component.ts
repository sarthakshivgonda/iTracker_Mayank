import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.scss']
})
export class RecruiterComponent {

  columnDefs: ColDef[] = [
    { field: 'name', filter: true},
    { field: 'skill', filter: true},
    { field: 'date', type:'dateColumn'}, 
    { field: 'slot time', sortable: true, filter: true}
  ];

  rowData = [
    { name: 'Celica', skill: 'java', date: '4 january', 'slot time': '11:00 AM to 12 PM'},
    { name: 'Celica1', skill: 'angular', date: '5 january', 'slot time': '11:00 AM to 12 PM' },
    { name: 'Celica2', skill: 'react', date: '6 january', 'slot time': '11:00 AM to 12 PM' }
  ];

  public columnTypes: {
    [key: string]: ColDef;
  } = {
    nonEditableColumn: { editable: false },
    dateColumn: {
      // specify we want to use the date filter
      filter: 'agDateColumnFilter',
      // add extra parameters for the date filter
      filterParams: {
        // provide comparator function
        comparator: (filterLocalDateAtMidnight: Date, cellValue: string) => {
          // In the example application, dates are stored as dd/mm/yyyy
          // We create a Date object for comparison against the filter date
          const dateParts = cellValue.split('/');
          const day = Number(dateParts[0]);
          const month = Number(dateParts[1]) - 1;
          const year = Number(dateParts[2]);
          const cellDate = new Date(year, month, day);
          // Now that both parameters are Date objects, we can compare
          if (cellDate < filterLocalDateAtMidnight) {
            return -1;
          } else if (cellDate > filterLocalDateAtMidnight) {
            return 1;
          } else {
            return 0;
          }
        },
      },
    },
  };
}
