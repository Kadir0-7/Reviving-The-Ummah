
import { Dropdown, DropdownMenuItemType, IDropdownStyles, IDropdownOption } from '@fluentui/react/lib/Dropdown';
import { useEffect, useState } from "react";

const Quran: React.FC = () => {
// const endPoint ="http://api.alquran.cloud/v1/quran/en.asad"
const [quranText, setQuranText] = useState([])
const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 300 },
};
const surahOptions = (quranText: any) =>{
  const option = quranText.map((name: any) =>{
    return { key: name.englishName, text: name.englishName ,data:name.ayahs}
  }  )
  
  return option
}
const options: IDropdownOption[] = [
  { key: 'fruitsHeader', text: 'Fruits', itemType: DropdownMenuItemType.Header },
  { key: 'apple', text: 'Apple' },
  { key: 'banana', text: 'Banana' },
  { key: 'orange', text: 'Orange', disabled: true },
  { key: 'grape', text: 'Grape' },
  { key: 'divider_1', text: '-', itemType: DropdownMenuItemType.Divider },
  { key: 'vegetablesHeader', text: 'Vegetables', itemType: DropdownMenuItemType.Header },
  { key: 'broccoli', text: 'Broccoli' },
  { key: 'carrot', text: 'Carrot' },
  { key: 'lettuce', text: 'Lettuce' },
];
const getQuran = async () => {
    const response = await fetch("http://api.alquran.cloud/v1/quran/quran-uthmani ");
const movies = await response.json();
const {surahs} = movies.data
setQuranText(surahs)

}
useEffect(() => {
getQuran()
console.log(surahOptions(quranText))
},[])

    return (
      <div className="quranPage">
     <Dropdown
         placeholder="Select an option"
         label="Pick Your Surah"
         options={surahOptions(quranText)}
         styles={dropdownStyles}
       
      />
        <audio controls src=""></audio>
      </div>
    );
  }
  
  export default Quran;