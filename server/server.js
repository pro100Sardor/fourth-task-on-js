const express = require('express')

// const users = require('./data.js')

const server = express()

const users = [
  {id: 1, username: 'harun', firstName: 'Horun', lastName: 'Najimov', gender: 'Erkak', age: 21, status: 'businessman'},
  {id: 2, username: 'najmudden', firstName: 'Najmiddin', lastName: 'Najimov', gender: 'Erkak', age: 19, status: 'student'},
  {id: 3, username: 'suleiman', firstName: 'Sulaymon', lastName: 'Najimov', gender: 'Erkak', age: 16, status: 'schoolboy'},
  {id: 4, username: 'yahyo', firstName: 'Yahyo', lastName: 'Najimov', gender: 'Erkak', age: 14, status: 'schoolboy'},
  {id: 5, username: 'hafsa', firstName: 'Hafsa', lastName: 'Najimova', gender: 'Ayol', age: 12, status: 'schoolgirl'},
  {id: 6, username: 'Muhammadxon', firstName: 'Muhammadxon', lastName: 'Najimov', gender: 'Erkak', age: 25, status: 'software inginer, teacher'},
  {id: 7, username: 'Muhammadjavohir', firstName: 'Muhammadjavohir', lastName: 'Suratov', gender: 'Erkak', age: 26, status: 'software inginer, teacher'},
  {id: 8, username: 'MuhammadHusayn', firstName: 'MuhammadHusayn', lastName: 'Olimjonov', gender: 'Erkak', age: 23, status: 'software inginer, teacher'},
  {id: 9, username: 'ali', firstName: 'Ali', lastName: 'Zairov', gender: 'Erkak', age: 25, status: 'software inginer, teacher'},
  {id: 10, username: 'Rasul', firstName: 'Rasul', lastName: 'Ismoilov', gender: 'Erkak', age: 20, status: 'software inginer'},
  {id: 11, username: 'qodir', firstName: 'Qodir', lastName: 'Bozorov', gender: 'Erkak', age: 17, status: 'software inginer'},
  {id: 12, username: 'abdulatifxon', firstName: 'Abdulatifxon', lastName: 'Anvarxonov', gender: 'Erkak', age: 20, status: 'software inginer'},
]

server.get('/:username', (req, res) => {

  const requestedUser = req.params.username

  const userResult = users.find(function finder (user) {
      return user.username === requestedUser
  })
  res.send(userResult)
})

server.listen(4000, () => console.log('Server ready at http://localhost:4000'))