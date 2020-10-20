var users = [];
// options
(function(){
    var sections = document.querySelectorAll('section')

    var register = document.querySelector('button')
    console.log(register)
    register.onclick = function() {
        var options = sections[0]
        options.classList.add('off')

        var register = sections[1]
        register.classList.remove('off')
        console.log(register)
    }
    var login = document.querySelectorAll('button')[1]
    login.onclick = function() {
        var options = sections[0]
        options.classList.add('off')
        var login = sections[3]
        login.classList.remove('off')
    }
})();
//register
(function () {
    var register = document.querySelector('form')
    register.onsubmit = function (event) {
        event.preventDefault()
        var inputs = document.querySelectorAll('input')
        var fullname = inputs[0].value
        var email = inputs[1].value
        var password = inputs[2].value
        var repassword = inputs[3].value
        console.log(inputs, fullname, email, password, repassword)

        if (!fullname.trim().length) throw new Error ('full name is empty or blank')
        if (!email.trim().length) throw new Error ('e-mail is empty or blank')
        if (!password.trim().length) throw new Error ('password is empty or blank')
        if (!repassword.trim().length) throw new Error ('repeat password is empty or blank')
        if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)) throw new Error('invalid e-mail')
        if (password !== repassword) throw new Error ('passwords do not match')

        var user = {
            fullname: fullname,
            email: email,
            password: password
        }

        users.push(user)

        var sections = document.querySelectorAll('section')

        var register = sections[1]
        register.classList.add('off')
        var confirm = sections[2]
        confirm.classList.remove('off')
    }
})();

// register confirm
(function() {
    var login = document.querySelectorAll('button')[3]
    login.onclick = function() {
        var sections = document.querySelectorAll('section')
        var confirm = sections[2]
        confirm.classList.add('off')
        var login = sections[3]
        login.classList.remove('off')
    }
})();

// TODO login
(function(){
    var login = document.querySelectorAll('form')[1]

    login.onsubmit = function(event){
        event.preventDefault()
        var inputs = document.querySelectorAll('input')

        var email = inputs[4].value
        var password = inputs[5].value

        var checkUser = users.find(function(user){
            return user.email === email && user.password === password
        })
        if(checkUser !== undefined){
            var sections = document.querySelectorAll('section')
            var login = sections[3]
            login.classList.add('off')
            var welcome = sections[4]
            welcome.classList.remove('off')
            var text = document.querySelectorAll('h3')[1]
            text.innerText = 'Bienvenido ' + checkUser.fullname + ', que bueno volver a verte.'
            text.classList.remove('off')
        } else {
            var reTry = document.querySelector('h3')
            reTry.classList.remove('off')
        }
    }

})();
