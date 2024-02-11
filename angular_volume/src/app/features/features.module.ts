import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChangeImageDirective } from './components/profile/components/profile-image/change-image.directive';
import { FriendsComponent } from './components/friends/friends.component';
import { FormsModule } from '@angular/forms';
import { FriendCardComponent } from './components/friends/components/friend-card/friend-card.component';
import { RequestCardComponent } from './components/friends/components/request-card/request-card.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { TwoFactorAuthComponent } from './components/profile/components/two-factor-auth/two-factor-auth.component';
import { UserButtonsComponent } from './components/profile/components/user-buttons/user-buttons.component';
import { ProfileImageComponent } from './components/profile/components/profile-image/profile-image.component';
import { SharedModule } from '../shared/shared.module';
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/chat/components/message/message.component';
import { ChatUserComponent } from './components/chat/components/chat-user/chat-user.component';
import { GameTileComponent } from './components/profile/components/game-tile/game-tile.component';
import { NewChannelComponent } from './components/chat/components/new-channel/new-channel.component';
import { UserListComponent } from './components/chat/components/user-list/user-list.component';
import { ModSectionComponent } from './components/chat/components/mod-section/mod-section.component';
import { PasswordComponent } from './components/chat/components/password/password.component';
import { ChangePasswordComponent } from './components/chat/components/mod-section/components/change-password/change-password.component';
import { LeaveChannelComponent } from './components/chat/components/leave-channel/leave-channel.component';
import { AddUserComponent } from './components/chat/components/mod-section/components/add-user/add-user.component';
import { MatchHistoryComponent } from './components/profile/components/match-history/match-history.component';
import { ChatProfileImageComponent } from './components/chat/components/chat-profile/profile-image.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    FriendsComponent,
    FriendCardComponent,
    RequestCardComponent,
    LeaderboardComponent,
    TwoFactorAuthComponent,
    UserButtonsComponent,
    ProfileImageComponent,
	  MatchHistoryComponent,
    ChangeImageDirective,
    ChatComponent,
    MessageComponent,
    ChatUserComponent,
    GameTileComponent,
    NewChannelComponent,
    ModSectionComponent,
    UserListComponent,
    PasswordComponent,
    AddUserComponent,
    LeaveChannelComponent,
    ChatProfileImageComponent,
    ChangePasswordComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeaturesRoutingModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule, 
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  exports: [ProfileImageComponent],
})
export class FeaturesModule {}
