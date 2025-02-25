'use strict';

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Task extends Model {
    projects() {
        return this.belongsTo('App/Models/Project')
    }
}

module.exports = Task;
