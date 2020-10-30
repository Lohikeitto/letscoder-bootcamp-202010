retrieveAllUsers('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI1Zjk1OWE5Yzk1ZGUxODAwMTcxYmI0NDAiLCJpYXQiOjE2MDM2NDQyMjAsImV4cCI6MTYwMzY0NzgyMH0.lyguJoxHPfaol2S9OL-IMB9LHxrlYPG4TbHf02JnQWA', function(error, users) {
    console.log('DEMO retriveAllUsers()')

    if (error) console.error(error)
    else console.log(users)
}) 