import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items=[
    {
        title:'What is React?',
        content:'React is front end javascript framework.'
    },
    {
      title:'Why use React?',
      content:'React is a favourite javascript libraray among engineers'
    },
    {
        title:'How do you use React?',
        content:'We use React by creating components'
    }
    
]



const App=()=>{
return <div><Search/></div>

    // return <div><Accordion items={items}/></div>
}//after accordian items is prop which is passed in accordion and in curly braces is array mentioned above
export default App;