import React from 'react'
import { Hello } from './Hello'
import { Welcome } from './Welcome'

export class App extends React.Component {
    render() {
        return <div>
            <Hello />
            <Welcome name= "Andrea" />
        </div>
        /* 
        se viene passata una stringa vuota viene renderizzata tale stringa vuota
        se non viene passato alcun valore avviene un errore per cui props.name è deprecato 
        il valore di dafault è settato 
        */
    }
}