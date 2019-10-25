import React, { Component } from 'react'
import testList from '../testList'

export default class ResultsTable extends Component {

    constructor(props) {
        super(props)

        this.state = {
            measures: [],
            resultList: []
        }
    }

    static getDerivedStateFromProps(props, current_state) {
        if (current_state.measures !== props.measures) {

            const getCsvLink = (data) => {
                let csvContent = "data:text/csv;charset=utf-8,";
                data.forEach(function (result) {
                    csvContent += result + ';' + "\r\n";
                });
                return encodeURI(csvContent);
            }


            const getNewResultList = (measures) => {
                if (measures) {
                    let newResultsList = [];
                    testList.forEach(test => {
                        let resultsData = measures.filter(measure => {
                            return measure.name.search(test.id) > -1 ? true : false;
                        }).map(measure => {
                            return measure.duration
                        })
                        if (resultsData.length > 0)
                            newResultsList.push({
                                id: test.id,
                                name: test.name,
                                data: resultsData,
                                downloadLink: getCsvLink(resultsData, test.id)
                            })
                    })
                    return newResultsList
                }
                return [];
            }
            return {
                measures: props.measures,
                resultList: getNewResultList(props.measures)
            };
        } else {
            return current_state
        }
    }

    render() {
        let results;
        const resultList = this.state.resultList.map(result => {
            return (<tr key={result.id}>
                <td>{result.id}</td>
                <td>{result.data.length}</td>
                <td>{result.data.shift()}</td>
                <td>{result.data.length > 0 ? result.data.reduce((sum, item) => {
                    return sum + item;
                }) / result.data.length : 'brak elementów'}</td>
                <td><a href={result.downloadLink} download={result.id + ".csv"}>Pobierz</a></td>
            </tr>)
        });

        if (resultList.length > 0)
            results = (
                <table>
                    <thead>
                        <tr>
                            <th>Test</th>
                            <th>Ilość iteracji</th>
                            <th>Pierwsze wykonanie (ms)</th>
                            <th>Średni czas (ms)</th>
                            <th>.csv</th>
                        </tr>
                    </thead>
                    <tbody>
                        {resultList}
                    </tbody>
                </table>)
        else
            results = (
                <p>Nie znaleziono żadnych wyników.</p>)

        return (
            <section className="card">
                {results}
            </section>
        )
    }
}
