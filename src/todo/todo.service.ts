import { Injectable } from '@nestjs/common';
import CreateTaskDto from "./dto/create-task.dto";
import TaskEntity from "../db/task.entity";
import CategoryEntity from "../db/category.entity";
import LabelEntity from "../db/label.entity";
import ItemEntity from "../db/item.entity";
import CreateCategoryDto from "./dto/create-category.dto";
import CreateItemDto from "./dto/create-item.dto";
import CreateLabelDto from "./dto/create-label.dto";

@Injectable()
@Injectable()
export class TodoService {
    // Task
    async addTask(taskDetails: CreateTaskDto): Promise<TaskEntity> {
        const taskEntity: TaskEntity = TaskEntity.create();
        const { title, categoryID, items, labelsIDs } = taskDetails;
        taskEntity.title = title;
        taskEntity.category = await CategoryEntity.findOne(categoryID);
        taskEntity.labels = [];
        for (let i = 0; i < labelsIDs.length; i++) {
            const label = await LabelEntity.findOne(labelsIDs[i]);
            taskEntity.labels.push(label);
        }
        await taskEntity.save();
        for (let i = 0; i < items.length; i++) {
            const item = new ItemEntity();
            item.task = taskEntity;
            item.text = items[i];
            await item.save();
        }
        return taskEntity;
    }

    async getAllTasks(): Promise<TaskEntity[]> {
        return await TaskEntity.find();
    }

    async deleteTask(taskID: number): Promise<TaskEntity> {
        const task = await TaskEntity.findOne(taskID);
        await task.remove();
        return task;
    }

    // Category
    async addCategory(categoryDetails: CreateCategoryDto): Promise<CategoryEntity> {
        const categoryEntity: CategoryEntity = CategoryEntity.create();
        categoryEntity.name = categoryDetails.name;
        categoryEntity.tasks = [];
        await CategoryEntity.save(categoryEntity);
        return categoryEntity;
    }

    async getAllCategories(): Promise<CategoryEntity[]> {
        return await CategoryEntity.find();
    }

    // Item
    async addItem(itemDetails: CreateItemDto): Promise<ItemEntity> {
        const item = new ItemEntity();
        item.text = itemDetails.text;
        item.task = await TaskEntity.findOne(itemDetails.taskID);
        await item.save();
        return item;
    }

    async getAllItems(): Promise<ItemEntity[]> {
        return ItemEntity.find();
    }

    async deleteItem(itemID: number): Promise<ItemEntity> {
        const item = await ItemEntity.findOne(itemID);
        await item.remove();
        return item;
    }

    async updateItem(itemID: number, itemDetails: CreateItemDto): Promise<ItemEntity> {
        const item = await ItemEntity.findOne(itemID)
        item.text = itemDetails.text;
        item.task = await TaskEntity.findOne(itemDetails.taskID);
        await item.save()
        return item;
    }

    // Label
    async insertLabel(labelDetails: CreateLabelDto): Promise<LabelEntity> {
        const labelEntity: LabelEntity = LabelEntity.create();
        labelEntity.name = labelDetails.name;
        await LabelEntity.save(labelEntity);
        return labelEntity;
    }

    async getAllLabels(): Promise<LabelEntity[]> {
        return await LabelEntity.find();
    }

    async deleteLabel(labelID: number): Promise<LabelEntity> {
        const label = await LabelEntity.findOne(labelID);
        await label.remove();
        return label;
    }

}
