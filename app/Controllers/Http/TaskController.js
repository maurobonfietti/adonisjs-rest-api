'use strict';

const Project = use('App/Models/Project');
const Task = use('App/Models/Task');
const AuthService = use('App/Services/AuthService');
const ResourceNotFoundException = use('App/Exceptions/ResourceNotFoundException');

class TaskController {
    async index( { auth, request, params }) {
        const user = await auth.getUser();
        const {id} = params;
        const project = await Project.find(id);
        AuthService.checkPerms(project, user);

        return await project.task().fetch();
    }

    async create( { auth, request, params }) {
        const user = await auth.getUser();
        const {description} = request.all();
        const {id} = params;
        const project = await Project.find(id);
        AuthService.checkPerms(project, user);
        const task = new Task();
        task.fill({
            description
        });
        await project.task().save(task);

        return task;
    }

    async update( { auth, params, request }) {
        const user = await auth.getUser();
        const {id, taskId} = params;
        const project = await Project.find(id);
        AuthService.checkPerms(project, user);
        const task = await Task.find(taskId);
        if (!task) {
            throw new ResourceNotFoundException();
        }
        if (project.id !== task.project_id) {
            throw new ResourceNotFoundException();
        }
        AuthService.checkPerms(project, user);
        task.merge(request.only([
            'description',
            'status'
        ]));
        await task.save();

        return task;
    }

    async destroy( { auth, params }) {
        const user = await auth.getUser();
        const {id, taskId} = params;
        const project = await Project.find(id);
        AuthService.checkPerms(project, user);
        const task = await Task.find(taskId);
        if (!task) {
            throw new ResourceNotFoundException();
        }
        if (project.id !== task.project_id) {
            throw new ResourceNotFoundException();
        }
        await task.delete();
    }
}

module.exports = TaskController;
