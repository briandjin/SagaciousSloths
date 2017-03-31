import React from 'react';

const LeaderBoard = (props) => {
  return (
  	<div className="leaderBoard">
  		<h3>Leader Board</h3>
	  	<table>
	  	  <thead>
	  	    <th style={{'padding-right': '50px'}}>NAME</th>
	  	    <th>SCORE</th>
	  	  </thead>
	  	  <tbody>
	  	    {props.scores.map(record => {
	  	    	return (
			  	    <tr>
			  	  		<td>{record.nickname}</td>	
			  	  		<td>{record.score}</td>	
			  	  	</tr>
	  	    	)
	  	    })}
	  	  </tbody>
	  	</table>
  	</div>
  )
}

export default LeaderBoard;