class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    username: 'Jeff',
                    online: true
                },
                {
                    username: 'Alan',
                    online: false
                },
                {
                    username: 'Mary',
                    online: true
                },
                {
                    username: 'Jim',
                    online: false
                },
                {
                    username: 'Sara',
                    online: true
                },
                {
                    username: 'Laura',
                    online: true
                }
            ]
        }
    }
    render() {
        let onlineUsers = this.state.users.filter(user => user.online);

        function addLis(arr) {
            return <li key={arr.username}>{arr.username}</li>;
        }
        const renderOnline = onlineUsers.map(addLis);

        //alrernative - an arrow function
        // const renderOnline = usersOnline.map(x => <li key={x.username}>{x.username}</li>);



        return (
            <div>
                <h1>Current Online Users:</h1>
                <ul>
                    {renderOnline}
                </ul>
            </div>
        );
    }
};