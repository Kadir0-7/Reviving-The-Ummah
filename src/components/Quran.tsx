import { Card, CardPreview, makeStyles, shorthands } from "@fluentui/react-components";
import "../index.css"
import { Dropdown,   } from '@fluentui/react/lib/Dropdown';
import { useEffect, useState } from "react";





const Quran: React.FC = () => {
 const endPoint ="../../surahs.json"
const [quranText, setQuranText] = useState([])
const [surahDisplay , setSurahDisplay]= useState([])


const surahOptions = (quranText: any) =>{
  const option = quranText.map((surah: any) =>{
    return { key: surah.surahName, text: surah.surahName ,data:surah.id}
  }  )
  
  return option
}
const surah = surahDisplay.map((e: any)=>e).join(" ۞ ")

const getSurahList = async () => {
  const response = await fetch(endPoint);
  const surahList = await response.json();
  setQuranText(surahList)
}
const onChange = async (id:number) => {
  const response = await fetch(`https://quranapi.pages.dev/api/${id}.json`);
  const surahData = await response.json()
  setSurahDisplay(surahData.arabic1)
}



useEffect(() => {
getSurahList()
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
        
          <CardPreview>
      <p style={{fontSize:30}} dir="rtl">{surah}</p>
      </CardPreview>


      </div>
     
      </div>
     
    );
  }
  
  export default Quran;