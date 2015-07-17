HomePage = React.createClass({
    displayName : 'HomePage',
    mixins: [ReactMeteorData],
    getInitialState(){
        return {
            selectedCountry : {},
            selectedLevel : {}
        }
    },
    getMeteorData(){

        console.log(this.state.selectedCountry, this.state.selectedLevel)
        return {}
    },
    render () {
        return (
            <div>
                <TagsFilter ref='sltCountries' isMenu='countries' onChange={this.sltCountries_OnChange}/>
                <TagsFilter ref='sltLevels' isMenu='levels' onChange={this.sltLevels_OnChange}/>
            </div>

        );
    },
    sltCountries_OnChange: function(e,selectedIndex, menuItem){
        this.setState({
            selectedCountry: menuItem
        })
    },
    sltLevels_OnChange: function(e,selectedIndex, menuItem){
        this.setState({
            selectedLevel: menuItem
        })
    }
});