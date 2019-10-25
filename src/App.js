import './App.css';
import React, { Component } from 'react';
import MeasureRenderer from './components/MeasureRender';
import ReactDOM from 'react-dom';
import testList from './testList'
import ResultsTable from './components/ResultsTable.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      testList: testList,
      currentTestId: "T01",
      repeatAmount: 50,
      measures: null,
      oddProp: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleRunTestClicked = this.handleRunTestClicked.bind(this);
    this.runTest = this.runTest.bind(this);
  }

  handleChange(e) {
    this.setState({ currentTestId: e.target.value });
  }

  handleInput(e) {
    this.setState({ repeatAmount: e.target.value });
  }

  handleRunTestClicked() {
    let test = this.state.testList.find(test => test.id === this.state.currentTestId);
    this.runTest(test, this.state.repeatAmount)
  }

  runTest(test, count) {
    if (count) {
      count--;
      this.setState({ oddProp: !this.state.oddProp });
      ReactDOM.render(<MeasureRenderer id={test.id} props={test.props[this.state.oddProp ? 1 : 0]} Component={test.run} />, document.getElementById('test-area'), () => {
        this.runTest(test, count)
      });
    } else {
      this.updateResults();
    }
  }

  updateResults() {
    this.setState({ measures: window.performance.getEntriesByType('measure') });
  }

  render() {

    const options = this.state.testList.map(test => {
      return (<option key={test.id} value={test.id}>[{test.id}] {test.name}</option>)
    })

    return (
      <main className="container">
        <h2>Testy dla React</h2>
        <section className="card">
          <div className="form-control">
            <label>Wybierz test:</label>
            <select name="select-test" onChange={this.handleChange}>
              {options}
            </select>
          </div>
          <div className="form-control">
            <label>Ilość powtórzeń:</label>
            <input type="number" name="select-test" onChange={this.handleInput} value={this.state.repeatAmount}
              placeholder="Ilość powtórzeń" />
          </div>
          <div className="form-control">
            <button type="button" onClick={this.handleRunTestClicked}>Uruchom</button>
          </div>
        </section>
        <ResultsTable measures={this.state.measures} />
        <section className="card" id="test-area">
        </section>
      </main>
    );
  }
}

export default App;
