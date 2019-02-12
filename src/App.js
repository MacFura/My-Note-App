import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';
import Form from './components/Form/Form';

const initialStateItems = [
    {
        image: 'https://avatars1.githubusercontent.com/u/810438?s=460&v=4',
        name: 'Dan Abramov',
        description: 'Working on @reactjs. The demo guy.',
        twitterLink: 'https://twitter.com/dan_abramov',
    },
    {
        image: 'https://avatars3.githubusercontent.com/u/100200?s=460&v=4',
        name: 'Ryan Florence',
        description: 'Making React accessible for users and developers at https://reach.tech . Online learning, workshops, OSS, and consulting.',
        twitterLink: 'https://twitter.com/ryanflorence',
    },
    {
        image: 'data:image/jpeg;base64,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',
        name: 'Michael Jackson',
        description: 'Maker. Co-author of React Router. Working on @ReactTraining. Created @unpkg. Head over heels for @cari.',
        twitterLink: 'https://twitter.com/mjackson',
    },
    {
        image: 'https://pbs.twimg.com/profile_images/759557613445001216/6M2E1l4q_400x400.jpg',
        name: 'Kent C. Dodds',
        description: 'Making software development more accessible · Husband, Father, Latter-day Saint, Teacher, OSS, GDE, @TC39 · @PayPalEng @eggheadio @FrontendMasters · #JS',
        twitterLink: 'https://twitter.com/kentcdodds',
    },
]

class App extends React.Component {
    state = {
        items: [...initialStateItems],
    }

    addItem = (e) => {

        e.preventDefault();

        const newItem = {
            name: e.target[0].value,
            twitterLink: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value,
        }

        this.setState(prevState => ({
            items: [...prevState.items, newItem]
        }));

        e.target.reset();
    }


    render() {
        return (

            <div>
                <ListWrapper
                    items={this.state.items}
                />
                <Form
                    submitFn={this.addItem}
                />
            </div>
        )
    }
};

export default App;
