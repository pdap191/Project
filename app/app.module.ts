import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { MenuComponent } from './menu/menu.component';
import { FeedComponent } from './feed/feed.component';

import { UserService } from './user.service';
import { FeedService } from './feed.service';

import {FriendsComponent } from './friends/friends.component';
import {MessagesComponent } from './messages/messages.component';
import { routing, appRoutingProviders } from './app.routing';
import { FriendComponent } from './friend/friend.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { IconMenuComponent } from './icon-menu/icon-menu.component';
import { ClockComponent } from './clock/clock.component';

import { ClockService } from './clock.service';
import { CommandNavigatorComponent } from './command-navigator/command-navigator.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    MenuComponent,
    FeedComponent,
    FriendsComponent,
    MessagesComponent,
    FriendComponent,
    HeaderMenuComponent,
    IconMenuComponent,
    ClockComponent,
    CommandNavigatorComponent
  ],
  imports: [
    BrowserModule, FormsModule, routing
  ],
  providers: [UserService, FeedService, appRoutingProviders, ClockService],
  bootstrap: [AppComponent]
})
export class AppModule { }
