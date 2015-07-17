const {
    ListItem,
    List,
    Avatar,
    RaisedButton,
    AppBar,
    LeftNav,
    MenuItem,
    DropDownMenu
    } = mui;

injectTapEventPlugin();

var ThemeManager = new mui.Styles.ThemeManager(),
    Colors = mui.Styles.Colors;

var menuItems = [
    { route: 'get-started', text: 'Get Started' },
    { route: 'customization', text: 'Customization' },
    { route: 'components', text: 'Components' },
    { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
    {
        type: MenuItem.Types.LINK,
        payload: 'https://github.com/callemall/material-ui',
        text: 'GitHub'
    },
    {
        text: 'Disabled',
        disabled: true
    },
    {
        type: MenuItem.Types.LINK,
        payload: 'https://www.google.com',
        text: 'Disabled Link',
        disabled: true
    },
];

MainLayout = React.createClass({
    displayName: 'App',
    childContextTypes: {
        muiTheme: React.PropTypes.object
    },

    getChildContext: function () {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    },
    componentWillMount() {
        ThemeManager.setPalette({
            primary1Color: Colors.lightBlue500,
            primary2Color: Colors.lightBlue700,
            primary3Color: Colors.lightBlue100
        });
    },

    render() {
        return <div>
            <AppBar title="Học bổng du học" onLeftIconButtonTouchTap={this._showLeftNav}/>
            <LeftNav ref="leftNav" docked={false} menuItems={menuItems} />
            <main>
                {this.props.content()}
            </main>
            <footer>
                This is our footer
            </footer>
        </div>
    },
    _showLeftNav(e){
        e.preventDefault();
        this.refs.leftNav.toggle();
    }
});

Meteor.startup(function(){
    injectTapEventPlugin();
})
