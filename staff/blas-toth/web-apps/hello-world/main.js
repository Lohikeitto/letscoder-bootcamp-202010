(function () {
    // root 
    var root = document.getElementById('root');

    // title
        var title = mountTitle(function () {
            root.lastChild.replaceWith(access);
        })

        root.append(title);
        

    // access
        var access = mountAccess(function () {
            access.replaceWith(register);
        }, function () {
            access.replaceWith(login);
        })
        root.append(access);
        

    // register

    var register = mountRegister(function (fullname, email, password, repassword) {
        registerUser(fullname, email, password, repassword, function (error) {
            if (error)
                alert(error.message);
            else register.replaceWith(confirm);
        })
    })

    // register confirm
    var confirm = mountRegisterConfirm(function () {
        confirm.replaceWith(login)
    })

    // login
    var login = mountLogin(function (email, password) {
        authenticateUser(email, password, function(error, token) {
            if (error)
                alert(error.message)
            else {
                retrieveUser(token, function(error, user){
                    var name = user.name
                    if (name) {
                        welcome.innerHTML = 'Welcome <strong>' + name + '</strong> to the Hello World App!';
                        
                        retrieveAllUsers(token, function(error, users){
                            var list = [];
                            for (var i = 0; i < users.length; i++){
                                list[i] = users[i].name;
                                    var filteredList = list.filter(function (item) {return item != undefined} )
                                    var joinedFilterList = filteredList.join(",\n")
                                    
                                        friends.innerHTML = '<b>Your friends:</b> ' + joinedFilterList;
                                    }
                        })       
                    }
                    else {
                        welcome.innerHTML = 'Welcome <strong>' + email + ' </strong> to the Hello World App!'
                        friends.remove();
                }
                    
                })
                // TODO call api to retrieve user, and then show welcome with user info
                
                login.replaceWith(welcome, friends)
                
                // TODO get rid off welcome if title is clicked
                
                
            }
        })
    })

    // welcome

    var welcome = mountWelcome()

    
    // friends
    var friends = mountFriends()
})(); 