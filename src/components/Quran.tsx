import "../index.css"
import { Dropdown,   } from '@fluentui/react/lib/Dropdown';
import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";

const Quran: React.FC = () => {
 const endPoint ="../../surahs.json"
const [quranText, setQuranText] = useState([])
const [surahDisplay , setSurahDisplay]= useState([])
const [surahAudio, setSurahAudio] = useState([])
const [playingIndex, setPlayingIndex] = useState(0);

const surahOptions = (quranText: any) =>{
  const option = quranText.map((surah: any) =>{
    return { key: surah.surahName, text: surah.surahName ,data:surah.id}
  }  )
  
  return option
}
const surah = surahDisplay.map((e: any)=>e).join(" ۞ ")
const ifSurahEmpty = "https://cdn.islamic.network/quran/audio/128/ar.alafasy/6231.mp3"
const getSurahList = async () => {
  const response = await fetch(endPoint);
  const surahList = await response.json();
  setQuranText(surahList)
}
const onChange = async (id:number) => {
  const response = await fetch(`https://quranapi.pages.dev/api/${id}.json`);
  const surahData = await response.json()
  setSurahDisplay(surahData.arabic1)
  const getAudio =await fetch(`http://api.alquran.cloud/v1/surah/${id}/ar.alafasy`)
  const audio = await getAudio.json()
const ayahs = audio.data.ayahs
setSurahAudio(ayahs)
}

useEffect(() => {
getSurahList()
console.log(surahDisplay)
console.log(surahAudio)
},[])

    return (
      <div className="quranPage">
    
     <Dropdown 
     className='justify-content-center quranDropdown'
         placeholder="Select an option"
         label="Pick Your Surah"
         options={surahOptions(quranText)}
       dropdownWidth={300 }
       onChange={(_,option) => {onChange(option?.data)}}
      /> 
      
      <div>
      <p style={{fontSize:35}} dir="rtl">{surah}</p>


      </div>
     
      </div>
     
    );
  }
  
  export default Quran;