const { defineConfig } = require("cypress")
const fs = require('fs')
const pdf = require('pdf-parse')
const path = require('path')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task',
        {
          readPdf(pdfPath) {
            return new Promise((resolve) => {
              const filePath = path.resolve(pdfPath)
              const dataBuffer = fs.readFileSync(filePath)
              pdf(dataBuffer).then(function (data) {
                resolve(data)
              })
            })
          }
        })
    },
  },
});
