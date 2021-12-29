import React, {useState} from 'react';
import './Home.css';

import { TextField, MenuItem, Button} from "@material-ui/core";
import Categories from './../Data/Categories';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useHistory } from  'react-router-dom';


const Home = () => {
    

    
      const [name, setName] = useState(" ");
      const [category, setcategory] = useState("");
      const [difficulty, setDifficulty] = useState("");
      const [error, setError] = useState(false);

      const history = useHistory();
      const fetchQuestions = () => {};
      const handleSubmit = () => {
          if(!category || !difficulty||!name){
              setError(true);
              return;
          } else
          {
              setError(false);
              fetchQuestions(category, difficulty);
              history.push('./quizz');
          }
      };

    return (
        <div className='content'>
            <div className="settings">
                <span style={{ fontSize: 30 }}>Quiz Settings</span>
               
               <div className="setting-select">
                   {error && <ErrorMessage/>}

                <TextField 
                style={{marginBottom:25}}
                label="Enter Your Name" 
                variant="outlined"
                onChange={(e) => setName(e.target.value)}
                />
                <TextField 
                select label='select category' 
                variant="outlined"
                style={{marginBottom:25}}
                onChange={(e) => setcategory(e.target.value)}
                value={category}
                >
                 {Categories.map((cat) => {
                     return (
                    <MenuItem key={cat.category} value={cat.value}>
                        {cat.category}
                 </MenuItem>
                     )}
                 )}
                 

                </TextField>
                  
                  <TextField 
                  select
                  label='Select Difficulty'
                  variant="outlined" 
                  style={{marginBottom:25}}
                  onChange={(e) => setDifficulty(e.target.value)}
                  value={difficulty}
                  >
                      <MenuItem key='easy' value='easy'>Easy</MenuItem>
                      <MenuItem key='medium' value='medium'>Medium</MenuItem>
                      <MenuItem key='Hard' value='Hard'>Hard</MenuItem>
                  </TextField>
                <Button variant='contained' color='primary' size='large'
                onClick={handleSubmit}>Start</Button>
            
            </div>
            </div>
            <img src='/quiz.svg' className='banner' alt='quiz img'/>
        </div>
    );
}

export default Home;

