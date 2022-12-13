import { useEffect} from 'react';
import '../App.css';
function Log(props) {
  const {results, setResults, position, setPosition, dLL, setDLL, array, startingI, limiter, incrementor, currentITarget, currentElementTarget, backButtonTarget, forwardButtonTarget, runButtonTarget, terminalTarget} = props
  const handleRun=()=>{
    setResults(dLL[dLL.length-1]?.results)
    setPosition(dLL.length-1)
  }
  const handleForward=()=>{
    if (position+1<dLL.length){
      setResults(dLL[position+1]?.results)
      setPosition(position+1)
    }
  }
  const handleBackward=()=>{
    if (position-1>=0){
      setPosition(position-1)
      setResults(dLL[position-1]?.results)
    }
  }

  useEffect(()=>{
    setPosition(-1)
    setResults([])
    let newResults=[]
    let newDLL=[]
    let i;
    for(i = parseFloat(startingI); i<array.length-parseFloat(limiter); i+=parseFloat(incrementor)){
      newDLL.push({i:i, element:array[i], limiter:array.length-parseFloat(limiter), results:newResults.map((result)=>result), highlight: 1})
      newResults.push(array[i])
      newDLL.push({i:i, element:array[i], limiter:array.length-parseFloat(limiter), results:newResults.map((result)=>result), highlight: 2})
      newDLL.push({i:i+parseFloat(incrementor), element:array[i+parseFloat(incrementor)], limiter:array.length-parseFloat(limiter), results:newResults.map((result)=>result), highlight: 3})
    }
    newDLL.push({i:i, element:array[i], limiter:array.length-parseFloat(limiter), results:newResults.map((result)=>result), highlight: 1})
    setDLL(newDLL)
    console.log(dLL)

  },[array, incrementor,limiter, startingI])
    
  return (
    <div className="DisplayHolder">
      <div style={{display:"flex", justifyContent:"space-around"}}>
        <div ref={currentITarget} style={{background:`${dLL[position]?.highlight === 3 ? "yellow" : "white"}`}}>i:{dLL[position]?.i}</div>
        <div ref={currentElementTarget}>array[i]:{dLL[position]?.element}</div>
      </div>
      <div style={{display:"flex", justifyContent:"space-around", padding: "7px"}}><button ref={backButtonTarget} onClick={handleBackward} style={{background:"#F75D59"}}>{`< step back`}</button><button ref={forwardButtonTarget} onClick={handleForward} style={{background:"lightgreen"}}>{`step forward >`}</button><button ref={runButtonTarget} onClick={handleRun} style={{background:"lightgreen"}}>{`run >`}</button></div>
      <div ref={terminalTarget} className="Display" ><u>Terminal</u>
        {results.map((entry,i)=><div style={{background:`${dLL[position]?.highlight === 2 &&  dLL[position]?.i===i? "yellow" : "white"}`, textAlign:"left", padding:"5px"}} key={i}>{entry}</div>)}
      </div>
    </div>
  );
}

export default Log;