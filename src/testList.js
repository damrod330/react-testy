import DomTextTest from './components/DomTextTest'
import DomAddToListTest from './components/DomAddToListTest'
import React from 'react'
import DomEditListTest from './components/DomEditListTest'
import DomDeleteFromListTest from './components/DomDeleteFromListTest'
import CssAddStylesTest from './components/CssAddStylesTest'
import CssChangeClassNameTest from './components/CssChangeClassNameTest'
import GetDataFromFormTest from './components/GetDataFromFormTest'

const testList =
    [
        {
            id: "T01",
            name: "DOM - manipulacja tekstem",
            run: DomTextTest,
            props: [
                { text: "Lorem ipsum etre metre done ome lolaes" },
                { text: "T01" }
            ]
        },
        {
            id: "T02",
            name: "DOM - dodawanie elementu do listy",
            run: DomAddToListTest,
            props: [
                { html: [<div className="form-control"><label>Login:</label><input type="text" defaultValue="Dodano element do listy" placeholder="login" /></div>, <div className="form-control"><label>Hasło:</label><input type="password" defaultValue="12345678" placeholder="hasło" /></div>] },
                { html: [<h4>Dodano element do listy</h4>] }
            ]
        },

        {
            id: "T03",
            name: "DOM - edycja elementu listy",
            run: DomEditListTest,
            props: [
                { targets: [0, 1, 2, 3, 4, 5, 6, 7], html: <button type="button">Zmieniono element listy</button> },
                { targets: [1, 7, 8, 9, 14, 2, 93, 24, 43, 21, 40, 56, 93, 53, 74, 34, 73, 65, 84, 29], html: <input type="text" defaultValue="Zmieniono element listy" /> },
            ]
        },
        {
            id: "T04",
            name: "DOM - usuwanie elementów listy",
            run: DomDeleteFromListTest,
            props: [
                { targets: [0, 1] },
                { targets: [7, 0, 0, 5, 1, 0] },
            ]
        },
        {
            id: "T05",
            name: "CSS - dadanie stylów do elementu",
            run: CssAddStylesTest,
            props: [
                { style: { fontSize: '26px', fontWeight: 700, fontFamily: 'Arial', color: 'orange', height: '400px' } },
                { style: { fontSize: '12px', fontWeight: 400, fontFamily: 'Roboto', color: 'darkgrey', height: '400px' } }
            ]
        },
        {
            id: "T06",
            name: "CSS - podmiana klasy ze stylami",
            run: CssChangeClassNameTest,
            props: [
                { className: "T06a" },
                { className: "T06b" },
            ]
        },
        {
            id: "T07",
            name: "Zdarzenia - Pobieranie danych z formy",
            run: GetDataFromFormTest,
            props: [
                { username: "admin", password: "admin" },
                { username: "sadfaf234f2fvgn2r23r0vqwnmrtq233q2r0rtvq23m0q29tv34grq3jt24mv4qt23wmv09b3tqm9t02v", password: "2c3r3cr24fv3t24gv3y45tbh9hjmun034b345whnu9ty9w4h5my54ou5bgmn" },
            ]
        }
    ]

export default testList;