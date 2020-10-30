retrieveUser('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Zjk0MGRiZDAxYmZkNjAwMTc3ZTI1NTUiLCJpYXQiOjE2MDM1NTM5MDksImV4cCI6MTYwMzU1NzUwOX0.vLlYWqV1QBX-zKiz4gCy2GwVtWao6J4JCawUsiFcNE4', function(error, user) {
    console.log('DEMO retriveUser()')

    if (error) console.error(error)
    else console.log(user)
}) 