import { useState, useEffect } from "react";
//import { MDBBtn } from "mdb-react-ui-kit";

import Quiz from "./components/Quiz";
import { data, prizeMoney } from "../data";
import Timer from "./components/Timer";
import Start from "./components/Start";
import './home.css'

function Home() {
  const [name, setName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [earned, setEarned] = useState("₹ 0");

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(
        prizeMoney.find((item) => item.id === questionNumber - 1).amount
      );
  }, [questionNumber]);

  return (
    
    <div className="ppp">
      {!name ? (
        <Start setName={setName} setTimeOut={setTimeOut} />
      ) : (
        <div className="suman">
            <div className="raju">
              {timeOut ? (
                <h1 className="earned">You Earned Total: {earned}</h1>
              ) : (
                <>
                  <div className="timer">
                        <Timer
                          setTimeOut={setTimeOut}
                          questionNumber={questionNumber}
                        />
                     </div>
                  <Quiz
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                    
                     
                      
                  
                  </>

                
              )}
            </div>
          <div  className="money">
            <div className="money-list">
              <div>
                <span className="mb-2">
                  <button
                    style={{ float: "right" }}
                    className="sbtn2"
                    color="light"
                    onClick={() => setTimeOut(true)}
                  >
                    Quit
                  </button>
                  <button
                    className="sbtn1"
                    style={{ float: "right" }}
                    onClick={() => {
                      setName(null);
                      setQuestionNumber(1);
                      setEarned("₹ 0");
                    }}
                  >
                    Exit
                  </button>
                </span>
                <p md="6">Name: {name}</p>
                <p md="6">Total Earned: {earned}</p>
              </div>
              <hr />
              {prizeMoney.map((item) => (
                <>
                  <li
                    className={
                      questionNumber === item.id ? "item active" : "item"
                    }
                  >
                    <h5 className="amount">{item.amount}</h5>
                  </li>
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
