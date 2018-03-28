import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from './message.service';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroService: fetched heroes');
    return Observable.of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return Observable.of(HEROES.find(hero => hero.id === id));
  }

  constructor(private messageService: MessageService) { }

}
