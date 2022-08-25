import React, { useState } from 'react'
import   "./TinderCards.css";
export default function TinderCards() {
    const [people, setPeople] = useState([
     {   name: 'Elon Musk',
     url: 'https://cdn-lejdd.lanmedia.fr/var/europe1/storage/images/lejdd/international/a-quoi-joue-elon-musk-4108392/58516802-1-fre-FR/A-quoi-joue-Elon-Musk.jpg',
    },
    {
        name: "jeff Bezoz",
        url: "https://cdn1-production-images-kly.akamaized.net/b8TyzY0llvfhXw9-4O_1D_rqry8=/1200x900/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/979043/original/007842500_1441515357-CEO-Amazon-Jeff-Bezos.jpg",
    },
    ])
  return (
    <div className='tinderCards'>
        <div className='tinderCards_cardContainer'>
        {people.map((person) => (<h1>{person.name}</h1>))}
    </div>
    </div>
  )
}
