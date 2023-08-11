// components
import ItemHeader from "../components/Item/ItemHeader";
import SpeakersList from "../components/Speakers/SpeakersList";
import ItemsNavigation from "../components/ItemsNavigation/ItemsNavigation";

function SpeakersPage() {
  return (
    <>
      <ItemHeader title="Speakers" />
      <SpeakersList />
      <ItemsNavigation />
    </>
  );
}

export default SpeakersPage;
