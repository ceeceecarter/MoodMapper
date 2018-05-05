import React, { Component } from 'react';
import update from 'react-addons-update';
import quizQuestions from '../Survey/quizQuestions';
import Quiz from '../Survey/Quiz';
import Result from '../Survey/Result';
import '../../App.css';
import axios from "axios";

class App extends Component {
 

  constructor(props) {
    console.log("Survey", props);
    super(props);
    
    
    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '',
      finalAnswers: [],
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }
 

  componentWillMount() {
    
    this.setState({
      question: quizQuestions[0].question,
      answerOptions: quizQuestions[0].answers
    });
  }
  

  // shuffleArray(array) {
  //   var currentIndex = array.length, temporaryValue, randomIndex;

  //   // While there remain elements to shuffle...
  //   while (0 !== currentIndex) {

  //     // Pick a remaining element...
  //     randomIndex = Math.floor(Math.random() * currentIndex);
  //     currentIndex -= 1;

  //     // And swap it with the current element.
  //     temporaryValue = array[currentIndex];
  //     array[currentIndex] = array[randomIndex];
  //     array[randomIndex] = temporaryValue;
  //   }

  //   return array;
  // };


  handleAnswerSelected(event) {
   
    this.setUserAnswer(event.currentTarget.value);
    // console.log("SELECTED ANSWER", event.currentTarget.value);
    const answer = event.currentTarget.value;
    console.log("ANSWER", answer);
    // console.log("QUESTIONID", this.state.questionId);
    const question = this.state.questionId;
    console.log("QUESTION", question);
 
    

    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
  
    } else {
        setTimeout(() => this.setResults(this.getResults()), 300);
    }
   
  }

  setUserAnswer(answer) {
    console.log("setUserAnswer", answer);
     
    

    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: {$apply: (currentValue) => currentValue + 1}
    });

    this.setState({
        answersCount: updatedAnswersCount,
        answer: answer,
        finalAnswers: [...this.state.finalAnswers, answer],
        
    });
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
        counter: counter,
        questionId: questionId,
        question: quizQuestions[counter].question,
        answerOptions: quizQuestions[counter].answers,
        answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    const { finalAnswers } = this.state;
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }

    const whatevs = {
      anxiety: parseInt(this.state.finalAnswers[0]),
      depression: parseInt(this.state.finalAnswers[1]),
      concentration: parseInt(this.state.finalAnswers[2]),
      energy: parseInt(this.state.finalAnswers[3]),
      sleep: parseInt(this.state.finalAnswers[4])
    };

    console.log(whatevs)

    axios({
      method: 'post',
      url: '/api/survey',
      data : whatevs
    });

    // axios.post("/api/survey", {
    //   anxiety: whatevs.anxiety,
    //   depression: whatevs.depression,
    //   concentration: whatevs.concentration,
    //   energy: whatevs.energy,
    //   sleep: whatevs.sleep
    // })
    // .then(function(response){
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })
    
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }

}

export default App;
