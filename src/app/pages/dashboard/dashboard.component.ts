import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators' ;
import { SolarData } from '../../@core/data/solar';
import {GetDashboardInterface} from "../../services/employeeUserInterface";
import {ActivatedRoute} from "@angular/router";
import {NbTokenStorage} from "@nebular/auth";


interface CardSettings {
  title: string;
  iconClass: string;
  count: number;
  type: string;
}

@Component({
  selector: 'ngx-dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent implements OnDestroy, OnInit {

  private alive = true;

  solarValue: number;
  statusCards: string;

  dashboardData: GetDashboardInterface;
  lightCard: CardSettings;
  rollerShadesCard: CardSettings;
  wirelessAudioCard: CardSettings;
  coffeeMakerCard: CardSettings;

  commonStatusCardsSet: CardSettings[];

  statusCardsByThemes: {
    default: CardSettings[];
    cosmic: CardSettings[];
    corporate: CardSettings[];
    dark: CardSettings[];
  };

  constructor(private themeService: NbThemeService,
              private solarService: SolarData,
              private route: ActivatedRoute) {
    this.dashboardData = this.route.snapshot.data['dashboardData'];
    this.lightCard = {
      title: '컴퓨터',
      iconClass: 'fa fa-laptop',
      count: this.dashboardData['computer_count'],
      type: 'primary',
    };
    this.rollerShadesCard = {
      title: '보안장비(MiQii)',
      iconClass: 'fas fa-shield-alt',
      count: this.dashboardData['device_count'],
      type: 'success',
    };
    this.wirelessAudioCard = {
      title: '허용된 컴퓨터',
      iconClass: 'fas fa-check-circle',
      count: this.dashboardData['usable_computer_count'],
      type: 'info',
    };
    this.coffeeMakerCard = {
      title: '최근 이상탐지',
      iconClass: 'fa fa-exclamation',
      count: this.dashboardData['recent_event_count'],
      type: 'warning',
    };

    this.commonStatusCardsSet = [
      this.lightCard,
      this.rollerShadesCard,
      this.wirelessAudioCard,
      this.coffeeMakerCard,
    ];

    this.statusCardsByThemes = {
      default: this.commonStatusCardsSet,
      cosmic: this.commonStatusCardsSet,
      corporate: [
        {
          ...this.lightCard,
          type: 'warning',
        },
        {
          ...this.rollerShadesCard,
          type: 'primary',
        },
        {
          ...this.wirelessAudioCard,
          type: 'danger',
        },
        {
          ...this.coffeeMakerCard,
          type: 'info',
        },
      ],
      dark: this.commonStatusCardsSet,
    };

    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.statusCards = this.statusCardsByThemes[theme.name];
    });

    this.solarService.getSolarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.solarValue = data;
      });
  }

  ngOnInit(): void {

    this.commonStatusCardsSet = [
      this.lightCard,
      this.rollerShadesCard,
      this.wirelessAudioCard,
      this.coffeeMakerCard,
    ];

    this.statusCardsByThemes = {
      default: this.commonStatusCardsSet,
      cosmic: this.commonStatusCardsSet,
      corporate: [
        {
          ...this.lightCard,
          type: 'warning',
        },
        {
          ...this.rollerShadesCard,
          type: 'primary',
        },
        {
          ...this.wirelessAudioCard,
          type: 'danger',
        },
        {
          ...this.coffeeMakerCard,
          type: 'info',
        },
      ],
      dark: this.commonStatusCardsSet,
    };
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
