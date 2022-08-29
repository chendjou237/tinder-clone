import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import "./TinderCards.css";
export default function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',

            url: 'https://cdn-lejdd.lanmedia.fr/var/europe1/storage/images/lejdd/international/a-quoi-joue-elon-musk-4108392/58516802-1-fre-FR/A-quoi-joue-Elon-Musk.jpg',
        },
        {
            name: "jeff Bezoz",
            url: "https://media.gqmagazine.fr/photos/606577d57b2c2ebbd2921e05/4:3/w_1824,h_1368,c_limit/jeff%20bezos-813883140.jpg",
        },
        {
            name: "Mark Zuckerberg",
            url: "https://media.lesechos.com/api/v1/images/view/5c4adaa93e4546124c636116/1280x720/060579991045-web-tete.jpg",
        },
    ])
    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
    }

    const outOfFrame = (name) => {
        console.log(name + " left the screen!");
    };
    return (
        <div className='tinderCards'>
            <div className='tinderCards_cardContainer'>
                {people.map((person) => (
                <TinderCard className='swipe' key={person.name} preventSwipe={["up", "down"]} onSwipe={(dir) => swiped(dir, person.name)} onCardLeftScreen={() => outOfFrame(person.name)}>
                    <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                        <h3> {person.name}</h3>
                    </div>
                </TinderCard>))}
            </div>
        </div>
    )
}
