;(function() {
  const baseUrl = 'https://api.frontendmasters.com/v1/kabuki/courses/'
  let courseName = 'react'
  const url = baseUrl + courseName
  //add comments
  //add more comments

  fetch(url)
    .then(response => response.json())
    .then(function(data) {
      let sourceUrls = data.sourseBase
      return sourceUrls.map(function(sourceUrl) {
        console.log(sourceUrl)
      })
    })
})()
