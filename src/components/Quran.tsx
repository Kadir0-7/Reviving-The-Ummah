import { Card, CardHeader, CardPreview } from "@fluentui/react-components";
import "../index.css";
import { Dropdown, IDropdownOption } from "@fluentui/react/lib/Dropdown";
import { useEffect, useState, useMemo } from "react";

interface Surah {
  id: number;
  surahName: string;
}

const Quran: React.FC = () => {
  const endPoint = "../../surahs.json";
  const [quranText, setQuranText] = useState<Surah[]>([]);
  const [surahDisplay, setSurahDisplay] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch list of surahs
  const getSurahList = async () => {
    try {
      const response = await fetch(endPoint);
      if (!response.ok) throw new Error("Failed to fetch Surah list.");
      const surahList = await response.json();
      setQuranText(surahList);
    } catch (err) {
      setError("ERROR");
    } finally {
      setLoading(false);
    }
  };

  // Fetch selected surah content
  const handleSurahChange = async (id: number) => {
    try {
      setLoading(true);
      const response = await fetch(`https://quranapi.pages.dev/api/${id}.json`);
      if (!response.ok) throw new Error("Failed to fetch Surah data.");
      const surahData = await response.json();
      setSurahDisplay(surahData.arabic1.join(" ۞ "));
    } catch (error) {
      setError("ERROR");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSurahList();
  }, []);

  // Generate dropdown options, memoized for efficiency
  const surahOptions = useMemo(
    () =>
      quranText.map((surah) => ({
        key: surah.id,
        text: surah.surahName,
      })),
    [quranText]
  );

  return (
    <div className="quran-container">
      <Dropdown
      
        placeholder="Select a Surah"
        options={surahOptions}
        onChange={(_, option) => handleSurahChange(option?.key as number)}
        className="quran-dropdown"
      />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <Card className="quran-card" >
          <CardHeader><p>{"بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ"}</p></CardHeader>
          <CardPreview>
            <p>{surahDisplay}</p>
          </CardPreview>
        </Card>
      )}
    </div>
  );
};

export default Quran;
