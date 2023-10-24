import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { User } from '@prisma/client';
import { GetUser } from 'src/users/users.decorator';
import { UsersService } from 'src/users/users.service';

@Controller('friends')
@ApiTags('friends')
export class FriendsController {
  constructor(
    private friendsService: FriendsService,
    private usersService: UsersService,
  ) {}

  @Post('invite')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse()
  async inviteFriend(
    @GetUser() user: User,
    @Body('friend') friendName: string,
  ) {
    this.friendsService.inviteFriend(user.id, friendName);
    return `Friend request correctly sent to ${friendName}`;
  }

  @Patch('accept')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse()
  async acceptFriendRequest(
    @GetUser() user: User,
    @Body('friend') friendName: string,
  ) {
    this.friendsService.acceptFriendRequest(user.id, friendName);
    return `Now you and ${friendName} are friends`;
  }

  @Post('reject')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse()
  async rejectFriendRequest(
    @GetUser() user: User,
    @Body('friend') friendName: string,
  ) {
    this.friendsService.rejectFriendRequest(user.id, friendName);
    return `Friend request from ${friendName} correctly rejected`;
  }

  @Post('delete')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse()
  async deleteFriend(
    @GetUser() user: User,
    @Body('friend') friendName: string,
  ) {
    const friend = await this.usersService.findUserByName(friendName);
    this.friendsService.removeFriendship(user.id, friend.id);
    return `You removed ${friendName} from your friends`;
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse()
  async getFriends(@GetUser() user: User): Promise<any> {
    return await this.friendsService.getFriends(user.id);
  }

  @Get('requests/received')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse()
  async getReceivedFriendRequests(@GetUser() user: User) {
    return await this.friendsService.getReceivedFriendRequests(user.id);
  }

  @Get('requests/sent')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse()
  async getSentFriendRequests(@GetUser() user: User) {
    return await this.friendsService.getSentFriendRequests(user.id);
  }

  @Post('block')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse()
  async blockUser(@GetUser() user: User, @Body('toBlock') toBlock: string) {
    const blocked = await this.usersService.findUserByName(toBlock);
    this.friendsService.blockUser(user.id, blocked.id);
    return `${toBlock} has been blocked`;
  }

  @Post('unblock')
  @UseGuards(JwtAuthGuard)
  @ApiOkResponse()
  async unblockUser(
    @GetUser() user: User,
    @Body('toUnblock') toUnblock: string,
  ) {
    const blocked = await this.usersService.findUserByName(toUnblock);
    this.friendsService.unblockUser(user.id, blocked.id);
    return `${toUnblock} has been unblocked`;
  }
}
