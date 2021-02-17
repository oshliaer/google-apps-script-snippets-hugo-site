/* exported run */

/** @constant {string} FILE_ID The File ID */
var FILE_ID = '{{FILE_ID}}';

/** @constant {string} EMAIL The email */
var EMAIL = '{{EMAIL}}';

/**
 * Runs the example
 * @ignore
 */
function run() {
  driveChangeMeRole_(FILE_ID, EMAIL);
}

/**
 * Downgrade you in the rights from the editor to the viewer
 * @param {string} fileId The file id
 * @param {string} email You can pass your email and downgrade youself
 * @return {void}
 */
function driveChangeMeRole_(fileId, email) {
  var permissionId = Drive.Permissions.getIdForEmail(email);
  var resource = Drive.newPermission();
  resource.role = 'reader';
  /* You can stay as a commenter
  resource.additionalRoles = ['commenter']; */
  Drive.Permissions.update(resource, fileId, permissionId.id);
}
