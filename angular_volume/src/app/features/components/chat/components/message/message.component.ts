import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../../../../../core/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { InvitesService } from 'src/app/core/services/game-invite.service';
import { Observable, interval, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  @Input() message: any;
  username!: string;
  currentUser!: boolean;
  otherUser!: boolean;
  isModerator!: boolean;
  currentTime$: Observable<string>;
  private subscription: Subscription;

  constructor(
    private readonly userService: UserService,
    private readonly router: Router,
    private readonly inviteService: InvitesService) {
    this.currentUser = false;
    this.otherUser = false;
    this.isModerator = false;
    this.subscription = new Subscription();
    this.currentTime$ = new Observable<string>();
  }

  ngOnInit() {
    this.currentTime$ = interval(1000).pipe(
      map(() => {
        const currentDate = new Date();
        currentDate.setTime(currentDate.getTime() - 10000); // Aggiungi 10.000 ms
        return currentDate.toISOString();
      })
    );
    this.subscription = this.currentTime$.subscribe(value => {
      console.log('Current Time:', value);
    });
    if (this.message.isModer == true) {
      this.isModerator = true;
      return;
    }
    this.username = this.message.user;
    if (this.username !== this.userService.getUser()) {
      this.currentUser = false;
      this.otherUser = true;
    } else {
      this.currentUser = true;
      this.otherUser = false;
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  async OutdatedStatus() {
    console.log(this.currentTime$, this.message.time);
    if (this.currentTime$ > this.message.time) {
      this.message.isInvite = 'OUTDATED';
      return true;
    }
    return false;
  }


  redirectToGame() {
  this.router.navigate(['/transcendence/pong'], {queryParams: {invited: this.message.msg}})
	if (!this.currentUser)
		this.inviteService.acceptInvite(this.username);
  }
}
