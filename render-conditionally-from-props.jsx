class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { fiftyFifty } = this.props;
        return (

            <h1>
                {

                    fiftyFifty ? "You Win!" : "You Lose!"
                }
            </h1>
        )
    };
};

class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    render() {
        let expression = Math.random() > 0.5;
        return (
            <div>
                <button onClick={this.handleClick}>Play Again</button>
                { /* change code below this line */}
                <Results fiftyFifty={expression} />
                { /* change code above this line */}
                <p>{'Turn: ' + this.state.counter}</p>
            </div>
        );
    }
};