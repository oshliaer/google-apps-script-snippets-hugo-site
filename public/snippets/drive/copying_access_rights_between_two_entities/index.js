/* global BatchRequest */
/* exported run */

/** @constant {string} FROM_ID */
const FROM_ID = '{{FROM_ID}}';

/** @constant {string} TO_ID */
const TO_ID = '{{TO_ID}}';

/**
 * Runs the example
 * @ignore
 */
function run() {
  console.log(copyingAccessRightsBetweenTwoEntities_(FROM_ID, TO_ID));
}

/**
 * Copying access rights between two entities
 * @param {string} fromId an entity id
 * @param {string} toId an entity id
 * @return {void}
 */
function copyingAccessRightsBetweenTwoEntities_(fromId, toId) {
  const file = Drive.Files.get(fromId, { fields: 'permissions' });
  const fields = file.permissions
    .map((permission) => {
      return {
        emailAddress: permission.emailAddress,
        type: permission.type,
        role: permission.role,
      };
    })
    .filter((item) => item.role !== 'owner');
  const requests = fields.map((requestBody) => ({
    method: 'POST',
    endpoint: `https://www.googleapis.com/drive/v3/files/${toId}/permissions`,
    requestBody,
  }));
  const res = BatchRequest.EDo({
    batchPath: 'batch/drive/v3',
    requests: requests,
  });
  return res;
}
