import React, {useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import { Web3Storage } from 'web3.storage'

function showChar(e) {
  // typing, does nothing
  // if [, set cursor to true
  // if ], alert the text and wrap text in rainbow
  if(e.key == '['){
    console.log(e.key)
  }else if(e.key == ']'){
    var content = document.getElementById('text');
    var position = content.selectionStart;
    document.getElementById('pos').innerHTML = position;
    setter = true;
  console.log(content.value.split('[').pop().split(']')[0])
    document.getElementById('pos').innerHTML = `<span class="rainbow">${content.value.split('[').pop().split(']')[0]}<span class="rainbow">`
  }
}

// function cursorPosition() {
//   var content = document.getElementById('text');
//   if((content.selectionStart!=null) && (content.selectionStart!=undefined)){
//     var position = content.selectionStart;
//     document.getElementById('pos').innerHTML = position;
//   }
//   else {
//     return false;
//   }
// }


const library = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: 'https://en.wikipedia.org/wiki/Spleen',
  10: 'https://en.wikipedia.org/wiki/Spleen',
  11: '',
  12: '',
  13: '',
  14: '',
  15: '',
  16: '',
  17: '',
  18: '',
  19: '',
  20: '',
  21: '',
  22: '',
  23: '',
  24: '',
}
let toggle = false;
let setter = false;

class Qi {
  constructor(){
    // is there a way to string concatenate a switch case?
  }
  start(setOrgan, setOrganLink){
    setInterval(() => {
        
        const hour = (new Date()).getHours()
        switch(hour){
          case 1:
            break;
          case 2:
            break;
          case 3:
            break;
          case 4:
            console.log('Lung')
            setOrgan('Liver')
            setOrganLink(library[hour])
            break;
          case 5:
            console.log('Lung')
            setOrgan('Lung')
            setOrganLink(library[hour])
            break;
          case 6:
            console.log('Large Intestines')
            setOrgan('Large Intestines')
            setOrganLink(library[hour])
            break;
          case 7:
            console.log('Large Intestines')
            setOrgan('Large Intestines')
            setOrganLink(library[hour])
            break;
          case 8:
            console.log('Stomach')
            setOrgan('Stomach')
            setOrganLink(library[hour])
            break;
          case 9:
            console.log('spleen')
            setOrgan('spleen')
            setOrganLink(library[hour])
            break;
          case 10:
            console.log('spleen')
            setOrgan('spleen')
            setOrganLink(library[hour])
            break;
          case 11:
            console.log('heart')
            setOrgan('heart')
            setOrganLink(library[hour])
            break;
          case 12:
            console.log('heart')
            setOrgan('heart')
            setOrganLink(library[hour])
            break;
          case 13:
            console.log('SI')
            setOrgan('Small Intestine')
            setOrganLink(library[hour])
            break;
          case 14:
            console.log('SI')
            setOrgan('Small Intestine')
            setOrganLink(library[hour])
            break;
          case 15:
            console.log('Bladder')
            setOrgan('Bladder')
            setOrganLink(library[hour])
            break;
          case 16:
            console.log('Bladder')
            setOrgan('Bladder')
            setOrganLink(library[hour])
            break;
          case 17:
            console.log('Kidney')
            setOrgan('Kidney')
            setOrganLink(library[hour])
            break;
          case 18:
            console.log('Kidney')
            setOrgan('Kidney')
            setOrganLink(library[hour])
            break;
          case 18:
            console.log('Pericardium')
            setOrgan('Pericardium')
            setOrganLink(library[hour])
            break;
          case 19:
            console.log('Pericardium')
            setOrgan('Pericardium')
            setOrganLink(library[hour])
            break;
          case 20:
            console.log('Endocrine')
            setOrgan('Endocrine')
            setOrganLink(library[hour])
            break;
          case 21:
            console.log('Endocrine')
            setOrgan('Endocrine')
            setOrganLink(library[hour])
            break;
          case 22:
            console.log('Gall Bladder')
            setOrgan('Gall Bladder')
            setOrganLink(library[hour])
            break;
          case 23:
            console.log('Gall Bladder')
            setOrgan('Gall Bladder')
            setOrganLink(library[hour])
            break;
          default:
            break;
        }
    }, 1000)
  }
}

// superfluid
// blockchain
// ipfs / ceramic (probably no time for ceramic)
class Onaka {
  constructor(token){
    const storage = new Web3Storage({ token })
    this.storage = storage;
  }
  async uploadMeta(){
    const obj = { hello: 'worlding' }
    const blob = new Blob([JSON.stringify(obj)], { type: 'application/json' })
    const files = [
      new File([blob], 'hello-juan.json')
    ]
    const cid = await this.storage.put(files)
    console.log('stored files with cid:', cid)
  }
  startStream(){
    // create superfluid stream
  }
  mint(){
    // 
  }
}

let ourInterval;
function App() {
  const [organ, setOrgan] = useState('heart')
  const [onaka, setOnaka] = useState(null)
  const [organLink, setOrganLink] = useState('https://en.wikipedia.org/wiki/Heart')
  const [toBeRendered, setToBeRendered] = useState(false)
  const [el, setEl] = useState('🌾')
  const [fuel, setFuel] = useState('🥐')
  // const [toggle, setToggle] = useState(false)
  useEffect(() => {

    if(!toBeRendered){
      setToBeRendered(true)
      setOnaka(new Onaka('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGRjMDQ4M2Y1M2UxZDAxQzk4M2U3NTQxRTMzNjhBMEVjMzc1QTc3NDgiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjM4MDAwNTI3ODgsIm5hbWUiOiJlbmowMFkifQ.3RzENm6BOBqwME1edNapf6WBPALv-FAjaHFtfI3MMH8'))

      const qi = new Qi()
      qi.start(setOrgan, setOrganLink)
        const menuToggle = document.querySelectorAll(".menu button")[1];
        const menuList = document.querySelector(".menu-list");
        const menu = document.querySelector(".menu");
      menuToggle.addEventListener("click", function () {
        const wc = document.querySelector(".wc");
        console.log('clicked')
        console.log(toggle)
        console.log(menu)
        if (!toggle) {
          menu.className += " active";
          // setToggle(true)
          console.log('#FFF')
          wc.style.fill = "#fff";
          console.log(toggle)
          toggle = !toggle;
        } else {
          menu.classList.remove("active");
          wc.style.fill = "#000";
          toggle = !toggle;
          // setToggle(false)
        }
      });


      /* had to do the transitionend in js so there isn't any distortion with the blur */
      // menuList.addEventListener("transitioned", function () {
      //   console.log('clicked')
        
      //   if (menu.classList.contains("active")) {
      //     this.classList.add("blur");
      //   } else {
      //     this.classList.remove("blur");
      //   }
      // });

      const radioButtons = document.querySelectorAll('input[name="editList"]');
      /*
      🌾🥐
      🥚🥘
      🥔🍟
      🐟🍣
      */
      let counter = 1;
      let smoothened = 1;
      let count = 1
      const horo = () => {
        const gear = document.getElementById("gear");
        counter = counter + count;
        // console.log('trying')
        gear.style.transform = `rotate(${counter++}deg)`;
        for (const radioButton of radioButtons) {
          if (radioButton.checked) {
            // console.log(radioButton.value);
            const area = document.getElementsByClassName("area")[0];
            // console.log(area);
            switch (radioButton.value) {
              case "air":
                setEl('🌾')
                setFuel('🥐')
                area.style.background =
                  "url(https://images.unsplash.com/photo-1589144669495-b5905b68ea9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=827&q=80)";
                break;
              case "fire":
                setEl('🥚')
                setFuel('🥘')

                area.style.background =
                  "url(https://i.ibb.co/Sf2Wh39/Screenshot-2022-09-21-202544.png)";
                break;
              case "earth":
                setEl('🥔')
                setFuel('🍟')
                area.style.background =
                  "url(https://i.ibb.co/Mpxb87G/Screenshot-2022-09-21-202759.png";
                break;
              default:
                setEl('🐟')
                setFuel('🍣')
                area.style.background =
                  "url(https://images.unsplash.com/photo-1544365558-35aa4afcf11f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80)";
            }
          }
        }
      };


      ourInterval = setInterval(horo, 100 / smoothened);
        document.getElementById("input-vision").onkeyup = function () {

          // clear interval
          clearInterval(ourInterval);
          smoothened = this.value.length;
          // console.log(smoothened);
          // reset new with smoothened time
          if(smoothened != 0)
            ourInterval = setInterval(horo, 100 / smoothened);

          // console.log(this.value);

          console.log("Characters left: " + (500 - this.value.length));
        };
    }

  }, [toggle, toBeRendered])
  const upload = async () => {
    await onaka.uploadMeta()
  }
  return (
    <>
    {/* access */}
    <br/>
    <br/>
    <br/>
    <div class="strange" id='superfluid'>
      <br />
      <br />
      <h2 style={{textAlign: 'center'}}>enj00Y</h2>

      <p>

      </p>
      <blockquote>At the center of the UN Sustainability goals are &nbsp; <span class="rainbow">food & agriculture</span>. <br/><br/>Begin browsing @ $6 a month</blockquote>

      <br />
      <img style={{
        width: '250px', 
        padding: '10px',
        position: 'absolute',
        marginLeft: '50px',
        borderRadius: '50%'
        }} src={'https://i.ibb.co/FJDDQrH/Screenshot-2022-09-21-215321.png'}></img>
      <div class="container">
      <div class="vertical-center">
        <button style={{
          marginLeft: '116px',
          borderRadius: '50%',
          height: '120px',
          width: '120px',
          top: '20px',
          backgroundColor: 'wheat'
        }} onClick={() => console.log('testing')}>start</button>
      </div>

      </div>
      <br/>
      <br/>
      <br/>
      <div class="proccesor">
        <a href={organLink} target="_blank"><p className="organ">{organ}</p></a>

      </div>
    </div>
    {/* scratchpad */}
    <br/>
    <br/>
    <div class="area" id='area'>
      <br />
      <br />
      <h2>Title: 17 cleanse</h2>

      <p>

      </p>

      <blockquote>First place sliced <span class="rainbow">sweet potatoes</span> in a bowl with <span class="rainbow">balsamic</span> & <span class="rainbow">olive oil</span></blockquote>

      <textarea id='input-vision' style={{backgroundColor: 'black'}} rows="6"/>
      <br />
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
      <div class="proccesor">
        <a href={organLink} target="_blank"><p className="organ">{organ}</p></a>
        <span class='space-for-earth'>{el}</span>
        <a style={{cursor: 'pointer'}} onClick={() => upload()}>
          <img id="gear" style={{width: '60px'}} src={'https://imgs.search.brave.com/Oo7piKZApgnEMLzPPRZ_zpeXpH34q3Wdo9nivdmPNgg/rs:fit:799:776:1/g:ce/aHR0cDovLzQuYnAu/YmxvZ3Nwb3QuY29t/Ly0tRjFYUGdIaUJV/by9UZ2RqM213NDUy/SS9BQUFBQUFBQU43/TS9FcEJMUjgzNGhK/RS9zMTYwMC9BbnRp/cXVlQnJhc3NHZWFy/LnBuZw'}/>
        </a>
        <span class='space-for-food'>{fuel}</span>
      </div>
      <nav aria-label="Menu" class="menu active">
        <button style={{transform: "rotate(115deg) scaleX(-1)", marginLeft: '10px', paddingTop: '-20px'}}>
          <svg viewBox="0 0 448 512" width="100" class="wc menu-icon-svg active-hidden">
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
          </svg>
        </button>
        <button style={{transform: "rotate(180deg) scaleX(1)", paddingBottom: '19px'}}>
          <div class='square' />
          <svg viewBox="0 0 448 512" width="100" class="menu-icon-svg">
            <path d="
                     M16 
                     132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 
                     160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 0 0 16zm0 
                     160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
          </svg>
        </button>
        <label style={{margin: '10px'}}>
          <input type="radio" name="editList" value="air" />🜁
        </label>
        <label style={{margin: '10px'}}>
          <input type="radio" name="editList" value="fire" />🜂
        </label>
        <label style={{margin: '10px'}}>
          <input type="radio" name="editList" value="earth" />🜃
        </label>
        <label style={{margin: '10px'}}>
          <input type="radio" name="editList" value="water" />🜄
        </label>
{/*        <ul class="menu-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>*/}
      </nav>
    </div>
    <br/>
    <br/>
  {/*what are we really doing here, folklore*/}
    <div class="judgement" id='judgement'>
      <br />
      <h2>Mod Duties</h2>
      <h2>Title: 17 cleanse</h2>

      <p>

      </p>
      <blockquote>First place sliced <span class="rainbow">sweet potatoes</span> in a bowl with <span class="rainbow">balsamic</span> & <span class="rainbow">olive oil</span></blockquote>


      
      <a style={{cursor: 'pointer'}} onClick={() => console.log('up')}><img style={{marginLeft: '95px'}}src={'https://i.ibb.co/pvjjd0V/green-is-up.png'} /></a>
      <a style={{cursor: 'pointer'}} onClick={() => console.log('not ok')}><img style={{marginLeft: '95px'}} src={'https://i.ibb.co/sqyHv9H/red-is-no.png'} /></a>
      <br /> <br /> {/*<*/}
      <div class="proccesor">
        <a href={organLink} target="_blank"><p className="organ">{organ}</p></a>
        <a style={{cursor: 'pointer'}} onClick={() => upload()}>
          <img class="rotating" style={{width: '60px'}} src={'https://i.ibb.co/B4pRRcF/noun-d20-dice-763027-45-DEE1.png'}/>
        </a>
      </div>
      <nav aria-label="Menu" class="menu active">
        <button style={{transform: "rotate(115deg) scaleX(-1)", marginLeft: '10px', paddingTop: '-20px'}}>
          <svg viewBox="0 0 448 512" width="100" class="wc menu-icon-svg active-hidden">
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
          </svg>
        </button>
        <button style={{transform: "rotate(180deg) scaleX(1)", paddingBottom: '19px'}}>
          <div class='square' />
          <svg viewBox="0 0 448 512" width="100" class="menu-icon-svg">
            <path d="
                     M16 
                     132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 
                     160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 0 0 16zm0 
                     160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
          </svg>
        </button>
        <label style={{margin: '10px'}}>
          <input type="radio" name="editList" value="air" />🜁
        </label>
        <label style={{margin: '10px'}}>
          <input type="radio" name="editList" value="fire" />🜂
        </label>
        <label style={{margin: '10px'}}>
          <input type="radio" name="editList" value="earth" />🜃
        </label>
        <label style={{margin: '10px'}}>
          <input type="radio" name="editList" value="water" />🜄
        </label>
{/*        <ul class="menu-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>*/}
      </nav>
    </div>
    </>
  );
}

export default App;
