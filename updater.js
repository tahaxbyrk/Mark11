// This file contains the logic for the application's automatic update mechanism.
const { autoUpdater } = require('electron-updater');
const { dialog, app } = require('electron');
const log = require('electron-log');

autoUpdater.logger = log;
autoUpdater.logger.transports.file.level = 'info';
autoUpdater.autoDownload = true;
autoUpdater.autoInstallOnAppQuit = true;

autoUpdater.on('update-downloaded', async () => {
  const { response } = await dialog.showMessageBox({
    type: 'info',
    title: 'Update Ready',
    message: 'The new version has been downloaded. You can update it by restarting the application.',
    buttons: ['Restart now', 'Later'],
    defaultId: 0,
    cancelId: 1,
  });

  if (response === 0) {
    autoUpdater.quitAndInstall(true, true);
  }
});

autoUpdater.on('error', (err) => {
  log.error('Update error:', err.message);
});

function initAutoUpdater(delay = 3000) {
  if (!app.isPackaged) return;
  setTimeout(() => autoUpdater.checkForUpdatesAndNotify(), delay);
}

module.exports = { initAutoUpdater };
