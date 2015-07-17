const {
    DropDownMenu
    } = mui;

TagsFilter = React.createClass({
    displayName: 'TagsMenu',
    mixins: [ReactMeteorData],
    propTypes: {
        isMenu: React.PropTypes.string.isRequired
    },
    getMeteorData(){
        var _tags = Tags.find({menu: this.props.isMenu}).fetch(),
            _tags = _.map(_tags, function (t) {
                return ({
                    payload: t.code,
                    text: t.name
                })
            })
        return {
            tagItems: _tags
        }
    },
    render(){
        var style = {};
        style["width"] = "200px";
        return <DropDownMenu ref='slt' menuItems={this.data.tagItems} autoWidth={false} style={style} onChange={this.props.onChange}/>
    }
})