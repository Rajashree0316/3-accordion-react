import React, { useState } from 'react';
import data from './components/data';
import SingleQuestion from './components/Question';

const App = () => {
  const [questions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>questions and answers about login</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;


/*iterate over the list of questions
1)map function
2) spread operator - to spread rest of the info
*/
