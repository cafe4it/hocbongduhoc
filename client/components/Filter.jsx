const {
    DropDownMenu
    } = mui;

TagsFilter = React.createClass({
    displayName : 'TagsMenu',
    mixins: [ReactMeteorData],
    propTypes : {
        isMenu : React.PropTypes.string.isRequired
    },
    getMeteorData(){
        var topItems = [
            { menu : 'countries',code: '1', text: 'Chọn quốc gia' },
            { menu : 'levels',code: '2', text: 'Chọn bậc học' }
        ];
        var _tags = Tags.find({menu : this.props.isMenu}).fetch(),
            _tags = _.map(_tags, function(t){
                return {
                    payload : t.code,
                    text : t.text
                }
            })
        return {
            tagItems : _tags
        }
    },
    render(){
        var style = {};
        style["width"] = "200px;";
        return <DropDownMenu menuItems={this.data.tagItems} autoWidth={true}/>
    }
})