export const run = () => {
  const shell = new ActiveXObject('WScript.Shell')
     shell.run('http://www.google.com')
  console.log('ran shell')
 }