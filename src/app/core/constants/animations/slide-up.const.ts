import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideUpAnimation =
  trigger('routeAnimations', [

    transition('* => *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ top: '-100vh' })
      ]),
      query(':leave', animateChild(),{ optional: true }),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ top: '100vh' }))
        ],{ optional: true }),
        query(':enter', [
          animate('300ms ease-out', style({ top: '0' }))
        ]),
      ]),
    ]),

  ]);

  // transition('* => new', [
  //   style({ opacity:0,transform: 'translateY(100%)' }),
  //     animate(200)
  // ]),