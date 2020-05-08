'use strict';

const {LogicalException} = require('@adonisjs/generic-exceptions');

class ResourceNotFoundException extends LogicalException {
    handle(error, { response }) {
        return response.status(404).json({
            error: "Resource Not Found."
        });
    }
}

module.exports = ResourceNotFoundException;
