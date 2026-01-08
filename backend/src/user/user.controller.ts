import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiQuery,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserFilterDto } from './dtos/user-filter.dto';
import { Auth } from 'src/auth/decorator/auth.decorator';
import { AuthType } from 'src/auth/enums/auth-type.enum';
import { ActiveUser } from 'src/auth/decorator/active-user.decorator';
import type { ActiveUserData } from 'src/auth/interfaces/active-user-data.interface';
import { Permissions } from 'src/auth/decorator/permissions.decorator';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('profile')
  @ApiOperation({ summary: 'Get current user profile' })
  @ApiResponse({
    status: 200,
    description: 'User profile retrieved successfully',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  public async getProfile(@ActiveUser() user: ActiveUserData) {
    return this.userService.findOne(user.sub);
  }

  @Get('all')
  @ApiOperation({ summary: 'Get all users with filtering' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'limit', required: false, type: Number })
  @ApiQuery({ name: 'search', required: false, type: String })
  @ApiResponse({ status: 200, description: 'Users retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - requires users:view permission',
  })
  @Permissions('users:view')
  public async getAllUsers(@Query() filterDto: UserFilterDto) {
    return this.userService.findAll(filterDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiParam({ name: 'id', type: 'number', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - requires users:view permission',
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @Permissions('users:view')
  @UseInterceptors(ClassSerializerInterceptor)
  public async getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update user completely' })
  @ApiParam({ name: 'id', type: 'number', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User updated successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - requires users:update permission or own profile',
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @Permissions('users:update')
  @UseInterceptors(ClassSerializerInterceptor)
  public async updateUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
    @ActiveUser() user: ActiveUserData,
  ) {
    // Users can only update their own profile unless they have admin permission
    if (id !== user.sub) {
      throw new Error('Forbidden: You can only update your own profile');
    }
    return this.userService.updateUser(id, updateUserDto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user partially' })
  @ApiParam({ name: 'id', type: 'number', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User updated successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - requires users:update permission or own profile',
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @Permissions('users:update')
  @UseInterceptors(ClassSerializerInterceptor)
  public async patchUser(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateUserDto: UpdateUserDto,
    @ActiveUser() user: ActiveUserData,
  ) {
    // Users can only update their own profile unless they have admin permission
    if (id !== user.sub) {
      throw new Error('Forbidden: You can only update your own profile');
    }
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user account' })
  @ApiParam({ name: 'id', type: 'number', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User deleted successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - requires users:delete permission or own account',
  })
  @ApiResponse({ status: 404, description: 'User not found' })
  @Permissions('users:delete')
  @HttpCode(HttpStatus.OK)
  public async deleteUser(
    @Param('id', ParseIntPipe) id: number,
    @ActiveUser() user: ActiveUserData,
  ) {
    // Users can only delete their own account unless they have admin permission
    if (id !== user.sub) {
      throw new Error('Forbidden: You can only delete your own account');
    }
    return this.userService.deleteUser(id);
  }
}
