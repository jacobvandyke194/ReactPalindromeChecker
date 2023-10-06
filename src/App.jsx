import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <header>
        <h1><label htmlFor="palindromeInput">Palindrome Checker</label></h1>
      </header>
      <main>
        <input id="palindromeInput" placeholder="Input Palindrome" type="text"></input>
        <button onClick={function checkPalindrome() {
          const input = document.getElementById('palindromeInput');
          let word = input.value;
          if(word){
            let wordArr = word.split('');
            let reversedArr = wordArr.reverse();
            let joinedReversedArr = reversedArr.join('');
            console.log(reversedArr);
            console.log(joinedReversedArr);
            console.log(word);
            if(word === joinedReversedArr){
              console.log("This is a palindrome!")
            } else{
              console.log("This is not a palindrome!")
            }
          } else {
            console.log("Please enter a word to be tested!")
          }


        }}>Submit</button>
      </main>
    </>

  )
}



export default App
