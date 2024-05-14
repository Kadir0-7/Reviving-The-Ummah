import "../../index.css"
import { Dropdown,   } from '@fluentui/react/lib/Dropdown';
import { useEffect, useState } from "react";

const Quran: React.FC = () => {
// const endPoint ="http://api.alquran.cloud/v1/quran/en.asad"
const [quranText, setQuranText] = useState([])
const [surahDisplay , setSurahDisplay]= useState([])

const surahOptions = (quranText: any) =>{
  const option = quranText.map((name: any) =>{
    return { key: name.englishName, text: name.englishName ,data:name.ayahs}
  }  )
  
  return option
}
const surah = surahDisplay.map((e: any)=>e?.text).join(" {۞} ")



const getQuran = async () => {
    const response = await fetch("http://api.alquran.cloud/v1/quran/quran-uthmani ");
const movies = await response.json();
const {surahs} = movies.data
setQuranText(surahs)

}
useEffect(() => {
getQuran()
console.log(surahDisplay)
console.log(surah)
},[])

    return (
      <div className="quranPage">
       
     <Dropdown 
     className='justify-content-center'
         placeholder="Select an option"
         label="Pick Your Surah"
         options={surahOptions(quranText)}
       
       onChange={(_,option) => {setSurahDisplay(option?.data)}}
      />
      <div>
      <p dir="rtl">{surah}</p>

        {/* <audio controls src=""></audio> */}
      </div>
     
      </div>
     
    );
  }
  
  export default Quran;