import { Component, OnInit } from '@angular/core';
import { SitePrefs, Post } from '../../models';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  title = "Dollop";
  prefs: SitePrefs = <SitePrefs>{ HeaderColor: '#eeeeee', HeaderBackground: '#460046', HeaderText: 'Dollop' };

  constructor() { }

  ngOnInit() { }

}
