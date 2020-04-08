import React from 'react';

class Stopwatch extends React.Component{
	constructor(){
		super();
		this.state={
			timerOn:false,
			timerTime:0,
			timerStart:0,
		}
		this.startTimer=this.startTimer.bind(this);
		this.stopTimer=this.stopTimer.bind(this);
		this.resetTimer=this.resetTimer.bind(this);
	}

	startTimer(){
		this.setState({
			timerOn:true,
			timerTime:this.state.timerTime,
			timerStart:Date.now()-this.state.timerTime
		})

		this.timer=setInterval(()=>{
			this.setState({
				timerTime:Date.now()-this.state.timerStart
			})
		},10)
	}

	stopTimer(){
		this.setState({
			timerOn:false		
		})
		clearInterval(this.timer);
	}

	resetTimer(){
		this.setState({
			timerTime:0,
			timerStart:0
		})
	}

	render(){
		const {timerTime}=this.state;
		let centiseconds=("0" + (Math.floor(timerTime/10) % 100)).slice(-2)
		let seconds=("0" + (Math.floor(timerTime/1000) % 60)).slice(-2)
		let minutes=("0" + (Math.floor(timerTime/60000) % 60)).slice(-2)
		let hours=("0" + Math.floor(timerTime/3600000)).slice(-2)

		return(
			<div>
			<div>Stopwatch</div>
			<p>{hours}:{minutes}:{seconds}:{centiseconds}</p>
			{
				this.state.timerOn === false && this.state.timerTime === 0 && 
				(<button onClick={this.startTimer}>Start</button>)
			}
			{
				this.state.timerOn === true && 
				(<button onClick={this.stopTimer}>Stop</button>)
 			}
 			{
 				this.state.timerOn === false && this.state.timerTime > 0 && 
 				(<button onClick={this.startTimer}>Resume</button>)
 			}
 			{
 				this.state.timerOn === false && this.state.timerTime > 0 && 
 				(<button onClick={this.resetTimer}>Reset</button>)
 			}
			</div>
			)
	}
}

export default Stopwatch;