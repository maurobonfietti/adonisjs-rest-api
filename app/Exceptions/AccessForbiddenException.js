'use strict';

const {LogicalException} = require('@adonisjs/generic-exceptions');

class AccessForbiddenException extends LogicalException {
    handle(error, { response }) {
        return response.status(403).json({
            error: "Forbidden...!!"
        });
    }
}

module.exports = AccessForbiddenException;
