import { Component, OnInit } from '@angular/core';
import { ColDef,  GridApi, GridReadyEvent} from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { RecruiterService } from './recruiter.service';

@Component({
  selector: 'app-recruiter',
  templateUrl: './recruiter.component.html',
  styleUrls: ['./recruiter.component.scss']
})

export class RecruiterComponent implements OnInit{
  
  private gridApi!: GridApi;
  columnDefs: ColDef[] = [
    { field: 'name', filter: true},
    { field: 'skill', filter: true},
    { field: 'date', type:'dateColumn'}, 
    { field: 'slot time', sortable: true, filter: true}
  ];

  rowData: any[] =[];

  /*rowData = [
    { name: 'Celica', skill: 'java', date: '04/01/2022', 'slot time': '11:00 AM to 12 PM'},
    { name: 'naruto', skill: 'angular', date: '05/01/2022', 'slot time': '11:00 AM to 12 PM' },
    { name: 'goku', skill: 'react', date: '06/01/2022', 'slot time': '11:00 AM to 12 PM' },
    { name: 'luffy', skill: 'c++', date: '07/01/2022', 'slot time': '11:00 AM to 12 PM' },
    { name: 'sasuke', skill: '.Net', date: '08/01/2022', 'slot time': '11:00 AM to 12 PM' },
    { name: 'vegeta', skill: 'javascript', date: '09/01/2022', 'slot time': '11:00 AM to 12 PM' }
  ];
  */
  /*constructor(private http: HttpClient)
  {
    this.rowData = this.http.get<any[]>('../../assets/data/slots.json');
  }
  */
  constructor(private _recruiterService: RecruiterService){}

  ngOnInit(){
    this._recruiterService.getSlots()
      .subscribe(data => this.rowData = data)
  }

  
  public popupParent: HTMLElement = document.body;
    
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

  onBtnExport() {
    this.gridApi.exportDataAsCsv();
  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }
// set background colour on even rows again, this looks bad, should be using CSS classes
}
