function Search(props) {
    return <form onSubmit={function(event) {
        event.preventDefault()

        var query = event.target.query.value

        props.onSearch(query)
    }}>
        <h2>search</h2>
        <input type="text" name="query"/>
        <button type="reset">✖️</button>
        <button type="submit">🔍</button>
    </form>
}