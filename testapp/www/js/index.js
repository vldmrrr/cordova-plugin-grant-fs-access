document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
  console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
  document.getElementById('deviceready').classList.add('ready');

  GrantFsAccess.getDirectory(
    "",
    url => {
      console.log(url);
      window.resolveLocalFileSystemURL(
        url,
        d=>console.log(d),
        err=>console.log(err)
      )
    }
  );

}
