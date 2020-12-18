import {Body, Controller, Delete, Get, Post, Put, Query} from '@nestjs/common';
import {TodoService} from "./todo.service";
import {ApiBearerAuth, ApiQuery} from "@nestjs/swagger";
import CreateTaskDto from "./dto/create-task.dto";
import CreateCategoryDto from "./dto/create-category.dto";
import CreateItemDto from "./dto/create-item.dto";
import ItemEntity from "../db/item.entity";
import CreateLabelDto from "./dto/create-label.dto";
import LabelEntity from "../db/label.entity";
import TaskEntity from "../db/task.entity";

@Controller('todo')
export class TodoController {
    constructor(
        private readonly todoServices: TodoService
    ) {}

    // Task
    @ApiBearerAuth()
    @Post('task')
    insertTask(@Body() task: CreateTaskDto) {
        return this.todoServices.addTask(task);
    }

    @ApiBearerAuth()
    @Get('task')
    getAllTasks() {
        return this.todoServices.getAllTasks();
    }

    @ApiBearerAuth()
    @ApiQuery({
        name: 'taskId',
        required: true,
        type: Number
    })
    @Delete('task')
    deleteTask(@Query('taskId') taskId): Promise<TaskEntity> {
        return this.todoServices.deleteTask(taskId);
    }

    // Category
    @ApiBearerAuth()
    @Post('category')
    insertCategory(@Body() category: CreateCategoryDto) {
        return this.todoServices.addCategory(category);
    }

    @ApiBearerAuth()
    @Get('category')
    getAllCategories() {
        return this.todoServices.getAllCategories();
    }

    //Item
    @ApiBearerAuth()
    @Post('item')
    insertItem(@Body() item: CreateItemDto) {
        return this.todoServices.addItem(item);
    }

    @ApiBearerAuth()
    @Get('item')
    getAllItems() {
        return this.todoServices.getAllItems();
    }

    @ApiBearerAuth()
    @ApiQuery({
        name: 'itemID',
        required: true,
        type: Number,
    })
    @Delete('item')
    deleteItem(@Query('itemId') itemId): Promise<ItemEntity> {
        return this.todoServices.deleteItem(itemId);
    }

    @ApiBearerAuth()
    @ApiQuery({
        name: 'itemId',
        required: true,
        type: Number,
    })
    @Put('item')
    updateItem(@Query('itemId') itemId, @Body() item: CreateItemDto): Promise<ItemEntity> {
        return this.todoServices.updateItem(itemId, item);
    }

    // Label
    @ApiBearerAuth()
    @Post('label')
    insertLabel(@Body() label: CreateLabelDto) {
        return this.todoServices.insertLabel(label);
    }

    @ApiBearerAuth()
    @Get('label')
    getAllLabels() {
        return this.todoServices.getAllLabels();
    }

    @ApiBearerAuth()
    @ApiQuery({
        name: 'labelId',
        required: true,
        type: Number,
    })
    @Delete('label')
    deleteLabel(@Query('labelId') labelId): Promise<LabelEntity> {
        return this.todoServices.deleteLabel(labelId);
    }

}