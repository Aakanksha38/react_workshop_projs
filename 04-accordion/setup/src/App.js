import React from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
  //const [questions,setQuestions] = useState(data);
  return(
    <main>
      <div className='container'>
        <h3>Questions And Answers about login</h3>
        <section className='info'>
          {data.map((question)=>{
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            )
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
