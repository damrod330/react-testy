import React from 'react';
import DomTextTest from './components/DomTextTest'
import DomListTest from './components/DomListTest'

const testList = [
    {
        id: "T01",
        name: "DOM - manipulacja tekstem tekstu",
        component: <DomTextTest text="Lorem ipsum etre metre done ome lolaes" />
    },
    {
        id: "T02",
        name: "DOM - dodawanie, usuwanie, edytowanie elementów listy",
        component: <DomListTest
            itemList={
                [
                    {
                        id: 74564565,
                        text: "717 Manhattan St. Middleton, WI 53562"
                    },
                    {
                        id: 12564352,
                        text: "8869 Miller St. Roanoke, VA 24012"
                    },
                    {
                        id: 94856234,
                        text: "848 Anderson Dr. Wilmington, MA 01887"
                    },
                    {
                        id: 47236543,
                        text: "8800 N. Logan Dr. Crown Point, IN 46307"
                    },
                    {
                        id: 69376859,
                        text: "83 Garden St. Riverside, NJ 08075"
                    },
                    {
                        id: 39623809,
                        text: "799 Orchard Lane Johnson City, TN 37601"
                    }
                ]
            }
            newItem={{
                id: 64562347,
                text: "799 Orchard Lane Johnson City, TN 37601"
            }}
            editItem={{
                id: 47236543,
                text: "514 Heather Street Buford, GA 30518"
            }}
            deleteItemId={12564352}
        />
    }
]

export default testList;