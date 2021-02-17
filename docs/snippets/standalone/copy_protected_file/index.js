/**
 * @file Copy a shared file with copy protection
 */

const FILE_ID = '';

/**
 *
 */
function run() {
  DriveApp.getFileById(FILE_ID).makeCopy();
}
