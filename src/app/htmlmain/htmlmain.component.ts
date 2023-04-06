import { Component, ElementRef, Renderer2} from '@angular/core';


@Component({
  selector: 'app-htmlmain',
  templateUrl: './htmlmain.component.html',
  styleUrls: ['./htmlmain.component.css']
})
export class HTMLmainComponent { 
  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  loadScript() {
    const script = this.renderer.createElement('script');
    script.defer = true;
    script.src = 'assets/script.js';
    this.renderer.appendChild(this.elementRef.nativeElement, script);
  }
  ngAfterViewInit() {
    this.loadScript();
  }
  
}

