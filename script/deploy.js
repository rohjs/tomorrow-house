const path = require('path')
const fs = require('fs')
const ghpages = require('gh-pages')

const buildDir = path.resolve(__dirname, '../build')

console.log('------------------------')
console.log('Start deploying...')

ghpages.publish(buildDir, function (err) {
  if (err) {
    console.log('😭😭 Failed to deploy')
    return
  }

  fs.rmSync(buildDir, { recursive: true, force: true })
  console.log('🚀🚀🚀 Successfully deployed')
})
