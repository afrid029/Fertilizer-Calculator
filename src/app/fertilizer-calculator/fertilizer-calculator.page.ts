import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fertilizer-calculator',
  templateUrl: './fertilizer-calculator.page.html',
  styleUrls: ['./fertilizer-calculator.page.scss'],
})
export class FertilizerCalculatorPage implements OnInit {

  crop: any;


  area: number;
  type: any = null;
  buttonDisabled: boolean = true;

  nitrogen:any;
  posporus:any;
  pottasium:any;
  zinc:any;

  fert = {
    'Nitrogen' : null,
    'Posperous' : null,
    'Potassium' : null,
    'Zinc' : null
  }

  calculated:boolean = false;
  
  constructor() {
    this.crop = 'Ginger';
    console.log(this.crop);

    
   }

  ngOnInit() {
  }

  validate(){
    
    if (this.area > 0 && this.type !== null) {
      this.buttonDisabled = false;
    } else {
      this.buttonDisabled = true;
    }
  }

  Calculate(){
    if(this.crop === "Onion"){
      this.OnionFertCalculator();
    }else if(this.crop === "Carrot"){
      this.CarrotFertCalculator();
    }else if(this.crop === "Ginger"){
      this.GingerFertCalculator();
    }else if(this.crop === "Pottato"){
      this.PottatoFertCalculator();
    }else if(this.crop === "Turmeric"){
      this.TurmericFertCalculator();
    }else if(this.crop === "Paddy"){
      this.PaddyFertCalculator();
    }

    
  }

  OnionFertCalculator(){
    let c_area = 0;
    if(this.type === "hect"){
      c_area = this.area*10000;
      
    }
    if(this.type === "acr"){
      c_area = this.area*4046.86;
    }else{
      c_area = this.area;
    }

    this.fert['Nitrogen'] = (4.5 * c_area).toFixed(2);
    this.fert['Posperous'] = (10 * c_area).toFixed(2);
    this.fert['Potassium'] = (5 * c_area).toFixed(2);

    this.calculated = true;
    
    
  }

  CarrotFertCalculator(){
    let c_area = 0;
    if(this.type === "hect"){
      c_area = this.area*10000;
      
    }
    if(this.type === "acr"){
      c_area = this.area*4046.86;
    }else{
      c_area = this.area;
    }

    this.fert['Nitrogen'] = ((110/0.015) * c_area).toFixed(2);
    this.fert['Posperous'] = ((85/0.015) * c_area).toFixed(2);
    
    this.calculated = true;
  }

  GingerFertCalculator(){
    let c_area = 0;
    if(this.type === "hect"){
      c_area = this.area*10000;
      
    }
    if(this.type === "acr"){
      c_area = this.area*4046.86;
    }else{
      c_area = this.area;
    }

    this.fert['Posperous'] = ((50/7.4322432) * c_area ).toFixed(2);

    this.calculated = true;
  }

  PottatoFertCalculator(){
    let c_area = 0;
    if(this.type === "hect"){
      c_area = this.area*10000;
      
    }
    if(this.type === "acr"){
      c_area = this.area*4046.86;
    }else{
      c_area = this.area;
    }

    this.fert['Nitrogen'] = (16.5 * c_area).toFixed(2);
    this.fert['Posperous'] = (27.5 * c_area).toFixed(2);
    this.fert['Potassium'] = (12.5 * c_area).toFixed(2);

    this.calculated = true;
  }

  TurmericFertCalculator(){
    let c_area = 0;
    if(this.type === "hect"){
      c_area = this.area*10000;
      
    }
    if(this.type === "acr"){
      c_area = this.area*4046.86;
    }else{
      c_area = this.area;
    }

    this.fert['Posperous'] = ((52/7.4322432) * c_area ).toFixed(2);

    this.calculated = true;
  }

  PaddyFertCalculator(){
    let c_area = 0;
    if(this.type === "hect"){
      c_area = this.area*10000;
      
    }
    if(this.type === "acr"){
      c_area = this.area*4046.86;
    }else{
      c_area = this.area;
    }

    this.fert['Nitrogen'] = (0.5 * c_area).toFixed(2);
    this.fert['Posperous'] = (3.5 * c_area).toFixed(2);
    this.fert['Potassium'] = (1.5 * c_area).toFixed(2);
    this.fert['Zinc'] = (0.2 * c_area).toFixed(2);

    this.calculated = true;
  }
}
