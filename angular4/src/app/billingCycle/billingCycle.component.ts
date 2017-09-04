import { Component, Input  } from '@angular/core';
import { Observable } from 'rxjs'

import { BillingCycleService } from './billingCycle.service'
import { BillingCycle } from './billingCycle.model'


@Component({
  selector: 'billingCycle',
  templateUrl: './billingCycle.component.html'
})
export class BillingCycleComponent {
  @Input() billingCycle: BillingCycle[]
  
  //Injeção de pendencia do serviço
  constructor(private billingCycleService: BillingCycleService){ }

  ngOnInit() {
    this.getAll()
  }

  //pega os dados mapeado em json e faz um subscribe 
  getAll(): void {
    this.billingCycleService.getBillingCycles()
      //subscribe pega a resposta em json e atribui ao input usado no component html
      .subscribe( res => this.billingCycle = res )
  }
}
