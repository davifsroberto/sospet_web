import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ad-create',
  templateUrl: './ad-create.component.html',
  styleUrls: ['./ad-create.component.scss'],
})
export class AdCreateComponent implements OnInit {
  adTypeParam: string = this.routeAc.snapshot.params['id'];

  constructor(private routeAc: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.checkAdParam();
  }

  private checkAdParam(): void {
    let adType: Array<string> = ['missing', 'found', 'donation'];

    !adType.includes(this.adTypeParam) && this.router.navigate(['/unfound']);
  }
}
