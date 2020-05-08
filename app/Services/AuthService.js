'use strict';

const AccessForbiddenException = use('App/Exceptions/AccessForbiddenException');
const ResourceNotFoundException = use('App/Exceptions/ResourceNotFoundException');

class AuthService {
    checkPerms(resource, user) {
        if (!resource) {
            throw new ResourceNotFoundException();
        }

        if (resource.user_id !== user.id) {
            throw new AccessForbiddenException();
        }
    }
}

module.exports = new AuthService();
