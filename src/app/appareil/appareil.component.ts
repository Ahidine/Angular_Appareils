import { Component,Input, OnInit } from '@angular/core';
import { AppareilService } from '../service/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
	@Input() appareilName: string;
	@Input() appareilStatus: string;
  @Input() index: number;
  @Input() id: number;

  constructor(private appareilService : AppareilService) { }

  ngOnInit() {
  }
  getStatus(){
  	return this.appareilStatus;
  }
  On()
  {
    this.appareilService.On(this.index);
  }
  Off()
  {
     this.appareilService.Off(this.index);
  }
  getColor(){
  	if (this.appareilStatus=='eteint') {
  		return 'red';
  	}else if (this.appareilStatus=='Allumer') {
  		return 'green';
  	}
  }

}
