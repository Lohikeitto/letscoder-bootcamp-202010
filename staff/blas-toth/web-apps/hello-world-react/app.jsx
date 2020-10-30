
class App extends React.Component {
    constructor() {
        super()
        this.state = { view: 'home' }
        this.handleGoToRegister = this.handleGoToRegister.bind(this)
        this.handleGoToLogin = this.handleGoToLogin.bind(this)
        this.handleGoToHome = this.handleGoToHome.bind(this)
        this.handleRegister = this.handleRegister.bind(this)
        this.handleLogin = this.handleLogin.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleSearch2 = this.handleSearch2.bind(this)
        this.handleSearch3 = this.handleSearch3.bind(this)
        this.handleGoToProfile = this.handleGoToProfile.bind(this)
        this.handleModifyUser = this.handleModifyUser.bind(this)
    }

    handleGoToRegister() {
        this.setState({ view: 'register' })
    }
    handleGoToLogin() {
        this.setState({ view: 'login' })
    }
    handleGoToHome() {
        this.setState({ view: 'access' })
    }
    handleRegister(fullname, email, password, repassword) {
        registerUser(fullname, email, password, repassword, function (error) {
            if (error) return alert(error.message)
            this.setState({ view: 'register-confirm' })
        }.bind(this))
    }

    handleLogin(email, password) {
        authenticateUser(email, password, function (error, token) {
            if (error) return alert(error.message)

            this.setState({ token })

            retrieveUser(token, function(error, user) {
                if (error) return alert(error.message)

                this.setState({ view: 'home', user })
            }.bind(this)) 
        }.bind(this))
    }

    handleSearch(query) {
        searchInGoogle(query, function(error, results) {
            if (error) return alert(error.message)

            this.setState({ results })
        
        }.bind(this))
    }

    handleSearch2(query) {
        searchInBing(query, function(error, results) {
            if (error) return alert(error.message)

            this.setState({ results })
             
        }.bind(this))
    }

    handleSearch3(query) {
        searchInHotWheels(query, function(error, vehicles) {
            if (error) return alert(error.message)

            this.setState({ vehicles })
        }.bind(this))
    }


    handleGoToProfile() {
        this.setState({ subview: 'profile' })
    }

    handleModifyUser(fullname, image) {
        modifyUser(this.state.token, { fullname, image }, function (error) {
            if (error) alert(error.message)

            retrieveUser(this.state.token, function (error, user) {
                if (error) return alert(error.message)

                this.setState({ user })
    }.bind(this))
}.bind(this))
    }



    render() {
        return <>
            <Title onHome={this.handleGoToHome} />
            {this.state.view === 'access' && <Access onRegister={this.handleGoToRegister} onLogin={this.handleGoToLogin} />}

            {this.state.view === 'register' && <Register onRegister={this.handleRegister} />}

            {this.state.view === 'login' && <Login onLogin={this.handleLogin} />}

            {this.state.view === 'register-confirm' && <RegisterConfirm onLogin={this.handleGoToLogin} />}

            {this.state.view === 'home' && <>
             <Welcome name={this.state.name} />
             <Search onSearch={this.handleSearch}/>

             {this.state.results && <Results items={this.state.results} />}
             </>}

             {this.state.view === 'home' && <>
             
             <Search onSearch={this.handleSearch2}/>

             {this.state.results && <Results items={this.state.results} />}
             </>}

             {this.state.view === 'home' && <>
             
             <Search onSearch={this.handleSearch3}/>

             {this.state.vehicles && <Results items={this.state.vehicles.map(vehicle => {
                    var item = {
                        title: vehicle.id,
                        url: vehicle.thumbnail,
                        preview: vehicle.price
                    
                    }

                    return item
                   
                })} />}
             </>}
        </>
    }
} 