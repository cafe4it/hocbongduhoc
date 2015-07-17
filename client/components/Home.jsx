HomePage = React.createClass({
    displayName : 'HomePage',
    render () {
        return (
            <div className="pure-g">
                <div className="pure-u-1-3">
                    <TagsFilter isMenu='countries'/>
                </div>
                <div className="pure-u-1-3"><p>Thirds</p></div>
                <div className="pure-u-1-3"><p>Thirds</p></div>
            </div>
        );
    }
});